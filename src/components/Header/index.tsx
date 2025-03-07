import { ProdutoType } from '../../types' // Corrigir o caminho da importação

type Props = {
  favoritos: ProdutoType[]
  itensNoCarrinho: ProdutoType[]
}

const Header = ({ favoritos, itensNoCarrinho }: Props) => {
  return (
    <header>
      <h1>Minha Loja</h1>
      <p>Favoritos: {favoritos.length}</p>
      <p>Carrinho: {itensNoCarrinho.length}</p>
    </header>
  )
}

export default Header
