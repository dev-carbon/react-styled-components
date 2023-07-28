import styled from "styled-components";

export const SidebarContainer = styled.div`
    grid-column: 3 / -1;
    grid-row: 2 / -1;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
`

export const UserAavatar = styled.img`
    width: 80px;
    height: auto;
    border-radius: 100vw;
    margin-bottom: 1.5rem;
`

export const UserName = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
`

export const UserNumber = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-size: .942rem;
`

export const Information = styled.div``

export const InformationTitle = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: 1.2rem;

`

export const InformationList = styled.ul`
    padding: 2rem;
`

export const InformationListItem = styled.li`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
`

export const RewardBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto 1rem 1rem;
    padding: 2rem;
    border-radius: 17px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`

export const RewardImgBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;
`

export const RewardImg = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
`

export const RewardParagraph = styled.p`
    color: ${({ theme }) => theme.colors.gray};
    text-align: center;
    font-weight: 700;

`