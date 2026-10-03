import getTemplate from './getTemplate';

const template = {
  height: 240,
  font: { src: 'url(https://example.com/font.woff2)' },
  css: '.quote { color: #fff; }',
  structure: '<blockquote class="quote">Test quote</blockquote>',
};

describe('getTemplate', () => {
  test('renders the template data into a valid SVG wrapper', () => {
    const svg = getTemplate(template);

    expect(svg).toContain('<svg width="700px" height="240px"');
    expect(svg).toContain('font-family: "customFont"');
    expect(svg).toContain('src: url(https://example.com/font.woff2)');
    expect(svg).toContain('.quote { color: #fff; }');
    expect(svg).toContain('<blockquote class="quote">Test quote</blockquote>');
    expect(svg).toContain('<foreignObject width="100%" height="100%">');
  });

  test('adds a background image when an image URL is provided', () => {
    const svg = getTemplate(template, 'https://example.com/background.jpg');

    expect(svg).toContain('<image');
    expect(svg).toContain('href="https://example.com/background.jpg"');
    expect(svg).toContain('height="240"');
    expect(svg).toContain('preserveAspectRatio="xMidYMid slice"');
  });

  test('omits the background image layer when no URL is provided', () => {
    const svg = getTemplate(template);

    expect(svg).not.toContain('<image');
    expect(svg).not.toContain('preserveAspectRatio="xMidYMid slice"');
  });

  test('normalizes a numeric height string for SVG dimensions', () => {
    const svg = getTemplate({ ...template, height: '315px' });

    expect(svg).toContain('height="315px"');
  });
});
