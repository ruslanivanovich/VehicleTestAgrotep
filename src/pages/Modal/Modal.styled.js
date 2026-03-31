import styled from "styled-components";
import Close from '../../assets/svg/x.svg?react'

export const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;

  stroke: ${({ theme }) => theme.text};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;

  background-color: rgba(0, 0, 0, 0.5); /* трохи темніше — краще виглядає */
  padding: 30px;
  box-sizing: border-box;
`;

export const Modal = styled.div`
  position: relative;
  overflow: hidden auto;

  width: 700px;
  max-width: 100%;

  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text};

  padding: 30px;
  border-radius: 16px;

  box-shadow: ${({ theme }) => theme.shadow};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 32px;
  font-family: "Style Script", cursive;
  margin: 0;
`;