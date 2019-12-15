import React from 'react';
import {cleanup, render} from '@testing-library/react';
import IndexPage from './IndexPage';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('IndexPage renders content', () => {
  const {getByText, getAllByText, getAllByRole} = render(
    <IndexPage />,
  );

  // string 'Sarah' exists
  expect(getByText(/Sarah/i)).toBeTruthy();

  // multiple 'About' strings exist
  expect(getAllByText(/About/i)).toBeTruthy();

  // first link is (at least close to) Sarah's current phone number
  expect(getAllByRole('link')[0].innerHTML).toMatch(/.782415932./i);
});