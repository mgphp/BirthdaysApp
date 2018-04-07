import React from 'react';
import TodaysBirthday from '../TodaysBirthday';
import { mount } from 'enzyme';

const birthday = [
  {
    "name": "John Doe",
    "birthday": "1981-08-02"
  }
]

describe("<TodaysBirthday />", () => {

  const component = mount(<TodaysBirthday today={birthday} />);

  it('Should render this component', () => {
    expect(component).toHaveLength(1);
  });

  it('It should render a h2 tag', () => {
    const h2 = component.find("h2");
    expect(h2.text()).toBe('Todays Birthday');
  });

})