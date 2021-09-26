import { render } from '@testing-library/react';
import Default from './Button.stories';

it('should render', () => {
  render(<Default {...Default.args} />);
});
