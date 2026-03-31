import styled from "styled-components";
import CloseIcon from '../../assets/svg/x.svg?react'
import PrevArrow from '../../assets/svg/slaid-left.svg?react'
import NextArrow from '../../assets/svg/slaid-right.svg?react'

export const Gallery = styled.div`
  margin-top: 30px;
  padding: 15px;
`

export const PrevIcon = styled(PrevArrow)`
  position: absolute;
  left: 300px;
  top: 350px;

  background-color: ${({ theme }) => theme.card};
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  box-shadow: ${({ theme }) => theme.shadow};

  &:hover {
    transform: scale(1.1);
  }
`

export const NextIcon = styled(NextArrow)`
  position: absolute;
  right: 300px;
  top: 350px;

  background-color: ${({ theme }) => theme.card};
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  box-shadow: ${({ theme }) => theme.shadow};

  &:hover {
    transform: scale(1.1);
  }
`

export const Close = styled(CloseIcon)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  stroke: ${({ theme }) => theme.text};

  &:hover {
    opacity: 0.7;
  }
`

export const GalleryItem = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;  
  cursor: pointer;
  transition: 0.3s;

  ${({ size }) => {
    if (size === "big") return "grid-column: span 2; grid-row: span 2;";
    if (size === "wide") return "grid-column: span 2;";
    if (size === "tall") return "grid-row: span 2;";
    return "";
  }};

  &:hover {
    transform: scale(1.03);
  }
`

export const GalleryWrapper = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;

  padding: 15px;
  margin-top: 30px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  grid-auto-flow: dense;
  grid-auto-rows: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`