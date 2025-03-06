import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

interface CarrinhoState {
    items: Produto[];
}

const initialState: CarrinhoState = {
    items: []
};

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      state.items = [...state.items, action.payload]; // Mantém a imutabilidade
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
        state.items = state.items.filter(item => item.id !== action.payload);
    }
    }
});

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
