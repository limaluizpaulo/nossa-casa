import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  href, 
  onClick,
  type = 'button',
  disabled = false,
  as: Component = 'button',
  to,
  ...props 
}, ref) => {
  const baseClass = 'btn';
  const variantClass = variant === 'fill' ? 'btn--fill' : 
                       variant === 'secondary' ? 'btn--secondary' :
                       variant === 'accent' ? 'btn--accent' :
                       variant === 'outline' ? 'btn--outline' :
                       variant === 'text' ? 'btn--text' : '';
  const sizeClass = size === 'small' ? 'btn--small' :
                    size === 'large' ? 'btn--large' : '';
  const fullClassName = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  // Se href está presente, renderizar como link tradicional
  if (href && !disabled) {
    return (
      <a 
        ref={ref}
        className={fullClassName} 
        href={href}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Se Component for especificado (como Link do React Router)
  if (Component !== 'button') {
    return (
      <Component
        ref={ref}
        className={fullClassName}
        to={to}
        onClick={onClick}
        {...props}
      >
        {children}
      </Component>
    );
  }

  // Renderizar como button padrão
  return (
    <button 
      ref={ref}
      className={fullClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;