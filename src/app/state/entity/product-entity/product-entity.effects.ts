import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { map, Observable, switchMap, tap } from 'rxjs'
import {
  ExampleEntityAction,
  ExampleEntitySuccessAction,
  FetchItemEntityAction,
  FetchItemSuccessEntityAction,
  ProductEntityActionType,
} from './product-entity.actions'
import { ProductEntityService } from './product-entity.service'

@Injectable()
export class ProductEntityEffects {
  constructor(private _actions$: Actions, private _service: ProductEntityService) {}

  public readonly exampleEntityEffect$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<ExampleEntityAction>(ProductEntityActionType.EXAMPLE),
        map((action) => new ExampleEntitySuccessAction())
      )
  )

  public readonly fetchItemEntityEffects$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this._actions$.pipe(
        ofType<FetchItemEntityAction>(ProductEntityActionType.FETCH_ITEM),
        tap(() => {
          this._service.getAllProducts$().pipe(map((products) => new FetchItemSuccessEntityAction(products)))
        })
      )
  )
}
