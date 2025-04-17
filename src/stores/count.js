import { create } from 'zustand'

const initialState = {
  count: 1,
  double: 2
}

export const useCountStore = create((set, get) => ({
  ...initialState,
  increase: () => {
    const { count } = get()
    set({ count: count + 1 })
    // set({ 상태: 새로운값 })
    set(state => ({
      count: state.count + 1
    }))
  },
  decrease: () => {
    const { count } = get()
    set({ count: count - 1 })
  },
  reset: () => {
    set(initialState)
  }
}))

// const a = () => { return {} }
// const b = () => ({})
