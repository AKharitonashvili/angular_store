import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductInterface,
  ProductType,
  SelectedProductInterface,
} from '../../../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import * as ProductsSelectors from '../../../../stores/products/products.selectors';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import * as FavoritesSelector from '../../../../stores/favorites/favorites.selectors';
import * as FavoritesActions from '../../../../stores/favorites/favorites.actions';
import { ProductCardComponent } from '../../../../shared/ui/product-card/product-card.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-homepage-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SkeletonModule],
  templateUrl: './homepage-products.component.html',
  styleUrl: './homepage-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageProductsComponent {
  filter = signal<ProductType>('newArrival');
  vm$: Observable<{
    products: ProductInterface[] | undefined;
    favorites: SelectedProductInterface[] | undefined;
    productsLoading: boolean;
  }> = combineLatest([
    toObservable(this.filter).pipe(
      switchMap(() => this.store.select(ProductsSelectors.selectProducts)),
      map(products => products?.filter(p => p.type?.includes(this.filter())))
    ),
    this.store.select(FavoritesSelector.selectFavorites),
    this.store.select(ProductsSelectors.selectProductsLoading),
  ]).pipe(
    map(([products, favorites, productsLoading]) => ({
      products,
      favorites,
      productsLoading,
    }))
  );

  constructor(
    private store: Store,
    private router: Router
  ) {}

  filterByType(type: ProductType) {
    this.filter.set(type);
  }

  navigateTo(id: string) {
    this.router.navigateByUrl(`products/items/${id}`);
  }

  toggleFavorite({
    isFavorite,
    item,
  }: {
    isFavorite: boolean;
    item: ProductInterface;
  }) {
    if (isFavorite) {
      this.store.dispatch(
        FavoritesActions.removeFromFavorites({
          id: item.id,
        })
      );
    } else {
      this.store.dispatch(
        FavoritesActions.addToFavorites({
          product: { ...item, selectedOption: item.options?.[0], quantity: 1 },
        })
      );
    }
  }
}
