export const getClientBySubdomain = (): string => {
    const location = window.location.href
    const clientSubdomain = location.split('dialog.cm')[0]

    return !!clientSubdomain.length ? clientSubdomain : 'dialog'
}
