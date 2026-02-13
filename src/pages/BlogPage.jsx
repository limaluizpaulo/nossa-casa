import React from 'react';
import Blog from '../components/Blog';
import { ScrollProgress } from '../hooks/useAnimations';

const BlogPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <Blog />
    </div>
  );
};

export default BlogPage;