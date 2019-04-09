import { BigNumberShortenedPipe } from './big_number_shortened';

describe('BigNumberShortenedPipe', () => {
  let pipe: BigNumberShortenedPipe;

  beforeEach(() => {
    pipe = new BigNumberShortenedPipe();
  });

  it('returns the argument if it is undefined', () => {
    let num;
    expect(pipe.transform(num)).toEqual(num);
  });

  it('transforms "asdf" to "-"', () => {
    expect(pipe.transform('asdf')).toEqual('-');
  });

  it('transforms 2000000123 to 2.00B', () => {
    expect(pipe.transform(2000000123)).toEqual('2.00B');
  });

  it('transforms 21231 to 0M', () => {
    expect(pipe.transform(21231)).toEqual('0M');
  });

});
