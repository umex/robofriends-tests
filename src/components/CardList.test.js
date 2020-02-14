import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import {createSerializer} from 'enzyme-to-json';

const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]

it('renders without crashing', () => {
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
  expect(shallow(<CardList robots={filteredRobots}/>)).toMatchSnapshot();
});