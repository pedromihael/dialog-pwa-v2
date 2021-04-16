import React from 'react'
import { Container } from './styles'

interface Props {
    label: string
}

export const DefaultButton: React.FC<Props> = ({ label }) => {
    return <Container>{label}</Container>
}
