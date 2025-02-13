import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-productos',
  imports: [ FormsModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  nombreProducto: string="";
  precioProducto: number=0;
   titulo = "Lista de productos";
    productos = [
      {descripcion: "Producto 1", precio: 100},
      {descripcion: "Producto 2", precio: 200},
      {descripcion: "Producto 3", precio: 300}
    ];

    agregarProducto():void {
     this.productos.push({  descripcion: this.nombreProducto, precio: this.precioProducto });
    }
  }