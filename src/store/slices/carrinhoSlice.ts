import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../types'

type CarrinhoState = {
  items: ProdutoType[]
}

const initialState: CarrinhoState = {
  items: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      state.items.push(action.payload)
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
