'use client'

import './page.scss'
import { Button, IconBase } from '@/shared'
import { create } from 'zustand'

interface Store {
  count: number
  increment: () => void
  reset: () => void
}

const useStore = create<Store>(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  reset: () => set(() => ({ count: 0 })),
}))

export default function Home() {
  const { count, increment, reset } = useStore()

  return (
    <div className='home'>
      <h1>
        {
          <Button onClick={reset}>
            <IconBase name='cross' />
          </Button>
        }
        HOME {count}
      </h1>
      <Button onClick={increment}>increment</Button>
    </div>
  )
}
