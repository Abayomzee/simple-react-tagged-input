import React, { useState } from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactSimpleTaggedInput from '../src/index';

// Test Component
interface Props {
  defaultdata?: any;
}
const App: React.FC<Props> = ({ defaultdata = ['Ade'] }) => {
  // States
  const [, setSelected] = useState([]);

  // Data to display
  return (
    <div>
      <ReactSimpleTaggedInput
        onInputChange={setSelected}
        defaultData={defaultdata}
        autoFocus
      />
    </div>
  );
};

// Test suites
describe('Render', () => {
  it('renders without crashing', async () => {
    const { getByText } = render(<App />);
    const yesNode = await waitFor(() => getByText('Ade'));
    expect(yesNode).toBeInTheDocument();
  });
});

describe('Functionality', () => {
  it('it adds bulk tag', async () => {
    const { getByText } = render(<App />);
    const yesNode = await waitFor(() => getByText('Ade'));
    expect(yesNode).toBeInTheDocument();
  });
});
