import { useQuery, useMutation } from '@tanstack/react-query'

const API_URL =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_HEADERS = {
  'content-type': 'application/json',
  apikey: 'KDT8_bcAWVpD8',
  username: 'KDT5_ParkYoungWoong'
}

export function useCreateTodo() {
  return useMutation({
    mutationFn: async ({ inputTitle }) => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT5_ParkYoungWoong'
          },
          body: JSON.stringify({
            title: inputTitle
          })
        }
      )
      return await res.json()
    }
  })
}

export function useReadTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT5_ParkYoungWoong'
          }
        }
      )
      return await res.json()
    }
  })
}

export function useUpdateTodo() {
  return useMutation({
    mutationFn: async ({ todo, inputTitle }) => {
      const res = await fetch(
        `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todo.id}`,
        {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT5_ParkYoungWoong'
          },
          body: JSON.stringify({
            title: inputTitle,
            done: todo.done
          })
        }
      )
      return await res.json()
    }
  })
}
