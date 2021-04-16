import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.button`
    --primary: 'rgb(33, 172, 122)';

    background: var(--primary);
    border: 1.5px none;
    border-radius: 30px;
    color: white;
    height: 48px;
    outline: none;
    transition: all 0.3s linear 0s;
    width: 130px;

    &:hover {
        box-shadow: 0px 2px 26px 0px rgba(0, 0, 0, 0.32);
        background: ${darken(0.16)('var(--primary)')};
    }

    &:disabled {
        background: ${darken(0.1)('var(--primary)')};
    }

    ${props =>
        props.outlined &&
        css`
            background: transparent;
            border: 1.5px var(--primary);
        `}
`
