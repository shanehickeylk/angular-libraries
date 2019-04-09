import {TruncatePipe} from './truncate';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('transforms undefined text to emty string', () => {
    let text;
    expect(pipe.transform(text, 12, '...')).toEqual('');
  });

  it('returns text if text.length <= length', () => {
    const text = 'qwerty';
    const length = 7;
    expect(pipe.transform(text, length, '!')).toEqual('qwerty');
  });

  it('returns text if text.length - end.length <= length', () => {
    const text = 'qwerty';
    const length = 5;
    const end = '!';
    expect(pipe.transform(text, length, end)).toEqual('qwerty');
  });

  it('sets undefined length to 10', () => {
    const text = 'qwertyasdfassasdf';
    const length = 'qwe';
    const end = '...';
    expect(pipe.transform(text, length, end)).toEqual('qwertya...');
  });

  it('sets undefined end to "..."', () => {
    const text = 'qwertyasdf';
    const length = 5;
    let end;
    expect(pipe.transform(text, length, end)).toEqual('qw...');
  });

});
