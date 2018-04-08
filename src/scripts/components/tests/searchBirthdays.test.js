import React from 'react';
import SearchBirthdays from '../SearchBirthdays';
import { shallow, mount } from 'enzyme';
import Data from '../../data/birthdays'

describe("<SearchBirthdays />", () => {

  const component = mount(<SearchBirthdays today={Data} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should render a box title', () => {
    const title = component.find(".box__title");
    expect(title.text()).toBe('Search Birthdays');
  });

  it('It should have a form element', () => {
    expect(component.find('form').length).toBe(1);
  });

  it('input element should be of type `text`', () => {
    expect(component.find('input').length).toBe(1);
    //expect(component.find('form').childAt(1).props().type).toBe('input');
  });

})
