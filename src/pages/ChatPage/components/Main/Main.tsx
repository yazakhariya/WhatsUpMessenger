import * as S from './Main.style'
import ChatBox from './components/ChatBox'
import SideBar from './components/SideBar'

export default function Main() {
  return (
    <S.PageWrapper>
      <SideBar />
      <ChatBox />
    </S.PageWrapper>
  )
}
