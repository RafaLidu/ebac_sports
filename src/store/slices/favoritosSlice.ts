import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoType } from '../../types'

type FavoritosState = {
  items: ProdutoType[]
}

const initialState: FavoritosState = {
  items: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<ProdutoType>) => {
      state.items.push(action.payload)
    },
    removerDosFavoritos: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
