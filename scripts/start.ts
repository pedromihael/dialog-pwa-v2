import { Theme } from '../src/styles/styled'
import { clients } from '../settings/clients'
import { ClientSettings } from '../_temp_clients-settings/ClientSettings.type'
import { getClientBySubdomain } from '../src/utils/getClientBySubdomain'

export const getClientStylesByURL = (): Theme => {
    const clientSubdomain = getClientBySubdomain()

    const { styles } = clients.find((client: ClientSettings) =>
        client.subdomains.find(subdomain => subdomain === clientSubdomain)
    )

    return styles
}
