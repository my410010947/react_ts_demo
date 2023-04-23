import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  console.log('--------------------Global Before All-----------------------------------');
});

afterAll(() => {
  console.log('--------------------Global After All-----------------------------------');
});

beforeEach(() => {
  console.log('--------------------Global Before Each-----------------------------------');
});

afterEach(() => {
  console.log('--------------------Global After Each-----------------------------------');
});

describe("app page", () => {
  beforeAll(() => {
    console.log('--------------------First Describe Before All-----------------------------------');
  });

  afterAll(() => {
    console.log('--------------------First Describe After All-----------------------------------');
  });

  beforeEach(() => {
    console.log('--------------------First Describe Before Each-----------------------------------');
  });

  afterEach(() => {
    console.log('--------------------First Describe After Each-----------------------------------');
  });

  it('renders learn react link2', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  xtest('renders learn react link3', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it.skip('test case abc', () => {
    render(<App />);
    const linkElement = screen.getByText(/this is/i);
    expect(linkElement).toBeInTheDocument();
  });
});
describe('lj', () => {
  beforeAll(() => {
    console.log('--------------------Second Describe Before All-----------------------------------');
  });

  afterAll(() => {
    console.log('--------------------Second Describe After All-----------------------------------');
  });

  beforeEach(() => {
    console.log('--------------------Second Describe Before Each-----------------------------------');
  });

  afterEach(() => {
    console.log('--------------------Second Describe After Each-----------------------------------');
  });

  test('test case bcd', () => {
    render(<App />);
    const linkElement = screen.getByText(/this/i);
    expect(linkElement).toBeInTheDocument();
  });
});
