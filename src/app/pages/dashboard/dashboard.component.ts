import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardComponent } from 'src/app/components/card/card.component';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    NgIf,
    NgxPaginationModule,
    NgFor,
    CardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  page: number = 1;
  products$!: Observable<any[]>;
  bookcount = 0;

  constructor(private productService: ProductService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts().pipe(
      map((data: any) => data.result || []), // Ensure it always returns an array
      tap((data: any) => {
        console.log(data);
        this.bookcount = data.length;
        this.changeDetectorRef.detectChanges(); // Trigger change detection
      }),
      catchError((error: any) => {
        console.error('Error fetching books', error);
        return of([]); // Return an empty array in case of error
      })
    );

    const savedPage = localStorage.getItem('currentPage');
    if (savedPage) {
      this.page = +savedPage;
    }
  }

  onFilterChange(event: Event) {
    const filter = (event.target as HTMLSelectElement).value;
    this.products$.pipe(
      map(products => {
        return products.sort((a: any, b: any) => a[filter] - b[filter]);
      })
    ).subscribe(sortedProducts => {
      console.log('sorted By ' + filter);
      sortedProducts.forEach(product => console.log(product));
    });
  }

  onPageChange(event: number) {
    this.page = event;
    window.scrollTo(0, 0);
    localStorage.setItem('currentPage', event.toString());
  }
}
