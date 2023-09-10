import * as S from './LoginPage.style'
import UiButton from 'src/components/UiButton/UiButton'
import UiInput from 'src/components/UiInput'
import logo from 'src/assets/yourmessenger-low-resolution-logo-color-on-transparent-background.png'
import { useInput } from './hooks'

export default function LoginPage() {

  const idInstance = useInput('', { isEmpty: true, minLength: 6 })
  const apiTokenInstance = useInput('', {
    isEmpty: true,
    minLength: 50,
    isToken: true,
  })

  function handleButtonClick() {
    console.log("data sent")
    // setLocalStorage
  }

  return (
    <S.PageWrapper>
      <S.LogoImg src={logo} />
      <S.BarWrapper>
        <S.ErrorBox>
          {idInstance.emptyInputError && idInstance.isUsed ? (
            <S.ErrorMessage>Строка не должна быть пустой</S.ErrorMessage>
          ) : null}
          {idInstance.lengthError && idInstance.isUsed ? (
            <S.ErrorMessage>Введите 6 цифр</S.ErrorMessage>
          ) : null}
        </S.ErrorBox>

        <UiInput
          onChange={(e) => idInstance.onChange(e)}
          onBlur={(e) => idInstance.onBlur(e)}
          value={idInstance.value}
          placeholder={'idInstance'}
          type="number"
        />

        <S.ErrorBox>
          {apiTokenInstance.emptyInputError && apiTokenInstance.isUsed ? (
            <S.ErrorMessage>Строка не должна быть пустой</S.ErrorMessage>
          ) : null}
          {apiTokenInstance.lengthError && apiTokenInstance.isUsed ? (
            <S.ErrorMessage>Введите 50 символов</S.ErrorMessage>
          ) : null}
          {apiTokenInstance.tokenError && apiTokenInstance.isUsed ? (
            <S.ErrorMessage>(только латинские буквы и цифры)</S.ErrorMessage>
          ) : null}
        </S.ErrorBox>

        <UiInput
          onChange={(e) => apiTokenInstance.onChange(e)}
          onBlur={(e) => apiTokenInstance.onBlur(e)}
          value={apiTokenInstance.value}
          placeholder={'apiTokenInstance'}
          type="text"
        />

        <UiButton
          onClick={handleButtonClick}
          disabled={
            idInstance.emptyInputError ||
            apiTokenInstance.emptyInputError ||
            idInstance.lengthError ||
            apiTokenInstance.tokenError ||
            apiTokenInstance.lengthError
              ? true
              : false
          }
          children={'Войти'}
        />
      </S.BarWrapper>
    </S.PageWrapper>
  )
}
