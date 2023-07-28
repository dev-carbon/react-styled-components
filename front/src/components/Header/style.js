import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 242px .4fr .6fr;
    grid-column: 1 / -1;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 17px;
    border-top-right-radius: 17px;
    padding: 1rem 2rem;
`

export const HeaderBrand = styled(Link)`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
`

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

export const SearchInput = styled.input`
    height: 100%;
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 1rem 0 1rem 1rem;
    border: none;
    border-radius: 17px;
    outline: none;
`

export const SearchButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 17px;
    cursor: pointer;
`

export const ButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;
`

export const Button = styled.button`
    background-color: #fff;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 100vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
`