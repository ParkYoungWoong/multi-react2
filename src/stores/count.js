import { create } from 'zustand'
import { subscribeWithSelector, persist, devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer((set, get) => ({
          count: 1,
          double: 2,
          increase: () => {
            set(state => {
              state.count += 1
            })
          },
          decrease: () => {
            set(state => {
              state.count -= 1
            })
          }
        }))
      ),
      {
        name: 'countStore',
        partialize: state => ({
          count: state.count
        })
      }
    )
  )
)

// useCountStore.subscribe(선택자, 리스너)
useCountStore.subscribe(
  state => state.count, // 선택자
  count => {
    useCountStore.setState({
      double: count * 2
    })
  } // 리스너
)
