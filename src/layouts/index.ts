import { clients } from '../../settings/clients'
import { ClientSettings } from '../../_temp_clients-settings/ClientSettings.type'
import { getClientBySubdomain } from '../utils/getClientBySubdomain'

const getClientComponentsByURL = (): any => {
    const clientSubdomain = getClientBySubdomain()

    const { components } = clients.find((client: ClientSettings) =>
        client.subdomains.find(subdomain => subdomain === clientSubdomain)
    )

    return components
}

export default getClientComponentsByURL()
