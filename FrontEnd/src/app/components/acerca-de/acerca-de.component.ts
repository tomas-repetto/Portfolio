import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})

export class AcercaDeComponent {
  persona: persona = new persona("","","");
  
  
  constructor(public personaService: PersonaService){

  ngOnIt(): void{
    this.personaService.getPersona().suscibe(data=>{this.persona = data})
  }
  }
}
