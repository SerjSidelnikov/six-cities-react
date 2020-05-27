import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

import PlaceList from "./place-list";
import {OFFERS} from "../../tests-mocks";

const RENTAL_OFFER = OFFERS[0].offers;

it(`Should render OffersList correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <PlaceList
            rentalCardList={RENTAL_OFFER}
            onRentalCardHover={() => {}}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});