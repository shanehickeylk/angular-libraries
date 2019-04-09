import { CapitalizeFirstLetterPipe } from './capitalize_first_letter';

describe('CapitalizeFirstLetterPipe', () => {
  let pipe: CapitalizeFirstLetterPipe;

  beforeEach(() => {
    pipe = new CapitalizeFirstLetterPipe();
  });

  it('transforms undefined string to emty string', () => {
    let string;
    expect(pipe.transform(string)).toEqual('');
  });

  it('returns string with first letter capitalized', () => {
    expect(pipe.transform('qwer')).toEqual('Qwer');
  });
});
