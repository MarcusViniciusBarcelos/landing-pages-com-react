import { screen } from '@testing-library/react';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>Children</Heading>);
    const heading = screen.getByRole('heading', { name: 'Children' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colordark={false}>Children</Heading>);
    const heading = screen.getByRole('heading', { name: 'Children' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Children</Heading>);
    const heading = screen.getByRole('heading', { name: 'Children' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Children</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Children</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Children</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font size when using mobile', () => {
    const { rerender } = renderTheme(<Heading size="huge">Children</Heading>);
    const heading = screen.getByRole('heading', { name: 'Children' });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xhuge);
    window.innerWidth = 767;
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Children</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Children' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>Children</Heading>);
    const heading = screen.getByRole('heading', { name: 'Children' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Children</Heading>);
    screen.getByRole('heading', { name: 'Children' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
