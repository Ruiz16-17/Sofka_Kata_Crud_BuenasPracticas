package com.sofkaapi.apimoto.services;

import com.sofkaapi.apimoto.entities.Moto;

import java.util.List;

public interface InterfaceServicesMoto {
    public Moto save(Moto moto);
    public List<Moto> list();
    public  Moto listById(int id);
    public void delete(int id);
}
