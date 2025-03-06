import { configureStore } from '@reduxjs/toolkit';
import favoritosReducer from './slices/favoritosSlice';
import carrinhoReducer from './slices/carrinhoSlice';

export const store = configureStore({
    reducer: {
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
