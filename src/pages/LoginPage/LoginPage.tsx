import * as S from './LoginPage.style'
import UiButton from 'src/components/UiButton/UiButton'
import UiInput from 'src/components/UiInput'
import logo from 'src/assets/yourmessenger-low-resolution-logo-color-on-transparent-background.png'

//TODO кнопка, отправка данных, валидация инпутов

export default function LoginPage() {
  return (
    <S.PageWrapper>
      <S.LogoImg src={logo} />
      <S.BarWrapper>
        <UiInput placeholder={'Логин'} />
        <UiInput placeholder={'Пароль'} />
        <UiButton children={'Войти'} />
      </S.BarWrapper>
    </S.PageWrapper>
  )
}
