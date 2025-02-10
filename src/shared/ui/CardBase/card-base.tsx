import './card-base.scss';
import { memo, useMemo } from 'react';

export type CardBaseProps = DefaultPropsWithChildren<{
  size?: 's' | 'm' | 'l';
  href?: string;
}>;

export const CardBase = memo<CardBaseProps>(
  ({ children, className = '', size = 'm', href }) => {
    const classes = useProjectCardClasses({ className, size });

    return (
      <div className={classes}>
        {children}
        {href && <a href={href} className={'card-base__href'}></a>}
      </div>
    );
  },
);

CardBase.displayName = 'CardBase';

const useProjectCardClasses = ({ className, size }: CardBaseProps) =>
  useMemo(() => {
    const classes = [className, 'card-base', `card-base--size--${size}`];

    return classes.join(' ');
  }, [className, size]);
