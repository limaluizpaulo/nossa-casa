import React from 'react';
import Blog from '../components/Blog';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const BlogPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <PageHero
        eyebrow="Notícias e relatos"
        title={<>
          Nosso <span className="highlight">blog</span>
        </>}
        description="Acompanhe histórias, notícias e bastidores da Nossa Casa."
        imageSrc="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=1600&auto=format&fit=crop"
        imageAlt="Pessoa escrevendo em caderno em ambiente acolhedor"
        caption="Memórias e narrativas da comunidade"
      />
      <Blog />
    </div>
  );
};

export default BlogPage;