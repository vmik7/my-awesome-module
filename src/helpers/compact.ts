export function compact<T>(array: Array<T | null | undefined | false | '' | 0>): T[] {
    return array.filter(Boolean) as T[];
}