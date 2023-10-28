import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonRef } from '../types/types'
import { setSuccessSubmit } from '../store/appSlice'
import { findLastDigitIndex, parsePhoneNumber } from '../helpers/helpers'
import validatePhone from '../helpers/validatePhone'
import { useMask } from '@react-input/mask'
import CheckBox from '../components/ui/CheckBox'
import PhoneButton, { btnStyle } from '../components/ui/PhoneButton'
import ErrorNumber from '../components/ui/ErrorNumber'

const BannerPhone = () => {
  const dispatch = useDispatch()

  const [isNumberValid, setIsNumberValid] = useState<boolean>(false)
  const [isValidationDone, setIsValidationDone] = useState<boolean>(false)
  const [isErrorShown, setIsErrorShown] = useState<boolean>(false)
  const [isPdBtnChecked, setIsPdBtnChecked] = useState<boolean>(false)
  const [isFormValid, setIsFormValid] = useState<boolean>(false)

  const numberButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const phoneInputStyle = `${'p-0 h-[36px] w-[284px] font-bold text-xl text-black-500 text-center tracking-widest bg-lightblue border-0'}`

  const buttonRef: ButtonRef = {}
  numberButtons.concat(['Backspace']).forEach((number) => {
    buttonRef[number] = useRef(null)
  })
  // phone number mask
  const inputRef = useMask({
    mask: '+7(___)___-__-__',
    showMask: true,
    separate: false,
  })

  const runNumberValidation = async (number: string): Promise<void> => {
    // exit if already run validation on current number
    if (isValidationDone) {
      return
    }

    setIsValidationDone(true)
    const validationData = await validatePhone(number)

    if (
      validationData &&
      validationData.valid &&
      validationData.line_type === 'mobile'
    ) {
      setIsNumberValid(true)
      setIsErrorShown(false)
    } else {
      setIsNumberValid(false)
      setIsErrorShown(true)
      setIsPdBtnChecked(false)
    }
  }

  // button clicks
  const handleNumberButtonClick = (number: string) => {
    if (inputRef.current) {
      inputRef.current.value = inputRef.current.value.replace(/_/, number)
    }

    // set focus on the button
    buttonRef[number].current?.focus()

    // run validation on last digit input
    if (
      inputRef.current?.value.length === 16 &&
      !/_/.test(inputRef.current.value)
    ) {
      const parsedPhoneNumber = parsePhoneNumber(inputRef.current.value)
      runNumberValidation(parsedPhoneNumber)
    }
  }

  const handleEraseButtonClick = () => {
    if (inputRef.current) {
      const maskedValue = inputRef.current.value
      const lastDigitIndex = findLastDigitIndex(maskedValue)

      // set focus on backspace
      buttonRef.Backspace.current?.focus()

      // erase last digit, but ignore the first one (country code)
      if (lastDigitIndex && lastDigitIndex !== -1 && lastDigitIndex !== 1) {
        const newValue = `${maskedValue.substring(
          0,
          lastDigitIndex,
        )}_${maskedValue.substring(lastDigitIndex + 1)}`
        inputRef.current.value = newValue
      }

      // reset validation
      setIsNumberValid(false)
      setIsValidationDone(false)
    }
  }

  // pd checkbox click
  const handlePdCheckboxClick = () => {
    setIsPdBtnChecked(!isPdBtnChecked)
  }

  // submit form
  const handleSubmitBtn: React.MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.preventDefault()
    if (isFormValid) {
      dispatch(setSuccessSubmit())
    }
  }

  // validate form
  useEffect(() => {
    if (
      isNumberValid &&
      isPdBtnChecked &&
      inputRef.current &&
      !/_/.test(inputRef.current.value)
    ) {
      setIsFormValid(true)
    } else {
      setIsFormValid(false)
    }
  }, [isNumberValid, isPdBtnChecked, inputRef])

  return (
    <form className=" flex flex-col gap-3 justify-center items-center h-[-100%] w-35px p-40px-20px bg-lightblue">
      <fieldset className="flex flex-col g-3 w-11/12 text-black">
        <label className="text-xl text-center" htmlFor="phonenumber">
          Введите ваш номер мобильного телефона
        </label>
        <input id="phonenumber" className={phoneInputStyle} ref={inputRef} />
        <span className="text-base text-center">
          и с Вами свяжется наш менеждер для дальнейшей консультации
        </span>
      </fieldset>
      <div className="grid grid-cols-[repeat(3,88px)] gap-[10px] py-5 ">
        {numberButtons.map((number) => (
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

      {isErrorShown ? (
        <ErrorNumber />
      ) : (
        <CheckBox handlePdCheckboxClick={handlePdCheckboxClick} />
      )}

      <button
        className="flex h-14 w-[284px] items-center justify-center bg-black uppercase text-white disabled:border disabled:border-dimgray disabled:bg-transparent disabled:text-dimgray"
        type="submit"
        onClick={handleSubmitBtn}
        disabled={!isFormValid}
      >
        подтвердите номер
      </button>
    </form>
  )
}
export default BannerPhone
