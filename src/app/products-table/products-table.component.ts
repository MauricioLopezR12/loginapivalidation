import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../dialogs/product-detail/product-detail.component';
import { ProductEditComponent } from '../dialogs/product-edit/product-edit.component';
import { ProductDeleteComponent } from '../dialogs/product-delete/product-delete.component';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
})
export class ProductsTableComponent implements OnInit {
  products: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'image', 'actions'];

  constructor(private productsService: ProductsService, private dialog: MatDialog) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewDetails(product: any) {
    this.dialog.open(ProductDetailComponent, {
      data: product,
    });
  }

  editProduct(product: any) {
    this.dialog.open(ProductEditComponent, {
      data: product,
    });
  }

  deleteProduct(product: any) {
    this.dialog.open(ProductDeleteComponent, {
      data: product,
    });
  }
}
