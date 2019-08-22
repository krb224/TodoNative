import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

export const reducers = combineReducers({
  theme: require('./ThemeRedux').reducer,
  readTodos: require('./ReadTodosRedux').reducer,
  createTodo: require('./CreateTodoRedux').reducer,
  updateTodo: require('./UpdateTodoRedux').reducer,
  deleteTodo: require('./DeleteTodoRedux').reducer,
});

export default () => {
  return createStore(reducers, applyMiddleware(thunk));
};
