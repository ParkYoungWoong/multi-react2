import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const useUserStore = create(
  immer((set, get) => ({
    isLoggedIn: false,
    user: {
      name: 'HEROPY',
      age: 85,
      contact: {
        emails: ['thesecon@gmail.com', 'test@heropy.dev'],
        address: {
          city: 'Suwon'
        }
      }
    },
    setIsLoggedIn: value => {
      set({ isLoggedIn: value })
      set(state => (state.isLoggedIn = value))
      set(state => (state.user.name = 'Neo'))
      // set(state => ({
      //   user: {
      //     ...state.user,
      //     name: 'Neo'
      //   }
      // }))
    },
    setUserSecondEmail: newEmail => {
      set(state => {
        state.user.contact.emails[1] = newEmail
      })
      // const { user } = get()
      // set({
      //   user: {
      //     ...user,
      //     contact: {
      //       ...user.contact,
      //       emails: [user.contact.emails, newEmail]
      //     }
      //   }
      // })
    }
  }))
)
