import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  template: `
    <h1 mat-dialog-title>Editar Producto</h1>
    <div mat-dialog-content>
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Nombre</mat-label>
        <input matInput [(ngModel)]="data.title" />
      </mat-form-field>
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Descripción</mat-label>
        <textarea matInput [(ngModel)]="data.description"></textarea>
      </mat-form-field>
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Precio</mat-label>
        <input matInput type="number" [(ngModel)]="data.price" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancelar</button>
      <button mat-button color="primary" (click)="confirmEdit()">Guardar</button>
    </div>
  `,
  styles: [
    `
      .form-field {
        width: 100%;
      }
    `,
  ],
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  confirmEdit() {
    this.dialogRef.close(this.data);
  }
}
