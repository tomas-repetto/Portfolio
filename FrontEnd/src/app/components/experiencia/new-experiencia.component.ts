import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
nombreE: string = '';
descripcionE: string = '';

constructor(private sExperiencia: SExperienciaService, private router: Router){}

onCreate(): void{
  const expe = new Experiencia(this.nombreE, this.descripcionE);
  this.sExperiencia.save(expe).subscribe(data=>{
    alert("Experiencia agregada");
    this.router.navigate(['']);

  },err=>{
    alert("Fallo critico")
    this.router.navigate(['']);
  })
}

}
