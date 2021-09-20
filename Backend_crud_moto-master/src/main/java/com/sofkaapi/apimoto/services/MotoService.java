package com.sofkaapi.apimoto.services;

import com.sofkaapi.apimoto.entities.Moto;
import com.sofkaapi.apimoto.repositories.MotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MotoService implements InterfaceServicesMoto{

    @Autowired
    private MotoRepository data;
    @Override
    public Moto save(Moto moto) {
        return  data.save(moto);
    }

    @Override
    public List<Moto> list() {
        return data.findAll();
    }

    @Override
    public Moto listById(int id) {
        return data.findById(id).get();
    }

    @Override
    public void delete(int id) {
        data.deleteById(id);
    }

}
