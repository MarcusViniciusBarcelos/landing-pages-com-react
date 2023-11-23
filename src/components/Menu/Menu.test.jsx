import { screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import userEvent from '@testing-library/user-event';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  srcImg: 'image.jpg',
  link: '#target',
};

const resizeWindow = (width = 1024, height = 900) => {
  return new Promise((resolve) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));
    resolve();
  });
};

describe('<Menu />', () => {
  it('should render menu on desktop', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close Menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(container).toMatchSnapshot();
  });

  expect(screen.getByRole('navigation', { name: 'Main menu' })).toHaveStyle(
    'opacity: 1',
  );

  userEvent.click(screen.getByLabelText('Open/Close Menu'));

  expect(screen.getByLabelText('Open/Close Menu')).toHaveStyleRule(
    'opacity',
    '1',
    {
      modifier: '::before',
    },
  );

  expect(screen.getByLabelText('Open/Close Menu')).toHaveStyleRule(
    'opacity',
    '1',
    {
      modifier: '::after',
    },
  );

  expect(screen.getByRole('navigation', { name: 'Main menu' })).toHaveStyle(
    'opacity: 0',
  );

  expect(container).toMatchSnapshot();
});

it('should not render links', () => {
  const { container } = renderTheme(<Menu logoData={logoData} />);
  expect(
    screen.getByRole('navigation', { name: 'Main menu' }).firstChild,
  ).not.toBeInTheDocument();
});

it('should match snapshot on mobile', async () => {
  const { container } = renderTheme(
    <Menu links={linksMock} logoData={logoData} />,
  );

  await waitFor(() => resizeWindow(640));

  expect(container).toMatchSnapshot();
});
