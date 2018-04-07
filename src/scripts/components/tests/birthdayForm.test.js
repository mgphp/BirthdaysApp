import React from 'react';
import BirthdayForm from '../birthdayForm';
import { shallow, mount } from 'enzyme';

const component = mount(<BirthdayForm />);

describe('<BirthdayForm />', () => {
  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

})