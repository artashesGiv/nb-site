import { memo, useMemo } from 'react';
import './card-base.scss';

export type CardBaseProps = DefaultPropsWithChildren<{
  size?: 's' | 'm' | 'l';
  view?: 'base' | 'fill';
  href?: string;
}>;

export const CardBase = memo<CardBaseProps>(props => {
  const normaliseProps: CardBaseProps = {
    ...props,
    size: props.size ?? 'm',
    view: props.view ?? 'base',
  };

  const { children, onClick, href } = normaliseProps;

  const classes = useProjectCardClasses(normaliseProps);

  return (
    <div className={classes} onClick={onClick || undefined}>
      {children}
      {href && <a href={href} target='_blank' className='card-base__href' />}
    </div>
  );
});

CardBase.displayName = 'CardBase';

const useProjectCardClasses = ({
  className,
  size,
  view,
  onClick,
  href,
}: CardBaseProps) =>
  useMemo(() => {
    const classes = [
      className,
      'card-base',
      `card-base--size--${size}`,
      `card-base--view--${view}`,
    ];

    if (onClick || href) {
      classes.push('is-interactive');
    }

    return classes.join(' ');
  }, [className, size, view, onClick, href]);
