import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string;
  descripcionE: string;

  constructor(private educacionS: EducacionService, private router: Router){}

  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE);
    this.educacionS.save(educacion).subscribe({
      next: data => {
        alert("Educacion agregada")
        this.router.navigate(['']);
      }, 
      error: err => {
        alert("fallo critico");
        this.router.navigate(['']);
      }
    })
  }

}
