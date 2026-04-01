import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";
import VehicleIcon from '../../assets/svg/bus-front.svg?react'
import LogOutIcon from '../../assets/svg/log-out.svg?react'

export const VehicleSection = styled.div`
  background-color: ${({ theme }) => theme.bg};
`;

export const MenuWrapper = styled.div`
  display:flex;
  gap:20px;
  max-width:1280px;
  margin:0 auto;
  @media (max-width: 1024px) {
  max-width:900px;
}
    @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

export const Location = styled.div`
  flex: 1;
  min-width:0;

  
  padding: 30px;
  display:flex;
  gap:10px;
  align-items:center;
  border-radius: 10px;
  border: none;

  background-color: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
   @media (max-width: 1024px) {

}
   @media(max-width:768px){

   
   }

`;

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    transition: 0.25s;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 16px;

  &.active {
    svg{
      stroke: ${({ theme }) => theme.primary};
    }
    color: ${({ theme }) => theme.primary};
  }
`;

export const TopMenu = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:40px;
  @media (max-width: 1024px) {
   gap:20px;
}
     @media (max-width: 768px) {
    flex-direction: row; 
    gap: 20px;
  }
`;

export const HeaderTopBar = styled.div`
  display:flex;
  align-items:center;
  min-width: 0;
  gap:20px;
  margin-top:20px;
`;

export const BottomMenu = styled.div``;

export const Vehicle = styled(VehicleIcon)`
  background-color:${({ theme }) => theme.primary};
  padding:5px;
  border-radius:5px;
  width:40px;
  height:40px;
`;

export const TableWrapper = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  margin-top: 40px;
   overflow-x: auto;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const variants = {
  primary: {
    bg: "#2F80ED",
    color: "#fff",
    hover: "#1F6FE0",
  },
  delete: {
    bg: "transparent",
    color: "#F04438",
    border: "1px solid",
  },
  notice: {
    bg: "transparent",
    border: "1px solid",
  }
};

export const Title = styled.h2`
  font-size: 20px;
   white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  min-width:0;
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  display:flex;
  align-items:center;
  gap: 5px;
  transition: 0.2s;

  background: ${({ variant = "primary", theme }) =>
    variant === "primary" ? theme.primary : variants[variant].bg};

  color: ${({ variant = "primary", theme }) =>
    variant === "primary" ? "#fff" : variants[variant].color || theme.text};

  border: ${({ variant = "primary", theme }) =>
    variant === "primary"
      ? "none"
      : `${variants[variant].border} ${theme.border}`};

  &:hover {
    background: ${({ variant = "primary", theme }) =>
      variant === "primary"
        ? "#1F6FE0"
        : theme.hover};
  }
`;

export const StyledTable = styled.table`
  
width: 100%;
  border-collapse: collapse;
  border-radius:10px;
   min-width: 700px;
 
  overflow:hidden;
  @media(max-width:768px){

  
  }
`;

export const THead = styled.thead`
  background: ${({ theme }) => theme.sidebar};
`;

export const Th = styled.th`
  text-align: left;
  padding: 12px 16px;
  cursor:pointer;
  font-size: 16px;
  color: ${({ theme }) => theme.muted};
  font-weight: 500;
`;

export const Td = styled.td`
  padding: 14px 16px;
  border-top: 1px solid ${({ theme }) => theme.border};
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Tr = styled.tr`
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

export const VehicleCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const VehicleImage = styled.img`
  width: 80px;
  height: 60px;
   @media (max-width: 768px) {
    width: 50px;
    height: 40px;
  }
`;

export const ColorBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ColorDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;

export const Status = styled.span`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 16px;

  background: ${({ status }) =>
    status === "active"
      ? "rgba(18, 183, 106, 0.15)"
      : status === "inactive"
      ? "rgba(240, 68, 56, 0.15)"
      : "rgba(247, 144, 9, 0.15)"};

  color: ${({ status }) =>
    status === "active"
      ? "#12B76A"
      : status === "inactive"
      ? "#F04438"
      : "#F79009"};
`;

export const LogOut = styled(LogOutIcon)`
  background-color: #EB5757;
  padding:5px;
  border-radius:5px;
  width:40px;
  height:40px;
`;

export const SideBar = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  justify-content:space-between;

  background-color: ${({ theme }) => theme.sidebar};

  width:50px;
  padding:10px;
  border-radius:10px;
  @media (max-width: 768px) {
    flex-direction: row; 
    width: 100%;
    height: auto;
    align-items: center;
  }
`;

export const TopBar = styled.div`
 flex: 1;
  min-width: 0; 
`;

export const IconWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  cursor: pointer;

  &:hover svg {
    stroke: ${({ theme }) => theme.text};
  }

  &:hover {
    color: ${({ theme }) => theme.text};
  }
     @media (max-width: 768px) {
    flex-direction: row; 
    gap: 5px;
  }
`;