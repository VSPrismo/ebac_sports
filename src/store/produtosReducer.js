const initialState = [];

const produtosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CARREGAR_PRODUTOS':
      return action.payload;
    default:
      return state;
  }
};

export default produtosReducer;
