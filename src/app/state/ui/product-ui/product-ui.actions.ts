import { Action } from '@ngrx/store'

export enum ProductUiActionType {
  EXAMPLE = '[Product UI] Example Action',
  EXAMPLE_SUCCESS = '[Product UI] Example Success Action',
  STORE_SELECTED_ID = '[Product UI] Store Selected Id',
  REMOVE_ITEM_FROM_CART = '[Product UI] Remove Item From Cart',
  ADD_ITEM_TO_CART = '[Product UI] Add Item to Cart',
}

export class ExampleUiAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class ExampleUiSuccessAction implements Action {
  readonly type = ProductUiActionType.EXAMPLE_SUCCESS
}

export class StoreSelectedIdAction implements Action {
  readonly type = ProductUiActionType.STORE_SELECTED_ID
  constructor(public payload: number) {}
}

export class RemoveItemFromCartAction implements Action {
  readonly type = ProductUiActionType.REMOVE_ITEM_FROM_CART
  constructor(public payload: number) {}
}

export class AddItemToCartAction implements Action {
  readonly type = ProductUiActionType.ADD_ITEM_TO_CART
  constructor(public payload: number) {}
}

export type ProductUiActions =
  | ExampleUiAction
  | ExampleUiSuccessAction
  | StoreSelectedIdAction
  | RemoveItemFromCartAction
  | AddItemToCartAction
