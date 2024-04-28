import styled from "styled-components";

export const Container = styled.div`
    display: flex
    flex-direction: column;
    gap: 1rem;
    width: 332px;
    padding: 1.25rem;
    border-radius: 1rem;
    background: var(--bg-gray);
`;

export const Summary = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SummaryImage = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
`;

export const SummaryText = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`;

export const Details = styled.div`

`;
