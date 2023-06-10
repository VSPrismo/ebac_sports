import { combineReducers, createStore } from 'redux';
import carrinhoReducer from './reducers/carrinhoReducer';
import favoritosReducer from './reducers/favoritosReducer';
import produtosReducer from './reducers/produtosReducer';

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  favoritos: favoritosReducer,
  produtos: produtosReducer,
});

const store = createStore(rootReducer);

export default store;
