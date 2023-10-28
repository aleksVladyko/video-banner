import { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
}
const Portal = ({ children }: Props) => {
  const container = useMemo(() => document.createElement('div'), [])
  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [])
  return ReactDOM.createPortal(children, container)
}
export default Portal
