import { memo, useMemo } from 'react';
import { IconBase } from '../IconBase';
import { Spinner, SpinnerProps } from '../Spinner';

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
  onClick?: () => void;
}>;

export const Button = memo<ButtonProps>(props => {
  const normalizedProps = {
    ...props,
    view: props.view ?? 'primary',
    size: props.size ?? 'm',
  };

  const {
    text,
    icon,
    onClick,
    loading,
    view = 'primary',
    size = 'm',
  } = normalizedProps;

  const classes = useButtonClasses(normalizedProps);
  const spinnerProps = useSpinnerProps({ view, size });

  return (
    <button className={classes} onClick={onClick}>
      {loading ? (
        <Spinner {...spinnerProps} />
      ) : (
        <>
          {icon && <IconBase name={icon} className='button__icon' />}
          {text}
        </>
      )}
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
  icon,
  text,
}: ButtonProps) =>
  useMemo(() => {
    const classes = [
      'button',
      `button--size--${size}`,
      `button--view--${view}`,
    ];

    if (className) {
      classes.push(className);
    }

    if (disabled || loading) {
      classes.push('is-disabled');
    }

    if (icon && !text) {
      classes.push('is-only-icon');
    }

    return classes.join(' ');
  }, [disabled, className, size, view, loading, icon, text]);

const SPINNER_VIEW_MAP: Record<ButtonView, SpinnerProps['view']> = {
  base: 'primary',
  flat: 'dark',
  primary: 'light',
};

const SPINNER_SIZE_MAP: Record<ButtonSize, SpinnerProps['size']> = {
  s: 's',
  m: 'm',
  l: 'l',
  xl: 'l',
};

const useSpinnerProps = ({
  view,
  size,
}: Pick<Required<ButtonProps>, 'view' | 'size'>): SpinnerProps => ({
  view: SPINNER_VIEW_MAP[view],
  size: SPINNER_SIZE_MAP[size],
});
