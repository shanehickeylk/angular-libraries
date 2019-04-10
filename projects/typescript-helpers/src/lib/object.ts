import { camelize } from './string';

export function camelizeKeys(obj) {
  if (!obj || typeof obj !== 'object') { return obj; }

  if (Array.isArray(obj)) { return obj.map(el => camelizeKeys(el)); }

  return Object.keys(obj).reduce((newObj, key) => {
    const camelizedKey = camelize(key);

    newObj[camelizedKey] = camelizeKeys(obj[key]);

    return newObj;
  }, {});
}

export function removeEmptyValues(obj) {
  return Object.keys(obj).reduce(
    (newObj, key) => {
      const attr = obj[key];
      if (typeof attr === 'undefined' || attr === null) { return newObj; }

      const isStringOrArray = typeof attr === 'string' || Array.isArray(attr);
      if (isStringOrArray && attr.length <= 0) { return newObj; }

      newObj[key] = attr;
      return newObj;
    },
    {}
  );
}

export function isEmptyObject(obj) {
  return window.allValues(obj).every((val) => val === '' || val === null);
}
