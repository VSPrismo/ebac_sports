import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Produtos from './containers/Produtos';
import { GlobalStyle } from './styles';
import { Produto } from './App';
import { adicionarAoCarrinho, favoritar, carregarProdutos } from './store/actions';

function App() {
  const dispatch = useDispatch();

  const produtos = useSelector((state) => state.produtos);
  const carrinho = useSelector((state) => state.carrinho);
  const favoritos = useSelector((state) => state.favoritos);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(carregarProdutos(res)));
  }, [dispatch]);

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto));
  }

  function handleFavoritar(produto: Produto) {
    dispatch(favoritar(produto));
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={handleFavoritar}
          adicionarAoCarrinho
