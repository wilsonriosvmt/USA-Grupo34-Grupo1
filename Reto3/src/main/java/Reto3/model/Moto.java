/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Reto3.model;

import Reto3.model.Categoria;
import Reto3.model.Mensaje;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 *
 * @author Will
 */
@Entity
@Table(name="moto")
public class Moto implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String brand;
    private Integer year;
    private Integer categoryId;
    private String description;

    @ManyToOne
    @JoinColumn(name = "categoryId", insertable=false, updatable=false)
    @JsonIgnoreProperties("motos")
    private Categoria category;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "moto")
    @JsonIgnoreProperties({"moto", "client"})
    private List<Mensaje> messages;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "moto")
    @JsonIgnoreProperties({"moto", "client"})
    private List<Reservaciones> reservations;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    
}
