import './card-base.scss';
import { memo, useMemo } from 'react';

export type CardBaseProps = DefaultPropsWithChildren<{
  size?: 's' | 'm' | 'l';
}>;

export const CardBase = memo<CardBaseProps>(
  ({ children, className = '', size = 'm' }) => {
    const classes = UseCardBaseClasses({ className, size });

    return <div className={classes}>{children}</div>;
  },
);

CardBase.displayName = 'CardBase';

const UseCardBaseClasses = ({ className, size }: CardBaseProps) =>
  useMemo(() => {
    const classes = [className, 'card-base', `card-base--size--${size}`];

    return classes.join(' ');
  }, [className, size]);
