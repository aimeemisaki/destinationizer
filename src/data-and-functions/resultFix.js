export function resultFix (c, s) {
    const city = c.toLowerCase().replace(' ', '-').concat('-')
    const state = s.toLowerCase()
    return city.concat(state)
}
