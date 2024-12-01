import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userName = 'john@mail.com'; 
  displayedColumns: string[] = ['image', 'id', 'title', 'price', 'actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private router: Router 
  ) {}

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http.get<any[]>('https://api.escuelajs.co/api/v1/products').subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewProduct(product: any) {
    this.dialog.open(ViewDialogComponent, {
      data: product,
    });
  }

  editProduct(product: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { ...product },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.dataSource.data.findIndex((p: any) => p.id === result.id);
        if (index !== -1) {
          this.dataSource.data[index] = result;
          this.dataSource.data = [...this.dataSource.data];
        }
      }
    });
  }

  confirmDelete(product: any) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: {
        message: `¿Estás seguro de que deseas eliminar el producto "${product.title}"?`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct(product.id);
      }
    });
  }

  deleteProduct(productId: number) {
    this.dataSource.data = this.dataSource.data.filter((product: any) => product.id !== productId);
  }

  logout() {
 
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');

  
    this.router.navigate(['/login']);
    console.log('Sesión cerrada correctamente');
  }
}
