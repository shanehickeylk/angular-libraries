import { PercentageOrNilPipe } from './percentage_or_nil';

describe('PercentagePipe', () => {
  let pipe: PercentageOrNilPipe;

  beforeEach(() => {
    pipe = new PercentageOrNilPipe();
  });

  it('returns - if num is NaN', () => {
    const num = 'asdf';
    expect(pipe.transform(num)).toEqual('–');
  });

  it('rounds any number', () => {
    const num = 12.3;
    const round = 3;
    expect(pipe.transform(num, round)).toEqual('12.300%');
  });
});
