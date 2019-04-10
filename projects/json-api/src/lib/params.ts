import { URLSearchParams } from '@angular/http';

export class QueryEncoder {
  encodeKey(k: string): string { return standardEncoding(k); }

  encodeValue(v: string): string { return standardEncoding(v); }
}

function standardEncoding(v: string): string {
  return encodeURIComponent(v)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/gi, '$')
      .replace(/%2C/gi, ',')
      .replace(/%3B/gi, ';')
      .replace(/%2B/gi, '+')
      .replace(/%3D/gi, '=')
      .replace(/%3F/gi, '?')
      .replace(/%2F/gi, '/')
      .replace(/%20/gi, '+')
      .replace(/&/gi, '%26');
}

export function param(objParams: {[key: string]: any | any[]} = {}) {
    const params = new URLSearchParams('', new QueryEncoder());
    const rbracket = /\[\]$/;

    const buildParams = (prefix, obj, params) => {
        if (prefix) {
            if (Array.isArray(obj)) {
                obj.forEach((value, index) => {
                    if (rbracket.test(prefix)) {
                        params.append(prefix, value);
                    } else {
                        buildParams(`${prefix}[${typeof value === 'object' ? index : ''}]`, value, params);
                    }
                });
            } else if (obj && String(obj) === '[object Object]') {
                Object.keys(obj).forEach((key) => buildParams(`${prefix}[${key}]`, obj[key], params));
            } else {
                params.append(prefix, obj);
            }
        } else if (Array.isArray(obj)) {
            obj.forEach(value => params.append(value.name, value.value));
        } else {
            Object.keys(obj).filter(key => !!obj[key]).forEach((key) => buildParams(key, obj[key], params));
        }

        return params;
    };

    return buildParams('', objParams, params);
}

const digitTest = /^\d+$/;
const keyBreaker = /([^\[\]]+)|(\[\])/g;
const plus = /\+/g;
const paramTest = /([^?#]*)(#.*)?$/;

export function deparam(params) {

    if (! params || ! paramTest.test(params) ) {
        return {};
    }

    const data = {};
    const pairs = params.split('&');
    let current;

    for (var i=0; i < pairs.length; i++) {
        current = data;
        let pair = pairs[i].split('=');

        // if we find foo=1+1=2
        if (pair.length !== 2) {
            pair = [pair[0], pair.slice(1).join('=')];
        }

        const key = decodeURIComponent(pair[0].replace(plus, ' '));
        const value = decodeURIComponent(pair[1].replace(plus, ' '));
        const parts = key.match(keyBreaker);

        for ( let j = 0; j < parts.length - 1; j++ ) {
            const part = parts[j];
            if (!current[part] ) {
                // if what we are pointing to looks like an array
                current[part] = digitTest.test(parts[j + 1]) || parts[j + 1] === '[]' ? [] : {};
            }
            current = current[part];
        }
        const lastPart = parts[parts.length - 1];

        if (lastPart === '[]') {
            current.push(value);
        } else {
            current[lastPart] = value;
        }
    }
    return data;
}
