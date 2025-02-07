import { memo, ReactNode, useMemo } from 'react'

import './button.scss'

export type ButtonProps = {
  disabled?: boolean
  className?: string
  children?: ReactNode
  onClick: () => void
}

export const Button = memo<ButtonProps>(
  ({ children, onClick, disabled = false, className }) => {
    const classes = useMemo(() => {
      return `button ${disabled && 'is-disabled'} ${className || ''}`
    }, [disabled, className])

    return (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
