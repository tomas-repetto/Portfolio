package com.portfolio.portfolio.Interface;

import com.portfolio.portfolio.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //traer lista de personas
    public List<Persona> getPersona();
    
    //guardar obj tipo persona
    public void savePersona(Persona persona);
            
    //eliminar usuario
    public void deletePersona(Long id);
    
    //buscar persona por id
    public Persona findPersona(Long id);
}
