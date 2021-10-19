/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Reto3.repository.crud;

import java.util.List;
import java.util.Optional;
import Reto3.model.Moto;
import Reto3.model.Moto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import Reto3.repository.crud.MotoCrudRepository;

/**
 *
 * @author Will
 */
@Repository
public class MotoRepository {
    @Autowired
    MotoCrudRepository motoCrudRepository;
    
    public List<Moto> getAll(){
        return (List<Moto>) motoCrudRepository.findAll();
    }
    
    public Optional<Moto> getMoto(int id){
        return motoCrudRepository.findById(id);
    }
    
    public Moto save(Moto m){
        return motoCrudRepository.save(m);
    }
    
    public void delete(Moto moto){
        motoCrudRepository.delete(moto);
    }
    
}
