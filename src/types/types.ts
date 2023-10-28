export type Props = {
  className?: string
  style?: React.CSSProperties | null
  children?: React.ReactNode | null | undefined
  isOpened?: boolean | undefined
  setIsOpened?: boolean
  onClose?: () => void | undefined
  openModal?: () => void | undefined
  onClick?: () => void | undefined
  handleEraseButtonClick?: () => void | string
  ref?: React.RefObject<HTMLButtonElement>
}
export type SubmitForm = {
  successSubmit: boolean
}
export type ButtonRef = {
  [key: string]: React.RefObject<HTMLButtonElement>
}
export type ValidationResponse = {
  valid: boolean
  line_type: string
}
