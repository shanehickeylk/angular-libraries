declare var escape;

import { decode64 } from '../../../typescript-helpers/src/lib/encoding';

export function decodeToken(token: string) {
    const parts = token.split('.');

    if (parts.length !== 3) {
        throw new Error('JWT must have 3 parts');
    }

    const decoded = decode64(parts[1]);

    if (!decoded) {
        throw new Error('Cannot decode the token');
    }

    return JSON.parse(decoded);
}
