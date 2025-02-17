import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto.module';
import e from 'express';




@Component({
  selector: 'app-formulario-producto',
  imports: [],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent {
titulo:string="Listado Productos"
@ViewChild ("inputNombreProducto") inputNombreProducto! :ElementRef;
@ViewChild ("inputPrecioProducto") inputPrecioProducto! :ElementRef;
@Output() nuevoProducto = new EventEmitter<Producto>;


agregarProducto(envento:Event){
 envento.preventDefault();
 if(this.inputNombreProducto.nativeElement.value==''&&this.inputPrecioProducto.nativeElement.value==0){
  alert("ingrese un valor valido");
  return;
 }
 let producto = new Producto(this.inputNombreProducto.nativeElement.value,this.inputPrecioProducto.nativeElement.value);
 console.log(this.inputNombreProducto.nativeElement.value)
 this.nuevoProducto.emit(producto);
 this.inputNombreProducto.nativeElement.value='';
 this.inputPrecioProducto.nativeElement.value=null;
}
}
