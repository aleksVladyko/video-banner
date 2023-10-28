import Portal from '../portal/Portal'
import { Props } from '../../types/types'

const PopupPhone = ({ children, isOpened }: Props) => {
  if (!isOpened) {
    return null
  }

  return (
    <Portal>
      <div
        className="popup flex justify-center items-center h-screen w-screen "
        role="phone"
      >
        <div className="w-[1280px] h-[720px] bg-happyDogy">{children}</div>
      </div>
    </Portal>
  )
}
export default PopupPhone
