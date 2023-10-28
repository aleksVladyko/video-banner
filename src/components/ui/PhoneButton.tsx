import { Props } from '../../types/types'

export const btnStyle = `${'flex h-[52px] items-center justify-center border-2 border-black font-medium transition-colors hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white active:scale-95'}`

const PhoneButton = ({ handleEraseButtonClick, children, ref }: Props) => {
  return (
    <button
      ref={ref}
      onClick={handleEraseButtonClick}
      type="button"
      className={btnStyle}
    >
      {children}
    </button>
  )
}

export default PhoneButton
