import { RemoveHtmlTagsPipe } from './remove_html_tags';

describe('RemoveHtmlTagsPipe', () => {
  let pipe: RemoveHtmlTagsPipe;

  beforeEach(() => {
    pipe = new RemoveHtmlTagsPipe();
  });

  it('does nothing to plain text', () => {
    const text = '';
    expect(pipe.transform(text)).toEqual('');
  });

  it('removes html tags', () => {
    const text = '<p>some-text<p>';
    expect(pipe.transform(text)).toEqual('some-text');
  });

  it('removes all html tags', () => {
    const text = '<ng-stuff><span><p>some-text<p></span></ng-stuff>';
    expect(pipe.transform(text)).toEqual('some-text');
  });

});
