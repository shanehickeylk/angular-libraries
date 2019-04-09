import { PercentagePipe } from './percentage';

describe('PercentagePipe', () => {
  let pipe: PercentagePipe;

  beforeEach(() => {
    pipe = new PercentagePipe();
  });

  it('returns "0.00%" if num is NaN', () => {
    const num = 'asdf';
    expect(pipe.transform(num)).toEqual('0.0%');
  });

  it('transforms 0,005 to "<0.01%" when round === 2', () => {
    const num = 0.005;
    expect(pipe.transform(num)).toEqual('<0.1%');
  });

  it('transforms 0 to "<0.01%" when round === 2 and correlatedValue > 0', () => {
    const num = 0;
    const round = 2;
    const correlatedValue = 2;
    expect(pipe.transform(num, round, correlatedValue)).toEqual('<0.01%');
  });

  it('transforms 0.1 to "0.10%"', () => {
    const num = 0.1;
    expect(pipe.transform(num)).toEqual('0.1%');
  });
});
