import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserListComponent } from './components/user-list/user-list.component'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { ProductDetailComponent } from './dialogs/product-detail/product-detail.component';
import { ProductEditComponent } from './dialogs/product-edit/product-edit.component';
import { ProductDeleteComponent } from './dialogs/product-delete/product-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewDialogComponent } from './dashboard/view-dialog/view-dialog.component';
import { EditDialogComponent } from './dashboard/edit-dialog/edit-dialog.component';
import { ConfirmDeleteDialogComponent } from './dashboard/confirm-delete-dialog/confirm-delete-dialog.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    DashboardComponent, 
    ProductsTableComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductCardsComponent,
    ViewDialogComponent,
    EditDialogComponent,
    ConfirmDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule ,
    MatIconModule,
    MatMenuModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
