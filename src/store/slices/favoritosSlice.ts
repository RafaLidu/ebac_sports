import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Produto {
    id: number;
    nome: string;
}

interface FavoritosState {
    items: Produto[];
}

const initialState: FavoritosState = {
    items: []
};

const favoritosSlice = createSlice({
    name: "favoritos",
    initialState,
    reducers: {
    adicionarFavorito: (state, action: PayloadAction<Produto>) => {
      state.items = [...state.items, action.payload]; // Evita mutabilidade direta
    },
    removerFavorito: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    }
    }
});

export const { adicionarFavorito, removerFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
