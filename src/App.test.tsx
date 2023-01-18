import { screen } from '@testing-library/react';
import {renderWithWrapper} from 'tests';
import App from './App';

describe('<App />', () => {
  it('정상적으로 렌더링되었는지 확인한다', () => {
    const {container} = renderWithWrapper(<App />)
    
    expect(container).toMatchSnapshot();
  })
});
