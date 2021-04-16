import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
    --primary: 'rgb(33, 172, 122)';

    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    &.primary {
        color: '#FFFFFF';
        background-color: var(---primary);
    }

    &.secondary {
        color: '#333333';
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }

    &.small {
        font-size: 12px;
        padding: 10px 16px;
    }

    &.medium {
        font-size: 14px;
        padding: 11px 20px;
    }

    &.large {
        font-size: 16px;
        padding: 12px 24px;
    }

    &:hover {
        box-shadow: 0px 2px 26px 0px rgba(0, 0, 0, 0.32);
        background: ${darken(0.16)('var(--primary)')};
    }

    &:disabled {
        background: ${darken(0.1)('var(--primary)')};
    }
`
