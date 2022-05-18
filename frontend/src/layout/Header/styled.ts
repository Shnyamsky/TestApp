import styled from "@emotion/styled"

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 0 125px;
  gap: 30px;
`

export const HeaderLinkCase = styled.div`
  a {
    color: white;
    font-size: 20px;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      font-size: 25px;
    }
  }
`

export const UserInfo = styled.div`
  color: white;
  font-size: 20px;
`
