import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import CalculatorService from "./services/CalculatorService";

test('renders calculator', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Calculate Expression', () => {
  it('knows that 2*(5-2) make 6', () => {

    const calculatorService = new CalculatorService();
    let answer = calculatorService.calculate("2*(5-2)");

    expect(answer).toBe(6);
  });
});

describe('Calculate Expression', () => {
  it('knows that 4+3*5/(3+2) make 7', () => {

    const calculatorService = new CalculatorService();
    let answer = calculatorService.calculate("4+3*5/(3+2)");

    expect(answer).toBe(7);
  });
});
