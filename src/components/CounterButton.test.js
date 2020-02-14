import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import {createSerializer} from 'enzyme-to-json';

it('renders without crashing', () => {
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
  expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
  expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
  const wrapper = shallow(<CounterButton/>)
  expect(wrapper).toMatchSnapshot();
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state())).toEqual({count: 1})
  wrapper.find('[id="counter"]').simulate('click');
  wrapper.find('[id="counter"]').simulate('click');
  expect((wrapper.state())).toEqual({count: 3})
});