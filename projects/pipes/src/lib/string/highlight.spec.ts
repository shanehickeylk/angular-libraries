import { HighlightPipe } from './highlight';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;

  beforeEach(() => {
    pipe = new HighlightPipe();
  });

  it('returns txt if replacemnt is false', () => {
    const txt = 'asdfghjklzxcv';
    const replacement = false;
    expect(pipe.transform(txt, replacement)).toEqual(txt);
  });

  it('highlights "asd" & "qwe"', () => {
    const txt = 'asd; qwe; asd zxcv vzxcsa;';
    const replacement = ['asd', 'qwe', 'zxcv'];
    expect(pipe.transform(txt, replacement)).toEqual('<strong>asd</strong>;<strong> qwe</strong>; asd zxcv vzxcsa;');
  });

  it('highlights "ads"', () => {
    const txt = 'asd; qwe; asd zxcv vzxcsa;';
    const replacement = 'asd';
    expect(pipe.transform(txt, replacement)).toEqual('<strong>asd</strong>; qwe; <strong>asd</strong> zxcv vzxcsa;');
  });
});
