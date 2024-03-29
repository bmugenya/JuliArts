import styled from 'styled-components/macro'

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* this is how you pass a property to a styled component 
       - then look in index.js of this component for calling method
       - here, you can make the flex from left or right based on how you call it */
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: black;
  overflow: hidden;
`

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`

export const Pane = styled.div`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1em;
  margin-bottom: 8px;
  color:rgb(233, 30, 99);
  @media (max-width: 600px) {
    font-size: 35px;
  }
`

export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
