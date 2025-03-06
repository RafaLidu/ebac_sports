import { configureStore } from '@reduxjs/toolkit';
import favoritosReducer from './store/slices/favoritosSlice';
import carrinhoReducer from './store/slices/carrinhoSlice';

export type ProdutoType = {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
};

export const store = configureStore({
    reducer: {
        favoritos: favoritosReducer,
        carrinho: carrinhoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
