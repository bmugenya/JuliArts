import styled from 'styled-components/macro'


export const Background = styled.div`
  padding: 20px 0 120px;
  display: block;
  flex-direction: column;
  border-bottom: 8px solid #222;
  background: black;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : '../images/misc/un.png'})
    top left / cover no-repeat;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : '../images/misc/un.png'})
      top left / cover no-repeat;
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 20px 0;
    justify-content: space-between;
    a {
        display: flex;
    }
    @media (max-width: 1000px){
        margin 0 30px;
    }
`
