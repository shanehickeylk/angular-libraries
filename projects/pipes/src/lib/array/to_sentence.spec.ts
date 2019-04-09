import { ToSentencePipe } from './to_sentence';

describe('ToSentencePipe', () => {
  let pipe: ToSentencePipe;

  beforeEach(() => {
    pipe = new ToSentencePipe();
  });

  it('returns arr if it is not of type Array', () => {
    const arr = 123;
    expect(pipe.transform(arr)).toEqual(123);
  });

  it('transforms ["asd", "qwer", "zxcv"] to "asd, qwer plus zxcv"', () => {
    const arr = ['asd', 'qwer', 'zxcv'];
    expect(pipe.transform(arr)).toEqual('asd, qwer and zxcv');
  });
});
