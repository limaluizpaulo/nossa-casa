import { forwardRef } from 'react';

/**
 * Componente de imagem otimizada com suporte a WebP e lazy loading automático
 * 
 * Usa o elemento <picture> para fornecer WebP para navegadores modernos
 * com fallback para formatos tradicionais (JPEG/PNG).
 * 
 * @example
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Descrição da imagem"
 *   loading="lazy"
 *   className="hero-image"
 * />
 */
const OptimizedImage = forwardRef(({ 
  src, 
  alt, 
  className = '',
  loading = 'lazy',
  width,
  height,
  ...props 
}, ref) => {
  // Gera o caminho WebP substituindo a extensão
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Determina o tipo MIME do fallback
  const getMimeType = (src) => {
    if (src.match(/\.png$/i)) return 'image/png';
    if (src.match(/\.jpg|\.jpeg$/i)) return 'image/jpeg';
    return 'image/jpeg';
  };

  return (
    <picture>
      {/* Versão WebP para navegadores modernos */}
      <source srcSet={webpSrc} type="image/webp" />
      
      {/* Fallback para navegadores que não suportam WebP */}
      <source srcSet={src} type={getMimeType(src)} />
      
      {/* Elemento img como fallback final */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={loading}
        className={className}
        width={width}
        height={height}
        {...props}
      />
    </picture>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
