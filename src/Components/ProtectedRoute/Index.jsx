import { Navigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/Auth/AuthContext'

function Index({ children }) {
  const { isLogin } = useAuth()
  return isLogin ? children : <Navigate to="/login" />
}

export default Index
