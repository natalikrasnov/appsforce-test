export function fromStringToJson(stringifyJson) {
    try {
        const json = JSON.parse(stringifyJson)
        return json
    } catch (e) {
        return null
    }
}