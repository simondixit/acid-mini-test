import { shallow } from 'enzyme';
import App from './App';

describe('TODO list tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders an empty input text', () => {
    expect(wrapper.find('#insert')).not.toBeNull()
    expect(wrapper.find('#insert').text()).toBe('')
  });

  test('push text value inserted in input to TODO list, then clean up input text', () => {
    wrapper.find('#insert').simulate('change', { target: { value: 'simple string' } })
    wrapper.find('#add-form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.find('#todo-list').children()).toHaveLength(1)
    expect(wrapper.find('#insert').text()).toBe('')
  });

  test('add and remove item from TODO list', () => {
    wrapper.find('#insert').simulate('change', { target: { value: 'simple string' } })
    wrapper.find('#add-form').simulate('submit', { preventDefault: () => {} })
    expect(wrapper.find('#todo-list').children().text()).not.toBe('The list is empty =(')
    wrapper.find('#todo-list').children().first().dive().find('#remove-btn').simulate('click')
    expect(wrapper.find('#todo-list').children().text()).toBe('The list is empty =(')
  });
})
