/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Reto3.service;

import java.util.List;
import java.util.Optional;
import Reto3.model.Moto;
import Reto3.model.Moto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Reto3.repository.crud.MotoRepository;


/**
 *
 * @author Will
 */
@Service
public class MotoService {
    
    @Autowired
    private MotoRepository motoRepository;
    
    public List<Moto> getAll(){
        return motoRepository.getAll();
    }
    
    public Optional<Moto> getMoto(int id){
        return motoRepository.getMoto(id);
    }
    
    public Moto save(Moto m){
        if(m.getId()==null){
            return motoRepository.save(m);
        }else{
            Optional<Moto> maux=motoRepository.getMoto(m.getId());
            if(maux.isEmpty()){
                return motoRepository.save(m); 
            }else{
                return m;
            }
        }
    }
    
    public Moto update(Moto moto){
        if(moto.getId()!=null){
            Optional<Moto> e=motoRepository.getMoto(moto.getId());
            if(!e.isEmpty()){
                if(moto.getName()!=null){
                    e.get().setName(moto.getName());
                }
                if(moto.getBrand()!=null){
                    e.get().setBrand(moto.getBrand());
                }
                if(moto.getYear()!=null){
                    e.get().setYear(moto.getYear());
                }
                if(moto.getDescription()!=null){
                    e.get().setDescription(moto.getDescription());
                }
                if(moto.getCategoryId()!=null){
                    e.get().setCategoryId(moto.getCategoryId());
                }
                motoRepository.save(e.get());
                return e.get();
            }else{
                return moto;
            }
        }else{
            return moto;
        }
    }

    public boolean deleteMoto(int motoId) {
        Boolean aBoolean = getMoto(motoId).map(moto -> {
            motoRepository.delete(moto);
            return true;
        }).orElse(false);
        return aBoolean;
    }

}
