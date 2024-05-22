import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type User = {
  name: string
  age: number
}

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([])

  const addUsers = (_users: User[]) => {
    users.value = _users
  }

  const getUsers = computed(() => {
    return users.value
  })

  return {
    addUsers,
    getUsers,
  }
})
