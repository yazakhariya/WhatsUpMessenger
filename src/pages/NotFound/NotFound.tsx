import * as S from './NotFound.style'
import error from 'src/assets/404.png'

export default function NotFound() {
  return (
    <S.PageWrapper>
      <S.Img src={error} />
    </S.PageWrapper>
  )
}
