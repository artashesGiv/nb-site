import { memo, useMemo } from 'react'

import './icon-base.scss'

export type IconBaseProps = {
  name: Icons
}

export const IconBase = memo<IconBaseProps>(({ name }) => {
  const classes = useMemo(() => `icon-base icon-${name}`, [name])

  return <i className={classes} />
})

IconBase.displayName = 'IconBase'
