import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { selectAllProductEntites, selectLoadingStates } from 'app/state/entity/product-entity/product-entity.selectors'
import { IAppState } from '../../app.state'
import { IProductUiState, PRODUCT_UI_STATE_NAME } from './product-ui.state'
import { IProduct } from './product.interface'

const selectProductUiState: MemoizedSelector<IAppState, IProductUiState> = createFeatureSelector(PRODUCT_UI_STATE_NAME)

export const selectAllProducts = createSelector(selectAllProductEntites, (products): IProduct[] =>
  products.map((product) => ({ id: product.id, title: product.title, price: product.price, image: product.image }))
)

const selectItemById = createSelector(selectProductUiState, (state) => state.selectedId)
export const selectProductById = createSelector(selectAllProducts, selectItemById, (products, id) =>
  products.find((product) => product.id === id)
)

const selectItemsInCart = createSelector(selectProductUiState, (state) => state.cartProductIds)

export const selectProductsFromCart = createSelector(selectItemsInCart, selectAllProducts, (cartItems, products) =>
  cartItems.map((item) => products.find((product) => item === product.id))
)

export const selectNumberOfItemsInCart = createSelector(selectItemsInCart, (cart) => cart.length)

export const selectIfIdInCart = (id: number) => createSelector(selectItemsInCart, (items) => items.includes(id))
