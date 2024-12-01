import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  products: Product[] = []; 
  paginatedProducts: Product[] = []; 
  pageSize = 5; 
  currentPage = 0; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.fetchProducts();
  }


  fetchProducts(): void {
    
    this.products = [
      {
        id: 1,
        title: 'Fjallraven - Foldsack No. 1 Backpack',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        title: 'Mens Casual Premium Slim Fit T-Shirts',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        title: 'Mens Cotton Jacket',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 4,
        title: 'Mens Casual Slim Fit',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 5,
        title: 'John Hardy Women\'s Legends Naga Gold Bracelet',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 6,
        title: 'Solid Gold Petite Microwawe',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 7,
        title: 'White Gold Plated Princess',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 8,
        title: 'Pierced Owl Rose Gold Stainless Steel',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 9,
        title: 'WD 2TB Elements Portable External Hard Drive',
        image: 'https://via.placeholder.com/150'
      }
    ];


    this.updatePaginatedProducts();
  }


  updatePaginatedProducts(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  /**
   * 
   * @param event 
   */
  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedProducts();
  }


  viewDetails(product: Product): void {
    console.log('Ver detalles del producto:', product);
  }

  editProduct(product: Product): void {
    console.log('Editar producto:', product);
  }

  deleteProduct(product: Product): void {
    console.log('Eliminar producto:', product);
  }
}


interface Product {
  id: number;
  title: string;
  image: string;
}
