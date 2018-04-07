import React from 'react';
import ListBirthdayItem from '../listBirthdayItem';
import { mount } from 'enzyme';
import Data from '../../data/birthdays'

describe('<ListBirthdayItem />', () => {

  const component = mount(<ListBirthdayItem birthday={Data} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

})