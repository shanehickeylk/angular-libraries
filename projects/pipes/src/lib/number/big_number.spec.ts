import { BigNumberPipe } from './big_number';

describe('BigNumberPipe', () => {
  let pipe: BigNumberPipe;

  beforeEach(() => {
    pipe = new BigNumberPipe();
  });

  it('returns the argument if it is undefined', () => {
    let num: number;
    expect(pipe.transform(num)).toEqual('-');
  });

  it('transforms "asdf" to "-"', () => {
    expect(pipe.transform('asdf')).toEqual('-');
  });

  it('transforms 2000000123 to 2.00B', () => {
    expect(pipe.transform(2000000123)).toEqual('2.00B');
  });

  it('transforms 21231 to 21231', () => {
    expect(pipe.transform(21231)).toEqual(21231);
  });

  it('transforms 2123 to 2123', () => {
    expect(pipe.transform(2123)).toEqual(2123);
  });

});
