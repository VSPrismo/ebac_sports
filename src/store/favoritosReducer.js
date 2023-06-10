const initialState = [];

const favoritosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVORITAR':
      const produto = action.payload;
      if (state.find((p) => p.id === produto.id)) {
        return state.filter((p) => p.id !== produto.id);
      } else {
        return [...state, produto];
      }
    default:
      return state;
  }
};

export default favoritosReducer;
