import { ProductUiActions, ProductUiActionType } from './product-ui.actions'
import { IProductUiState, PRODUCT_UI_INITIAL_STATE } from './product-ui.state'

export function productUiReducer(
  state: IProductUiState = PRODUCT_UI_INITIAL_STATE,
  action: ProductUiActions
): IProductUiState {
  switch (action.type) {
    case ProductUiActionType.EXAMPLE:
      return {
        ...state,
      }
    case ProductUiActionType.EXAMPLE_SUCCESS:
      return {
        ...state,
      }
    case ProductUiActionType.STORE_SELECTED_ID:
      return {
        ...state,
        id: action.payload,
      }
    default:
      return state
  }
}
