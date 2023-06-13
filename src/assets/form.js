import styled from 'styled-components/macro'

import { Link as router } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: rgb(241, 241, 241);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
  color: #111;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`

export const Text = styled.p`
  color: #111;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 10px;
  color: #8c8c8c;
  font-size: 13px;
  line-height: normal;
`
export const Link = styled(router)`
  color: black;
  text-decoration: none;

  &:hover {
    color: rgb(233, 30, 99);
  }
`

export const Input = styled.input`
  background: #fff;
  border-radius: 4px;
  border: 0;
  color: black;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`

export const Submit = styled.button`
  background: #ff1749;
  border-radius: 4px;
  margin:24px 0 12px;
  border: 0;
  color: white;
  cursor:pointer;
  padding: 16px;
  font-weight:bold;
  
  &:disabled{
   opacity:0.5;
  }

  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
