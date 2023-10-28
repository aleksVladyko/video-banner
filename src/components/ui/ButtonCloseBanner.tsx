import { useNavigate } from 'react-router-dom'

const ButtonCloseBanner = () => {
  const navigate = useNavigate()
  const closeBanner = () => {
    navigate('/unhappy')
  }
  return (
    <>
      <button onClick={closeBanner} className="absolute top-4 right-4">
        Close Banner
      </button>
    </>
  )
}
export default ButtonCloseBanner
