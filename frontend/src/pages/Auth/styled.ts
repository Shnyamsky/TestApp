import styled from "@emotion/styled"

export const MainCase = styled.main`
  max-width: 500px;
  width: 100%;
  display: flex;
`

export const SectionCase = styled.section`
  width: 100%;
  padding: 20px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.3);
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  color: #fff;
`

export const Input = styled.input`
  padding: 10px;
  outline: none;
  border: none;
  border-bottom: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  color: #fff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5)
  }
`

export const LinkCase = styled.div`
a {
  margin-top: 15px;
  width: 100%;
  font-size: 15px;
  color: #fff;
  display: inline-block;
}
`

export const Button = styled.button`
  font-size: 18px;
  width: max-content;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid #fff;
  border-radius: 15px;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const ErrorCase = styled.div`
  color: red;
`