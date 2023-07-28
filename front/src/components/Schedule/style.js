import { Link } from "react-router-dom";
import styled from "styled-components";

export const ScheduleContainer = styled.div`

`

export const ScheduleTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`

export const ScheduleTableContainer = styled.div`
    background-color: white;
    border-radius: 1.5rem;
    width: 100%;
`


export const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export const ScheduleTableHead = styled.thead``

export const ScheduleTableBody = styled.tbody``

export const ScheduleTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBlue};
  
  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 0.625em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const ScheduleTableHeadCell = styled.th`
  padding: 2rem 1.5rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};

  &:nth-child(n+2) {
    text-align: center;
    border: red;
  }
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const ScheduleTableData = styled.td`
    font-size: large.942rem;
    padding: 1rem 1.5rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};

    &:nth-child(n+2) {
        text-align: center;
        padding: 1rem 0;
        border: red;
    }
`
export const EquipmentLink = styled(Link)`
    text-decoration: none;
    color: #149911;
`