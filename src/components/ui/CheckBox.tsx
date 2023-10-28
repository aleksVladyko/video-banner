type Props = {
  handlePdCheckboxClick: () => void
}

const CheckBox = ({ handlePdCheckboxClick }: Props) => {
  return (
    <fieldset className="m-0 p-4 w-60 border-none flex items-center gap-5">
      <input
        className="w-10 h-10"
        id="pd-checkbox"
        type="checkbox"
        onClick={handlePdCheckboxClick}
      />
      <label htmlFor="pd-checkbox" className=" m-0 w-56">
        Согласие на обработку персональных данных
      </label>
    </fieldset>
  )
}

export default CheckBox
