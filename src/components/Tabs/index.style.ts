import styled from "styled-components";

export const Container = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => isActive && '#1890ff'};
`