import * as React from 'react';
import {configure, shallow} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import PlaceCard from "./place-card";
import {OFFERS, doNothing} from "../../tests-mocks";
import {ClassName} from '../../consts';

const RENTAL_OFFER = OFFERS[0].offers[0];

configure({
  adapter: new Adapter(),
});

describe(`RentalCard handlers work correctly`, () => {
  it(`with onRentalCardHover events`, () => {
    const onRentalCardHover = jest.fn();

    const rentalCard = shallow(
        <PlaceCard
          offer={RENTAL_OFFER}
          onRentalCardHover={onRentalCardHover}
          onBookmarkClick={doNothing}
          pageClass={ClassName.FAVORITES}
        />
    );

    const card = rentalCard.find(`.place-card`);

    card.simulate(`mouseenter`);

    expect(onRentalCardHover).toHaveBeenCalledTimes(1);
    expect(Array.isArray(onRentalCardHover.mock.calls)).toBe(true);
    expect(onRentalCardHover.mock.calls.length).toBe(1);
    expect(onRentalCardHover.mock.calls[0][0][0]).toEqual(
        RENTAL_OFFER.coordinates.latitude
    );
    expect(onRentalCardHover.mock.calls[0][0][1]).toEqual(
        RENTAL_OFFER.coordinates.longitude
    );
  });

  it(`with onBookmarkClick events`, () => {
    const onBookmarkClick = jest.fn();

    const rentalCard = shallow(
        <PlaceCard
          offer={RENTAL_OFFER}
          onRentalCardHover={doNothing}
          onBookmarkClick={onBookmarkClick}
          pageClass={ClassName.FAVORITES}
        />
    );

    const bookmark = rentalCard.find(`.place-card__bookmark-button`);

    bookmark.simulate(`click`);

    expect(onBookmarkClick).toHaveBeenCalledTimes(1);
  });
});
