import { memo, useMemo } from 'react';
import { IconBase } from '../IconBase';

import './button.scss';

type ButtonView = 'primary' | 'base' | 'flat';
type ButtonSize = 's' | 'm' | 'l' | 'xl';

export type ButtonProps = DefaultProps<{
  text?: string;
  view?: ButtonView;
  size?: ButtonSize;
  icon?: Icons;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}>;

export const Button = memo<ButtonProps>(props => {
  const { text, icon, onClick } = props;

  // const isOnlyIcon = useMemo(() => {
  //   return icon && !text;
  // }, [text, icon]);

  const classes = useButtonClasses(props);

  return (
    <button className={classes} onClick={onClick}>
      {icon && <IconBase name={icon} className='button__icon' />}
      {text}
    </button>
  );
});

Button.displayName = 'Button';

const useButtonClasses = ({
  disabled,
  className,
  size,
  view,
  loading,
}: ButtonProps) =>
  useMemo(() => {
    const classes = [
      className,
      'button',
      `button--size-${size}`,
      `button--view-${view}`,
    ];

    if (disabled || loading) {
      classes.push('is-disabled');
    }

    return classes.join(' ');
  }, [disabled, className, size, view, loading]);
