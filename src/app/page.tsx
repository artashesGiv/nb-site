'use client'

import './page.scss'
import { Button, IconBase } from '@/shared'
import { create } from 'zustand'

interface Store {
  count: number
  increment: () => void
}

const useStore = create<Store>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}))

export default function Home() {
  const { count, increment } = useStore()

  return (
    <div className='home'>
      <h1>
        {<IconBase name='cross' />} HOME {count}
      </h1>
      <Button onClick={increment}>increment</Button>
    </div>
  )
}
