import styled from "styled-components";

export const Container = styled.div`
    min-width: 332px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px; 
    background: var(--bg-gray);
    border-radius: 1rem;
    height: 100%;
`;

export const Total = styled.h1`
    font-size: var(--lg-text);
    line-height: 1.5rem;
    font-weight: 600;
    color: var(--main-white);
`;

export const Section = styled.div`
    padding-top: 24px;
    border-top: 1px solid #303238;
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: var(--md-text);
    line-height: 1.25rem;
    color: var(--main-white);
`;

export const Columns = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 16px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Category = styled.h3`
    font-size: var(--xs-text);
    line-height: 1.25rem;
    color: var(--main-gray);
`;

export const Value = styled.p`
    font-size: var(--xs-text);
    line-height: 1.25rem;
    color: var(--main-white);
`;
