import { memo, useMemo } from 'react'

import './button.scss'

export type ButtonProps = DefaultProps<{
  disabled?: boolean
  text?: string
  className?: string
  onClick: () => void
}>

export const Button = memo<ButtonProps>(
  ({ onClick, disabled = false, className, text }) => {
    const classes = useMemo(() => {
      return `button ${disabled && 'is-disabled'} ${className || ''}`
    }, [disabled, className])

    return (
      <button className={classes} onClick={onClick}>
        {text}
      </button>
    )
  },
)

Button.displayName = 'Button'
