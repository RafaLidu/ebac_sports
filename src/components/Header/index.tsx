type Props = {
  favoritos: any[]
  itensNoCarrinho: any[]
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
