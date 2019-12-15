import React from 'react';
import {cleanup, render} from '@testing-library/react';
// import { MockedProvider } from '@apollo/react-testing';

import IndexPage, { FILES_QUERY } from './IndexPage';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('IndexPage renders content', () => {
  const mocks = [
    {
      request: {
        query: FILES_QUERY,
      },
      result: {
        data: {
          sarahFile: {
            childImageSharp: {
              fluid: {
                base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAIAAADzvTiPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+0lEQVQ4y31Ud1CbZRz+7lznYc/Ts6eVwxZklFK14my1Wluhip7nqtTa0jJkEzJJyICEESABCiFhj2OTsErYpVA5Knu1coyWvbJI2KL+5RPiaTl63r33Jt/3vs/7e8bv/Qi9dmP/WNFuGHSb6yvbq8Z5a12/jcf924hHItd0m1r1av/YVE13X0Pf0MjkwuKSHviV/wevaNc39NtTs+qKX7vjlMqw8nJaURG5sCC39ZfJWRW4rGjWHw3GAkiOTy9hq1hZG1FZxZbLncQxl9NkwQUFXIVibkG7trL1L34P2KDd0KhX82+3R1YZYfTi4gspyfyKyprufsynhQJJQ9O2YUe3H4zzQHhoYlpQWembm/NTmuxSqrS4/Q6W5hd0faOT7pkZXyaKZx8qvgeMt6UdnaT8/G8l19+LCOMpFNg6M68Zvj87MDYl7+j6OCaybXhkZ/UP3cNgI1K3hX0cufznnKyTUeFXM9KHJ2am59Rj04twYWB8emhixlWWUtJ+58/1v3Satf/AOGl7dQfawPZsbNQ7Aq6s6SYeByeme0cnk+oboSW/rR1Csm+17QGbCKOsR1bGeXGsPZsOzlfSUy/KUuKVdTD5x1TppVSZb14ObK/vHdxDezehbVFN7cnI8Nd4TMsQ8tfJiQF5uVy5nF1W5pOTjcwEFZV1PYPw7+79WQg0dQuBH/Qg/HSVSd4W8MypgS+S/RNq61sG72W1tCp7+qs6e5PqG5r6hxv7hso6ukBQq177x20Q2DLsYO2T2CgkeYgacCDAE1QBS2tuuTX4W23PQHxtXU7rbShvvzu6vGzA0KjXACS0mjV0FVjBJAg+zAh+3PvKD1KJSFmbebMVeHSLtLE5sqoa4P7xKTTZ8rJepTJoVKvEpv73+UXdd5LrqHwuTvgKnfS07zVbFg2wso7O6Oob1KIiYXUNmKc2t/SNTT6YVS0s6paW9KplA6FTr4PkibBQ4DG/TA04GOz7mNdlpN05MoFUUbC6qy+loSm9ueXegzmAp+ZU87t4glVaejYu2jcvF2AgbVhUB27IUz5XXyD5oLeV3f24kskNjYySkmuZ6W4ZaXAbagEGfwImQzCjpNgxnH2YTjoVzT8VxX/G3/MIIxgNg7SNIadJeeWKY5wQwv2iI5+Dezo2tQjDCa/sLPSNsygGhr3OY34eH/dGGMvM3wOyeeXlRe0dHIWCX1HxkTDiSR83BHmQ7PdsoBf6t6qzh4DDnlkZ3yQnnghjvxnOPhcXbUEPOuDvgYZxS0/DJwEfky8SxU94u71E8UcWrzIptqE0c1ogBBIuCWKf3Gzc29PREWdio96PDDPz83g+yBt/0KRH2QxHPhulLGikIwyyVQjZlkUF+CibjkEgoe8lSa5SyVdJCc7i2OeCvM383A8Zi5DejeChGs6CfvQsBsracxjHOAwgHWABrAb+fHysszgG7QW15rQgrME/x3DOcS7Tkkm2YpJNYGsmxS6UhmFvArskiJxEMTYsGmw06QHbMzFRTiLhBakEtx8vrZgUaxbVMiQYsy2LDi/tdpkT8O2DaIEDl4mEUB8scBNxk1wSRfAJb97ic6AWZSHYelewze6MI4hPRULAPhQKKIUFlKJCfGW9sjNh4WfxcfAM+xC+BZ1kEoxHu1C6bSgVf6xZFGNUqAaSaDX0qbD6hk9uDmqC/HFuCLJBcmBoz2bYGNnS7XfdMtX/G97r8M0Ayo1DAAAAAElFTkSuQmCC",
                aspectRatio: 0.75,
                src: "/static/a701767f3c3ecc4bb64a1b4a601dcef4/a54c6/sarah-profile.png",
                srcSet: "/static/a701767f3c3ecc4bb64a1b4a601dcef4/59beb/sarah-profile.png 200w,↵/static/a701767f3c3ecc4bb64a1b4a601dcef4/c0bbd/sarah-profile.png 400w,↵/static/a701767f3c3ecc4bb64a1b4a601dcef4/a54c6/sarah-profile.png 800w,↵/static/a701767f3c3ecc4bb64a1b4a601dcef4/273c9/sarah-profile.png 900w",
                sizes: "(max-width: 800px) 100vw, 800px",
              }
            }
          }         
        },
      },
    },
  ];

  const {getByText, getAllByText, getAllByRole} = render(
    // <MockedProvider mocks={mocks} addTypename={false}>
      <IndexPage />,
    // </MockedProvider>,
  );

  

  // string 'Sarah' exists
  expect(getByText(/Sarah/i)).toBeTruthy();

  // multiple 'About' strings exist
  expect(getAllByText(/About/i)).toBeTruthy();

  // first link is (at least close to) Sarah's current phone number
  expect(getAllByRole('link')[0].innerHTML).toMatch(/.782415932./i);
});