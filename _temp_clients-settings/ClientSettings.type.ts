import { Theme } from '../src/styles/styled'

export type ClientSettings = {
    name: string
    subdomains: string[]
    styles: Theme
    components: any
}
