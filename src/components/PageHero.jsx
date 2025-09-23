import React from 'react';
import Button from './Button';
import '../styles/hero.css';

/*
  PageHero component
  Props:
  - eyebrow?: string
  - title: string | ReactNode
  - description?: string | ReactNode
  - imageSrc: string
  - imageAlt: string
  - caption?: string
  - ctas?: Array<{ label: string, href: string, variant?: 'fill'|'outline'|'text' }>
*/

const PageHero = ({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  caption,
  ctas = []
}) => {
  return (
    <section className="hero" aria-labelledby="page-hero-title">
      <div className="wrap">
        <div className="hero__content">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="page-hero-title" className="display">{title}</h1>
          {description && (
            <p className="lead">{description}</p>
          )}
          {ctas.length > 0 && (
            <div className="hero__cta">
              {ctas.map((cta, idx) => (
                <Button key={idx} variant={cta.variant || 'fill'} href={cta.href}>
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>

        <figure className="hero__media">
          <img src={imageSrc} alt={imageAlt} loading="eager" />
          {caption && (
            <figcaption className="hero__caption">{caption}</figcaption>
          )}
        </figure>
      </div>
    </section>
  );
};

export default PageHero;
