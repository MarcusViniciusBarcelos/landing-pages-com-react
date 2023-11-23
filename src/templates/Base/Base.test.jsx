import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import { mockBase } from './mock';

describe('Base', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...mockBase} />);
    expect(container).toMatchSnapshot();
  });
});
