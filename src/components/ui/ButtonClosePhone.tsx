import IconBtnClose from '../../assets/btn-close.svg'
import { Props } from '../../types/types'

const ButtonClosePhone = ({ onClose }: Props) => {
  return (
    <button onClick={onClose} className="flex h-[52px]">
      <img
        className="h-[52px]"
        alt="close"
        src={IconBtnClose}
        draggable="false"
      />
    </button>
  )
}

export default ButtonClosePhone
