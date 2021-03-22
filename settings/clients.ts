export const clients = [
    {
        name: 'Dialog',
        subdomains: ['dialog'],
        styles: require('../clients-settings/styles/dialog'),
        components: require('../clients-settings/components/dialog')
    },
    {
        name: 'SBT',
        subdomains: ['sbt-pwa'],
        styles: require('../clients-settings/sbt'),
        components: require('../clients-settings/components/sbt')
    },
    {
        name: 'Klabin',
        subdomains: ['klabin-pwa', 'klapp'],
        styles: require('../clients-settings/klabin'),
        components: require('../clients-settings/components/klabin')
    }
]
