import { Theme } from '../src/styles/styled'
import { clients } from '../settings/clients'
import { ClientSettings } from '../src/types/ClientSettings'
import { getClientBySubdomain } from '../src/utils/getClientBySubdomain'

export const getClientStylesByURL = (): Theme => {
    const clientSubdomain: string = getClientBySubdomain()

    const { styles } = clients.find((client: ClientSettings) =>
        client.subdomains.find(subdomain => subdomain === clientSubdomain)
    )

    return styles
}
