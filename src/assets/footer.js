import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background:rgb(241, 241, 241);
  flex-direction: column;
`

export const Column = styled.div`
  display: grid;
     grid-template-columns: 30em 200em;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`

export const Title = styled.p`
  color: #757575;
  font-size: 16px;
  margin-bottom: 40px;
`

export const Text = styled.p`
  color: #757575;
  font-size: 13px;
  margin-bottom: 40px;
`

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`

export const Button = styled.button`
  padding: 6px 10px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Image = styled.img`
 height: 108px;
  width: 108px;
`
