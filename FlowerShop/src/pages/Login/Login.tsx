import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { registerAccount } from 'src/apis/auth/auth.api'
import _omit from 'src/utils/_omit'
const Login = () => {
  const loginMutation = useMutation({
    mutationFn: (body: { email: string; password: string }) => registerAccount(body),
    onSuccess: (res) => {
      console.log(res)
    },
    onError: (err) => {
      console.log(err)
    }
  })
  const handleSubmit = () => {
    loginMutation.mutate({ email: 'test1@gmail.com', password: '123456' })
    const result = _omit(['hai'], { name: 'duong', hai: 'nam' })
    console.log(result)
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleSubmit}>Clicked to Login</button>
    </div>
  )
}

export default Login
