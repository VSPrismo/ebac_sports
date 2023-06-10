const initialState = [];

const carrinhoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      const produto = action.payload;
      if (state.find((p) => p.id === produto.id)) {
        alert('Item já adicionado');
        return state;
      } else {
        return [...state, produto];
      }
    default:
      return state;
  }
};

export default carrinhoReducer;
