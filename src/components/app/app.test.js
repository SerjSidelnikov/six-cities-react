import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

import offers from '../../moks/offers';

describe(`<App/>`, () => {
  it(`App correctly renders first screen`, () => {
    const tree = renderer.create(
        <App offers={offers}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
