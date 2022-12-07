export const PRODUCT_UI_STATE_NAME = 'product-ui'

export interface IProductUiState {
  selectedId: number
}

export const PRODUCT_UI_INITIAL_STATE: IProductUiState = {
  selectedId: null,
}
