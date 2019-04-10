import { deparam } from './params';

export function nextLink(response): string | undefined {
    if (!response.links) { return undefined; }

    const self = response.links.self;
    const next = response.links.next;

    if (next && next !== self) {
        return next;
    } else {
        return undefined;
    }
}

export function extractPageNumber(value: string) {
    if (!value) { return null; }

    const query = value.split('?')[1];
    const params = deparam(query);

    return +params.page.number;
}
