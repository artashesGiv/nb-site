import { type ChangeEvent, memo, useCallback, useMemo } from 'react';

import { IconBase } from '../IconBase';

import './input.scss';

export type InputProps = DefaultProps<{
  icon: Icons;
  value?: string;
  placeholder?: string;
  isError?: boolean;
  onChange: (value: string) => void;
  onChangeIsError?: (isError: boolean) => void;
}>;

export const Input = memo<InputProps>(props => {
  const { value, icon, onChange, placeholder, onChangeIsError } = props;

  const classes = useInputClasses(props);

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

const useInputClasses = ({ className, isError }: InputProps) =>
  useMemo(() => {
    const classes = [className, 'input'];

    if (isError) {
      classes.push('is-error');
    }

    return classes.join(' ');
  }, [className, isError]);
