import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    grid-column: 1 / 2;
    grid-row: 2 / -1;
    display: flex;
    flex-direction: column;
`

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const NavItem = styled.li``

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 700;
    text-decoration: none;
    padding: 1rem 2rem;

    &:hover {
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.primary};
    }
`

export const LogoutBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #A0BFDB;
    margin: auto 1rem 1rem;
    margin-top: auto;
    margin-bottom: 2rem;
    padding: 1rem;
    border-radius: 17px;
`

export const LogoutImg = styled.img`
    width: 70%;
    height: auto;
    margin-bottom: 1rem;
`

export const LogoutParagraph = styled.p`
    color: #fff;
    margin-bottom: 1.5rem;

`

export const LogoutButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    padding: 10px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    width: 100%;
    text-decoration: none;
    text-align: center;
`