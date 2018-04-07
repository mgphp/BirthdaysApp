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

  it('It should render a h2 tag', () => {
    const h2 = component.find("h2");
    expect(h2.text()).toBe('Upcoming Birthdays');
  });

})