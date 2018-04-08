import React from 'react';
import BirthdayForm from '../birthdayForm';
import { mount } from 'enzyme';

const addMock = jest.fn();
const testBirthdays = [
  {
    "name": "Mark Grogan",
    "birthday": "1978-09-30"
  }
];

let props;
const component = mount(<BirthdayForm {...props} />);

describe('<BirthdayForm />', () => {

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should have a form element', () => {
    expect(component.find('form').length).toBe(1);
  });

  it('input element should be of type `text`', () => {
    expect(component.find('form').childAt(0).props().type).toBe('input');
  });

  it('Can add additional birthdays', () => {
    component.setProps(testBirthdays);
    component.find('form').simulate('click');
  });

  it('should update the state when a value is input', () => {
    const name = 'Abraham Lincoln';
    const input = component.find('.form-item');
    input.simulate('change', {
      target: {
        name: 'name',
        value: name,
      }
    });
    expect(component.state().name).toBe(name);
  });

})