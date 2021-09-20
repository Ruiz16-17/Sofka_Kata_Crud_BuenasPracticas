package com.sofkaapi.apimoto.repositories;

import com.sofkaapi.apimoto.entities.Moto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotoRepository extends JpaRepository<Moto, Integer> {
}
