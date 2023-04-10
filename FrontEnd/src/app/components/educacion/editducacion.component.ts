import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editducacion',
  templateUrl: './editducacion.component.html',
  styleUrls: ['./editducacion.component.css']
})
export class EditducacionComponent implements OnInit{
  educacion: Educacion = null;

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe({
      next: data =>{
        this.educacion = data;
      }, error: err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    })
  }

  constructor(private educacionS : EducacionService,private activateRouter : ActivatedRoute, private router: Router){}

  onUpdate(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.educacionS.update(id, this.educacion).subscribe({
      next: data=> {
        this.router.navigate(['']);
      }, 
      error: err => {
        alert("Error al modificar")
        this.router.navigate(['']);
      }
    })
  }
}
