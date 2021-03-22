import { Theme } from '../styles/styled'

export type ClientSettings = {
    name: string
    subdomains: string[]
    styles: Theme
    components: any
}
