import { PositiveOrNegativePipe } from './positive_or_negative';

describe('PositiveOrNegativePipe', () => {
  let pipe: PositiveOrNegativePipe;

  beforeEach(() => {
    pipe = new PositiveOrNegativePipe();
  });

  it('returns an undefined argument', () => {
    let num;
    expect(pipe.transform(num)).toEqual(num);
  });

  it('transforms any positive number to "positive"', () => {
    const num = 1.1;
    expect(pipe.transform(num)).toEqual('positive');
  });

  it('transforms any negative number to "negative"', () => {
    const num = -1.1;
    expect(pipe.transform(num)).toEqual('negative');
  });

  it('transforms 0 number to "neutral"', () => {
    const num = 0;
    expect(pipe.transform(num)).toEqual('neutral');
  });
});
