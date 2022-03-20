import styled, { css } from 'styled-components'

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
  ${(props) =>
    props.loading === 'true' &&
    css`
      object-fit: scale-down;
    `}
`

export const Image = styled.img`
  background-color: #aaa;
  border: 1px solid #fff;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`
