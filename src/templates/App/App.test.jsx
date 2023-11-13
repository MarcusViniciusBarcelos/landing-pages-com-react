import { Home } from './index';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    const { container } = renderTheme(<Home />);
  });
});
