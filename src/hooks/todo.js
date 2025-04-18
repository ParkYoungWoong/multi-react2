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
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: API_HEADERS,
        body: JSON.stringify({
          title: inputTitle
        })
      })
      return await res.json()
    }
  })
}

export function useReadTodos() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: API_HEADERS
      })
      return await res.json()
    }
  })
}

export function useUpdateTodo() {
  return useMutation({
    mutationFn: async ({ todo, inputTitle }) => {
      const res = await fetch(`${API_URL}/${todo.id}`, {
        method: 'PUT',
        headers: API_HEADERS,
        body: JSON.stringify({
          title: inputTitle,
          done: todo.done
        })
      })
      return await res.json()
    }
  })
}

export function useDeleteTodo() {
  return useMutation({
    mutationFn: async ({ todo }) => {
      const res = await fetch(`${API_URL}/${todo.id}`, {
        method: 'DELETE',
        headers: API_HEADERS
      })
      return await res.json()
    }
  })
}
