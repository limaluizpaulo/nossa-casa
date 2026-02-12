#!/usr/bin/env node

/**
 * Script de otimização de imagens para o site Nossa Casa
 * 
 * Este script:
 * - Redimensiona imagens grandes para tamanhos apropriados para web
 * - Comprime imagens mantendo qualidade visual
 * - Gera versões WebP para navegadores modernos
 * - Mantém os originais como fallback
 */

import sharp from 'sharp';
import { readdir, stat, mkdir, copyFile } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurações de otimização
const CONFIG = {
  // Largura máxima para imagens hero
  maxWidth: 1920,
  // Qualidade JPEG (0-100)
  jpegQuality: 85,
  // Qualidade PNG (0-100)
  pngQuality: 85,
  // Qualidade WebP (0-100)
  webpQuality: 80,
  // Tipos de arquivo suportados para otimização
  supportedFormats: ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'],
  // Tipos de arquivo para copiar sem modificação
  copyFormats: ['.svg', '.gif', '.webp'],
};

/**
 * Copia um arquivo sem modificação
 */
async function copyFilePreserved(inputPath, outputPath) {
  console.log(`\n📋 Copiando: ${basename(inputPath)}`);
  
  try {
    // Garantir que o diretório de saída existe
    await mkdir(dirname(outputPath), { recursive: true });
    
    // Copiar o arquivo
    await copyFile(inputPath, outputPath);
    
    const stats = await stat(inputPath);
    const size = (stats.size / 1024).toFixed(2);
    console.log(`   ✅ Copiado: ${size}KB`);
    
  } catch (error) {
    console.error(`   ❌ Erro ao copiar: ${error.message}`);
  }
}

/**
 * Processa um arquivo de imagem
 */
async function processImage(inputPath, outputPath) {
  const ext = extname(inputPath).toLowerCase();
  const outputBasePath = outputPath.replace(extname(outputPath), '');
  
  console.log(`\n📸 Processando: ${basename(inputPath)}`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`   Tamanho original: ${metadata.width}x${metadata.height}`);
    
    // Redimensionar se necessário
    let processedImage = image;
    if (metadata.width > CONFIG.maxWidth) {
      processedImage = processedImage.resize(CONFIG.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
      console.log(`   ✂️  Redimensionando para largura máxima: ${CONFIG.maxWidth}px`);
    }
    
    // Garantir que o diretório de saída existe
    await mkdir(dirname(outputPath), { recursive: true });
    
    // Otimizar e salvar no formato original
    if (ext === '.jpg' || ext === '.jpeg') {
      await processedImage
        .jpeg({
          quality: CONFIG.jpegQuality,
          progressive: true,
          mozjpeg: true,
        })
        .toFile(outputPath);
      console.log(`   ✅ JPEG otimizado salvo`);
    } else if (ext === '.png') {
      await processedImage
        .png({
          quality: CONFIG.pngQuality,
          compressionLevel: 9,
          palette: true,
        })
        .toFile(outputPath);
      console.log(`   ✅ PNG otimizado salvo`);
    }
    
    // Gerar versão WebP
    const webpPath = `${outputBasePath}.webp`;
    await processedImage
      .webp({
        quality: CONFIG.webpQuality,
        effort: 6,
      })
      .toFile(webpPath);
    console.log(`   ✅ WebP gerado`);
    
    // Mostrar economia de espaço
    const originalStats = await stat(inputPath);
    const optimizedStats = await stat(outputPath);
    const webpStats = await stat(webpPath);
    
    const originalSize = (originalStats.size / 1024 / 1024).toFixed(2);
    const optimizedSize = (optimizedStats.size / 1024 / 1024).toFixed(2);
    const webpSize = (webpStats.size / 1024 / 1024).toFixed(2);
    const savings = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
    const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`   📊 Original: ${originalSize}MB → Otimizado: ${optimizedSize}MB (${savings}% menor)`);
    console.log(`   📊 WebP: ${webpSize}MB (${webpSavings}% menor que original)`);
    
  } catch (error) {
    console.error(`   ❌ Erro ao processar: ${error.message}`);
  }
}

/**
 * Processa todos os arquivos em um diretório recursivamente
 */
async function processDirectory(inputDir, outputDir) {
  try {
    const entries = await readdir(inputDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const inputPath = join(inputDir, entry.name);
      const outputPath = join(outputDir, entry.name);
      
      if (entry.isDirectory()) {
        await processDirectory(inputPath, outputPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (CONFIG.supportedFormats.includes(ext)) {
          await processImage(inputPath, outputPath);
        } else if (CONFIG.copyFormats.includes(ext)) {
          await copyFilePreserved(inputPath, outputPath);
        }
      }
    }
  } catch (error) {
    console.error(`Erro ao processar diretório ${inputDir}:`, error.message);
  }
}

/**
 * Função principal
 */
async function main() {
  console.log('🎨 Otimizador de Imagens - Nossa Casa\n');
  console.log('=' .repeat(60));
  
  const publicImagesPath = join(__dirname, 'public', 'images');
  const srcAssetsPath = join(__dirname, 'src', 'assets');
  
  // Criar diretórios temporários para imagens otimizadas
  const publicOptimizedPath = join(__dirname, 'public', 'images-optimized');
  const assetsOptimizedPath = join(__dirname, 'src', 'assets-optimized');
  
  console.log('\n📁 Processando public/images...');
  await processDirectory(publicImagesPath, publicOptimizedPath);
  
  console.log('\n📁 Processando src/assets...');
  await processDirectory(srcAssetsPath, assetsOptimizedPath);
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Otimização concluída!\n');
  console.log('📝 Próximos passos:');
  console.log('   1. Revise as imagens otimizadas');
  console.log('   2. Substitua os diretórios originais pelos otimizados:');
  console.log('      rm -rf public/images && mv public/images-optimized public/images');
  console.log('      rm -rf src/assets && mv src/assets-optimized src/assets');
  console.log('   3. Implemente suporte a WebP no código com fallback');
  console.log('   4. Adicione lazy loading nas imagens\n');
}

main().catch(console.error);
