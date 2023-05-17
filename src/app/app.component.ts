import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorizacionp';
  columnas: string[] = ['codigo', 'cedula', 'nombre', 'apellido', 'edad', 'borrar'];

  datos: Articulo[] = [new Articulo(1,"123", 'papa', 'isai',0 ),
  
  ];

  articuloselect: Articulo = new Articulo(0,"", "","", 0);

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.cedula, this.articuloselect.nombre, this.articuloselect.apellido, this.articuloselect.edad));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, "","","" ,0);
  }
}


export class Articulo {
  constructor(public codigo: number, public cedula:string, public nombre: string,public apellido:string, public edad: number,  ) {
  }
}