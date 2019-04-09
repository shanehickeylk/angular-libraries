import { InArrayPipe } from './in_array';

describe('InArrayPipe', () => {
  let pipe: InArrayPipe;

  beforeEach(() => {
    pipe = new InArrayPipe();
  });

  it('throws an error if the argument passed is not an array', () => {
    const el = 1;
    const arr = 123;
    expect(() => { pipe.transform(el, arr); } ).toThrow(new Error('The argument passed is not an array.'));
  });

  it('returns true if element is in array', () => {
    const el = 1;
    const arr = [1,2,3];
    expect(pipe.transform(el, arr)).toEqual(true);
  });

  it('returns false if element is not in array', () => {
    const el = 5;
    const arr = [1,2,3];
    expect(pipe.transform(el, arr)).toEqual(false);
  });

});
