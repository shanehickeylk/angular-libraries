import { isArray } from '../predicates';

export function asArray(value: any|any[]) {
  let valueArray = value;

  if (!isArray(value)) {
    valueArray = [value];
  }

  return valueArray;
}
