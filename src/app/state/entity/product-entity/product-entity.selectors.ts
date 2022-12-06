import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { IProductUiState } from 'app/state/ui/product-ui/product-ui.state'
import { IAppState } from '../../app.state'
import { IProductEntityState, PRODUCT_ENTITY_STATE_NAME } from './product-entity.state'

const selectProductEntityState: MemoizedSelector<IAppState, IProductEntityState> =
  createFeatureSelector(PRODUCT_ENTITY_STATE_NAME)

export const selectLoadingStates: MemoizedSelector<IAppState, IProductEntityState> = createSelector(
  selectProductEntityState,
  (state: IProductEntityState) => ({
    ...state,
  })
)
