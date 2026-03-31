import styled from "styled-components";
import { StyledNavLink } from "../Vehicles/VehiclesStyled";
import { Vehicle } from "../Vehicles/VehiclesStyled";

export const VehicleCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  overflow:hidden;
  margin-top:40px;
  padding:20px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const VehicleInformation = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top:20px; 
  border-radius:10px;
  padding:20px;
  background: ${({ theme }) => theme.cardBg};
`;

export const Truck = styled(Vehicle)`
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.bg};
  border-radius: 50%;
  stroke: ${({ theme }) => theme.primary};
`;
export const TitleLabel = styled.h3`
color:${({theme})=> theme.text};
`
export const TitleValue = styled.p`
color:${({theme})=> theme.text};
`
export const VehicleCardHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`;

export const VehicleCardContent = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const NoteText = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.muted};
`;

export const AddNotice = styled.div`
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  margin-top:10px;
  padding: 16px 20px;
`;

export const SideMenu = styled.div`
  margin-top:40px;
  flex: 1;
  min-width: 500px;
`;

export const Ul = styled.ul`
  display:flex;
  gap:30px;
  padding-bottom:10px;
`;

export const Li = styled.li`
  list-style:none;
  color: ${({ theme }) => theme.muted};
  font-size:20px;
`;

export const MenuLink = styled(StyledNavLink)`
  position: relative;
  color: ${({ theme }) => theme.muted};
  font-size: 20px;
  text-decoration: none;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;

    background: ${({ theme }) => theme.primary};

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &.active {
    color: ${({ theme }) => theme.text};
  }

  &.active::after {
    transform: scaleX(1);
  }
`;