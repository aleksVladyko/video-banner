import ButtonClosePhone from '../ui/ButtonClosePhone'

import { Props } from '../../types/types'
import BannerSuccessMassage from '../BannerSuccessMassage'
import BannerPhone from '../../formPhone/BannerPhone'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useEffect } from 'react'
const PhonePopover = ({ onClose }: Props) => {
  const navigate = useNavigate()

  // state to render component after submit success
  const successSubmit = useSelector(
    (state: RootState) => state.formSubmit.successSubmit,
  )
  useEffect(() => {
    let inactivityTimer: number | undefined

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = window.setTimeout(() => {
        navigate('/')
      }, 10000)
    }

    document.addEventListener('keydown', resetInactivityTimer)
    document.addEventListener('click', resetInactivityTimer)

    resetInactivityTimer()

    return () => {
      document.removeEventListener('keydown', resetInactivityTimer)
      document.removeEventListener('click', resetInactivityTimer)
      clearTimeout(inactivityTimer)
    }
  }, [navigate])

  return (
    <div className="flex flex-row justify-between h-full">
      {successSubmit ? <BannerSuccessMassage /> : <BannerPhone />}

      <ButtonClosePhone onClose={onClose} />
    </div>
  )
}
export default PhonePopover
