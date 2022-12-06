import { ProductEntityActions, ProductEntityActionType } from './product-entity.actions'
import { IProductEntityState, PRODUCT_ENTITY_INITIAL_STATE } from './product-entity.state'

export function productEntityReducer(
  state: IProductEntityState = PRODUCT_ENTITY_INITIAL_STATE,
  action: ProductEntityActions
): IProductEntityState {
  switch (action.type) {
    case ProductEntityActionType.EXAMPLE:
      return {
        ...state,
      }
    case ProductEntityActionType.EXAMPLE_SUCCESS:
      return {
        ...state,
      }
    case ProductEntityActionType.FETCH_ITEM:
      return {
        ...state,
        isLoading: true,
        hasLoaded: false,
      }
    case ProductEntityActionType.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasLoaded: true,
      }
    default:
      return state
  }
}
