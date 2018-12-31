export const s = (...list: any[]) => {
    return list.reduce((prev, current) => {
        return current ? (prev ? prev + " " + current : current) : prev;
    }, undefined);
};
