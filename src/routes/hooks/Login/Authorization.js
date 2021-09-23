import { getUserStorage } from '@/storage/user'
import { useAuth } from '@/context/login/index'
import { useEffect } from 'react'
const userHook = () => {
  const { setUser } = useAuth()
  const user = getUserStorage()
  useEffect(() => {
    setUser(user)
  }, [])
  const isAuthorization = () => {
    if (!user) return false
    return new Date() < new Date(user.exp * 1000)
  }

  return { isAuthorization }
}

export default userHook
