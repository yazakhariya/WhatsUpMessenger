import { styled } from 'styled-components'

export const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`

export const BarWrapper = styled.div`
  background-color: #2ECC40;
  width: fit-content;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const LogoImg = styled.img`
  width: 200px;
`