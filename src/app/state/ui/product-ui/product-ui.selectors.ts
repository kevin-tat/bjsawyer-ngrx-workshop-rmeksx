import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { selectAllProductEntites, selectLoadingStates } from 'app/state/entity/product-entity/product-entity.selectors'
import { IAppState } from '../../app.state'
import { IProductUiState, PRODUCT_UI_STATE_NAME } from './product-ui.state'
import { IProduct } from './product.interface'

const selectProductUiState: MemoizedSelector<IAppState, IProductUiState> = createFeatureSelector(PRODUCT_UI_STATE_NAME)

export const selectAllProducts = createSelector(selectAllProductEntites, selectLoadingStates, (products) =>
  products.map((product) => ({ id: product.id, title: product.title, price: product.price, image: product.image }))
)
