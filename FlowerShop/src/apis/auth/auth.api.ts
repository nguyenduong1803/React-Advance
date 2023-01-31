import http from 'src/utils/http'
import endpointAuth from './endpoints'

export const registerAccount = (body: { email: string; password: string }) => http.post(endpointAuth.login, body)
