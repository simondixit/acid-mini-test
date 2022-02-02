import { shallow } from 'enzyme';
import CheckBox from './checkbox';

describe('TODO list tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CheckBox />)
  })

  test('renders an item element', () => {
    expect(wrapper.find('li')).not.toBeNull()
  });

  test('toggle:(check/uncheck) an item when click on checkbox', () => {
    wrapper.find('#checkbox').simulate('change', { target: { checked: true } })
    expect(wrapper.find('#checkbox').prop("checked")).toBeTruthy()
    wrapper.find('#checkbox').simulate('change', { target: { checked: false } })
    expect(wrapper.find('#checkbox').prop("checked")).toBeFalsy()
  });
})
