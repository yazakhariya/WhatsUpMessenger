import * as React from 'react'
import * as S from './ChatPage.style'
import Main from './components/Main/Main'
import logo from './../../../public/whatsapp-svgrepo-com.svg'

// type Props = {}

export default function ChatPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = React.useState(false)

  return (
    <S.PageWrapper>
      {loading ? <S.LogoImg src={logo} /> : <Main />}
    </S.PageWrapper>
  )
}
