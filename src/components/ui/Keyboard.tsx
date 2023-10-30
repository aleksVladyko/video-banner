import { KeyboardProps } from '../../types/types'
import PhoneButton, { btnStyle } from './PhoneButton'

const Keyboard = ({
  numberButtons,
  buttonRef,
  handleNumberButtonClick,
  handleEraseButtonClick,
}: KeyboardProps) => {
  return (
    <div className="grid grid-cols-[repeat(3,88px)] gap-[10px] py-5">
      {numberButtons &&
        numberButtons.map((number) => (
          <button
            key={number}
            ref={buttonRef[number]}
            className={btnStyle}
            type="button"
            onClick={() => handleNumberButtonClick(number)}
          >
            {number}
          </button>
        ))}
      <PhoneButton
        handleEraseButtonClick={handleEraseButtonClick}
        className="col-span-2"
      >
        backspace
      </PhoneButton>
    </div>
  )
}

export default Keyboard
