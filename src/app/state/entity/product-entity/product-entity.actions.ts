import { Action } from '@ngrx/store'
import { IProductEntity } from './product-entity.interface'

export enum ProductEntityActionType {
  EXAMPLE = '[Product Entity] Example Action',
  EXAMPLE_SUCCESS = '[Product Entity] Example Success Action',
  FETCH_ITEM = '[Product Entity] Fetch Item Action',
  FETCH_ITEM_SUCCESS = '[Product Entity] Fetch Item Success',
}

export class ExampleEntityAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE
  constructor(public payload: boolean) {}
}

export class FetchItemEntityAction implements Action {
  readonly type = ProductEntityActionType.FETCH_ITEM
}

export class FetchItemSuccessEntityAction implements Action {
  readonly type = ProductEntityActionType.FETCH_ITEM_SUCCESS
  constructor(public payload: IProductEntity[]) {}
}
export class ExampleEntitySuccessAction implements Action {
  readonly type = ProductEntityActionType.EXAMPLE_SUCCESS
}

export type ProductEntityActions =
  | ExampleEntityAction
  | ExampleEntitySuccessAction
  | FetchItemEntityAction
  | FetchItemSuccessEntityAction
