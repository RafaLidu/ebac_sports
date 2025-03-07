import { useSelector } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { RootState } from './store/store'

function App() {
  const favoritos = useSelector((state: RootState) => state.favoritos?.items ?? [])
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho?.items ?? [])

  return (
    <div>
      <Header favoritos={favoritos} itensNoCarrinho={itensNoCarrinho} />
      <Produtos />
    </div>
  )
}

export default App
