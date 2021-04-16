import React from 'react'
import { Container } from './styles'

export interface Props {
    primary?: boolean
    backgroundColor?: string
    size?: 'small' | 'medium' | 'large'
    label: string
    onClick?: () => void
}

export const DefaultButton: React.FC<Props> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    const mode = primary ? 'primary' : 'secondary'
    return (
        <Container
            type="button"
            className={`${mode} ${size}`}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </Container>
    )
}
