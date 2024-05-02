import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    border-radius: 1rem;
`;

export const SelectButton = styled.button`
    display: flex
    flex-direction: column;
    gap: 1rem;
    width: 332px;
    padding: 1.25rem;
    background: var(--bg-gray);
    border-radius: 1rem;
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

export const Name = styled.h2`
    font-size: var(--lg-text);
    line-height: 1.5rem;
    font-weight: 600;
    text-align: left;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Email = styled.p`
    font-size: var(--sm-text);
    line-height: 1.25rem;
    font-weight: 500;
    color: var(--main-white);
    text-align: left;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Details = styled.div`
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
    text-align: left;
    font-size: var(--xs-text);
    line-height: 1.25rem;
    color: var(--main-gray);
`;

export const Value = styled.p`
    text-align: left;
    font-size: var(--xs-text);
    line-height: 1.25rem;
    color: var(--main-white);
    text-align: left;
    width: 220px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border-radius: 0 1rem 0 1rem;
    border: 1px solid var(--border-red);
`;
