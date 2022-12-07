import { Injectable } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { FetchItemEntityAction } from 'app/state/entity/product-entity/product-entity.actions'
import { selectLoadingStates } from 'app/state/entity/product-entity/product-entity.selectors'
import { map, Observable, of } from 'rxjs'
import { IAppState } from '../../../state/app.state'
import { ProductEntityService } from '../../entity/product-entity/product-entity.service'
import { AddItemToCartAction, RemoveItemFromCartAction, StoreSelectedIdAction } from './product-ui.actions'
import {
  selectAllProducts,
  selectIfIdInCart,
  selectNumberOfItemsInCart,
  selectProductById,
  selectProductsFromCart,
} from './product-ui.selectors'
import { IProduct } from './product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductUiFacade {
  // TODO: Update below properties with selectors
  public products$: Observable<IProduct[]> = this._store.select(selectAllProducts)
  public cart$: Observable<IProduct[]> = this._store.select(selectProductsFromCart)
  public selectedProduct$: Observable<IProduct> = this._store.select(selectProductById)
  public numSelectedProducts$: Observable<number> = this._store.select(selectNumberOfItemsInCart)
  public shouldShowLoader$: Observable<boolean> = this._store.select(selectLoadingStates)

  constructor(private _store: Store<IAppState>) {}

  getProducts(): void {
    /**
     * TODO: Refactor as such:
     * 1. Move API request logic to entity state
     * 2. Move entity-to-UI mapping to UI state
     * 3. Update this to be a void method that simply dispatches an action
     * 4. Remove `ProductEntityService` from facade
     */
    this._store.dispatch(new FetchItemEntityAction())
  }

  setSelectedProduct(id: number): void {
    // TODO: Dispatch action
    this._store.dispatch(new StoreSelectedIdAction(id))
  }

  addProductToCart(id: number): void {
    // TODO: Dispatch action
    this._store.dispatch(new AddItemToCartAction(id))
  }

  removeProductFromCart(id: number): void {
    // TODO: Dispatch action
    this._store.dispatch(new RemoveItemFromCartAction(id))
  }

  isProductInCart$(id: number): Observable<boolean> {
    // TODO: Get from selector
    return this._store.select(selectIfIdInCart(id))
  }
}
