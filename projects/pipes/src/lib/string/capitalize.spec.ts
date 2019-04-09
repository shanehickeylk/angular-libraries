import { CapitalizePipe } from './capitalize';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('transforms undefined string to emty string', () => {
    let string;
    expect(pipe.transform(string)).toEqual('');
  });

  it('returns string with first letter capitalized', () => {
    expect(pipe.transform('qwer ty azer ty')).toEqual('Qwer Ty Azer Ty');
  });
});
