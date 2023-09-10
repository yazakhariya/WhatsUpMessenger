import * as S from './UiInput.style'

type Props = {
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  type: string
}

const UiInput = ({ value, onChange, placeholder, onBlur, type }: Props) => {
  return (
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
    />
  )
}

export default UiInput
