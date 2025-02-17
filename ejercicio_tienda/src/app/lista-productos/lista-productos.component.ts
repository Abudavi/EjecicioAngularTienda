import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormularioProductoComponent } from "./formulario-producto/formulario-producto.component";
import { Producto } from './producto/producto.module';


@Component({
  selector: 'app-lista-productos',
  imports: [FormsModule, FormularioProductoComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  nombreProducto: string="";
  precioProducto: number=0;
   titulo = "Lista de productos";
  productos: Producto[] = [
new Producto('Pantalón', 130.0),
new Producto('Camisa', 80.0),
new Producto('Playera', 50.0),
];

    agregarProducto(producto:Producto) {
     this.productos.push(new Producto(producto.descripcion,producto.precio));
    }
  }