/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Reto3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "message")
public class Mensaje implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String messageText;
    
    @ManyToOne(optional=false)
    @JoinColumn(name="id", insertable=false, updatable=false)
    @JsonIgnoreProperties({"messages", "client", "reservations"})
    private Moto moto;
        
    public Moto getMoto() {
        return moto;
    }

    public void setMoto(Moto moto) {
        this.moto = moto;
    }

    @ManyToOne
    @JoinColumn(name="clientId")
    @JsonIgnoreProperties({"messages", "reservations", "client"})
    private Cliente client;

    public Integer getId() {
        return id;
    }

    public void setId(Integer idMessage) {
        this.id = idMessage;
    }

    public String getMessageText() {
        return messageText;
    }

    public void setMessageText(String messageText) {
        this.messageText = messageText;
    }

    public Cliente getClient() {
        return client;
    }

    public void setClient(Cliente client) {
        this.client = client;
    }
    
    
    
}
