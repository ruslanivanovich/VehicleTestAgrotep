import styled from "styled-components";
import FileIcon from '../../assets/svg/file.svg?react'

export const OverviewWrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
`

export const Documents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DividerVertical = styled.div`
  width: 1px;
  background: ${({ theme }) => theme.border};
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.divider};
  margin: 12px 0;
`;

export const Police = styled.div`
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  width: 320px;
  padding: 20px;
`

export const PoliceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Dates = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateActivity = styled(Dates)`
  align-items: center;
  gap: 10px;
`;

export const DateItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const Value = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
`;

export const File = styled(FileIcon)`
  width: 40px;
  height: 40px;
  padding: 10px;

  background: ${({ theme }) => theme.iconBg};
  border-radius: 10px;
  stroke: ${({ theme }) => theme.primary};
`;

export const Telematics = styled.div`
  margin-top: 15px;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  padding: 15px;
`;

export const TelematicsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TelematicsLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Bar = styled.div`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme.border};
  border-radius: 6px;
  overflow: hidden;
`;

export const getLevelColor = (level, theme) => {
  if (level <= 30) return theme.dangerText;
  if (level <= 50) return theme.warningText;
  return theme.successText;
};

export const Fill = styled.div`
  height: 100%;
  width: ${({ level }) => level}%;

  background: ${({ level, theme }) => getLevelColor(level, theme)};
  border-radius: 6px;
  transition: width 0.3s ease;
`;

export const History = styled.div`
  margin-top: 15px;
  background: ${({ theme }) => theme.card};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  padding: 15px;
`;

export const HistoryWrapper = styled.div``;

export const Active = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InfoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Badge = styled.span`
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 6px;
  font-weight: 500;

  background: ${({ theme, status }) => {
    if (status === "active") return theme.successBg;
    if (status === "expired") return theme.dangerBg;
    return theme.cardSoft;
  }};

  color: ${({ theme, status }) => {
    if (status === "active") return theme.successText;
    if (status === "expired") return theme.dangerText;
    return theme.text;
  }};
`;