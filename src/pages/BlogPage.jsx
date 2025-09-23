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
  imageSrc="/images/heros/blog.svg"
        imageAlt="Pessoa escrevendo relatos comunitários em caderno"
        caption="Memórias e narrativas da comunidade"
      />
      <Blog />
    </div>
  );
};

export default BlogPage;