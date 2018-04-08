import React from 'react';
import UpcomingBirthday from '../UpcomingBirthday';
import { mount } from 'enzyme';

const birthday = [
  {
    "name": "John Doe",
    "birthday": "1981-08-02"
  }
]

describe("<UpcomingBirthday />", () => {

  const component = mount(<UpcomingBirthday upcoming={birthday} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should render a box title', () => {
    const title = component.find(".box-title");
    expect(title.text()).toBe('Upcoming Birthdays');
  });

})