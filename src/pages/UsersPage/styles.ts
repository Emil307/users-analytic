import styled from "styled-components";

export const Page = styled.main`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    height: 100vh;
    padding: 32px 32px 0 32px;
    background-color: var(--main-black);
`;

export const Content = styled.div`
    height: fit-content:
    max-height: calc(100vh - 52px - 1.5rem);
    overflow: auto;
`;
