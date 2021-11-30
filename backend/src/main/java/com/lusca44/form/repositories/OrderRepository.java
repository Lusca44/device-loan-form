package com.lusca44.form.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lusca44.form.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
