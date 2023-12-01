type StandardEnum<T> = {
    [id: string]: T | string;
    [nu: number]: string;
}

export function enumToArray(
    e: StandardEnum<number>
): { id: number, name: string }[] {
    const list: { id: number, name: string }[] = [];

    for (var n in e) {
        if (typeof e[n] === 'number') {
            list.push({ id: (e[n] as number), name: n });
        }
    }

    return list;
}

export function stringToEnum<E, K extends string>(
    enumDef: { [key in K]: E },
    str: string | undefined
): E | undefined {
    if (str && str in enumDef) {
        return enumDef[str as K] as E;
    }
    return undefined;
}