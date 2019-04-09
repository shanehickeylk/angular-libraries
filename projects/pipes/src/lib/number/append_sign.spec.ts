import { AppendSignPipe } from './append_sign';

describe('AppendSignPipe', () => {
  let pipe: AppendSignPipe;

  beforeEach(() => {
    pipe = new AppendSignPipe();
  });

  it('returns the argument if it is undefined', () => {
    let num;
    expect(pipe.transform(num)).toEqual(num);
  });

  it('transforms 12.32 to "+12.32"', () => {
    expect(pipe.transform(12.32)).toEqual('+12.32');
  });

  it('transforms -12.32 to "-12.32"', () => {
    expect(pipe.transform(-12.32)).toEqual(-12.32);
  });
});
