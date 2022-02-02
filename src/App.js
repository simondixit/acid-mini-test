import { useReducer } from 'react';
import './App.css';
import Checkbox from './components/checkbox'

const initialState = {todoList: [], inputValue: ''};

function reducer(state, action) {
  switch (action.type) {
    case 'submit':
      return {todoList: action.todoList, inputValue: ''};
    case 'changeInputValue':
      return {todoList: state.todoList, inputValue: action.inputValue};
    case 'updateList':
      return {todoList: action.todoList, inputValue: state.inputValue};
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = event => {
    event.preventDefault()

    const array = [...state.todoList, state.inputValue],
      inputElement = document.getElementById('insert')

    dispatch({ type: 'submit', todoList: array })
    inputElement && inputElement.focus()
  }

  const handleChange = event => dispatch({ type: 'changeInputValue', inputValue: event.target.value })

  const removeItemFromListByIndex = index => {
    const array = [...state.todoList]
    array.splice(index, 1)

    dispatch({ type: 'updateList', todoList: array })
  }

  return (
    <div className="App">
      <div className="wrapper">
        <form id="add-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="insert"
            value={state.inputValue}
            onChange={handleChange}
            placeholder='type something here...'
            required
          />
          <button>Add</button>
        </form>
        <ul id="todo-list" className={state.todoList.length > 0 ? '' : 'empty'}>
          {state.todoList.length > 0 ?
            state.todoList.map((item, idx) => (
              <Checkbox
                key={idx}
                item={item}
                handleClick={() => removeItemFromListByIndex(idx)}
              />
          )) : <li>The list is empty =(</li>
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
