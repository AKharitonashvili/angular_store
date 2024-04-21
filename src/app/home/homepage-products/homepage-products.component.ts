import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Products } from '../../fake-api/fake-api'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MinimizeTextPipe } from '../../shared/pipes/minimize-text/minimize-text.pipe'

@Component({
  selector: 'app-homepage-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MinimizeTextPipe],
  templateUrl: './homepage-products.component.html',
  styleUrl: './homepage-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageProductsComponent {
  products = Products
}
