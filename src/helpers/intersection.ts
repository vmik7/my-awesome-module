export function intersection<T>(first: T[], second: T[]) {
    const setFirst = new Set<T>(first);
    const setSecond = new Set<T>(second);
    const intersection = new Set<T>([...setFirst].filter(x => setSecond.has(x)));

    return Array.from(intersection);
}