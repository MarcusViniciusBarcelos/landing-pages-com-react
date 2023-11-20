import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('Footer', () => {
  it('should render the heading', () => {
    const { container } = renderTheme(<Footer html={`<h1>Olá</h1>`} />);
    expect(container).toMatchSnapshot();
  });
});
