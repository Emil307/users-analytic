import styled from "styled-components";

export const Grid = styled.div`
    width: calc(100vw - 64px - 16px - 332px);
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, 332px);
    height: 100%;
    overflow: auto;
`;
