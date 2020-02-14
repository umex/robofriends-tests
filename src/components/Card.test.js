import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import {createSerializer} from 'enzyme-to-json';



it('renders without crashing', () => {
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
  expect(shallow(<Card/>)).toMatchSnapshot();
});