import styled from 'styled-components'

export const Container = styled.div<{ color: 'light' | 'dark' }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  box-shadow: ${({ color }) => color === 'light' ? '0px 0px 10px 5px #f9f9f9' : '0px 0px 20px 10px #1b2d50'};
`