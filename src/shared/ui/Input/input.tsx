import { type ChangeEvent, memo, useCallback, useMemo } from 'react';
import { IconBase } from '../IconBase';
import './input.scss';

export type InputProps = DefaultProps<{
  icon: Icons;
  value?: string;
  placeholder?: string;
  isError?: boolean;
  size?: 'm' | 'l';
  onChange: (value: string) => void;
  onChangeIsError?: (isError: boolean) => void;
}>;

export const Input = memo<InputProps>(props => {
  const normalizedProps = {
    ...props,
    size: props.size ?? 'm',
  };

  const { value, icon, onChange, placeholder, onChangeIsError } =
    normalizedProps;

  const classes = useInputClasses(normalizedProps);

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
      onChangeIsError?.(false);
    },
    [onChange, onChangeIsError],
  );

  return (
    <div className={classes}>
      {icon && <IconBase name={icon} className='input__icon' />}
      <input
        value={value}
        type='text'
        placeholder={placeholder}
        className='input__value'
        onChange={onChangeHandler}
      />
    </div>
  );
});

Input.displayName = 'Input';

const useInputClasses = ({ className, isError, size }: InputProps) =>
  useMemo(() => {
    const classes = [className, 'input', `input--size--${size}`];

    if (isError) {
      classes.push('is-error');
    }

    return classes.join(' ');
  }, [className, isError, size]);
