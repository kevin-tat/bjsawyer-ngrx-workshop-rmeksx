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
        selectedId: action.payload,
      }

    case ProductUiActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartProductIds: [...state.cartProductIds, action.payload],
      }

    case ProductUiActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartProductIds: [...state.cartProductIds.filter((id) => id !== action.payload)],
      }

    default:
      return state
  }
}
