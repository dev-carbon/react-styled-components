import { Link } from "react-router-dom";
import styled from "styled-components";


export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    width: 20rem;
    max-width: 100%;
    height: 21rem;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    border-radius: 1.5rem;
`

export const CardCaption = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    padding: 1rem;
    border-radius: 1.5rem;
`

export const CardLink = styled(Link)`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
`

export const CardDescription = styled.span`
    font-size: 0.942rem;
    color: ${({ theme }) => theme.colors.primary};
`