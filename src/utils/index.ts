export const s = (...list: any[]) => {
    return list.reduce((prev, current) => {
        return current ? prev + ' ' + current : prev
    })
}
