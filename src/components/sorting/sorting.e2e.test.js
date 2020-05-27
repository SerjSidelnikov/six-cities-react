import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorting from './sorting.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should change active sorting item`, () => {
  const onSortTypeClick = jest.fn();
  const currentSortType = `Popular`;

  const sorting = mount(
      <Sorting
        currentSortType={currentSortType}
        onSortTypeClick={onSortTypeClick}
        isActive={false}
        onToggleClick={() => {}}
      />
  );

  const sortingList = sorting.find(`.places__option`);

  sortingList.at(3).simulate(`click`);

  expect(onSortTypeClick.mock.calls[0][0]).toBe(`Top rated first`);
  expect(onSortTypeClick.mock.calls[0][0]).not.toMatch(currentSortType);
});
