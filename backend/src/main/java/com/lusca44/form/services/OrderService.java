package com.lusca44.form.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lusca44.form.entities.Order;
import com.lusca44.form.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repo;
	
	public List<Order> findAll() {
		return repo.findAll();
	}

	public Order findById(Long id) {
		Optional<Order> order = repo.findById(id);
		return order.get();
	}
	
	public Order create(Order order) {
		return repo.save(order);
	}
	
	public void deleteById(Long id) {
		repo.deleteById(id);
	}
	
	public Order update(Long id, Order order) {
		Order entity = findById(id);
		updateData(entity, order);
		return repo.save(entity);
	}
	
	private void updateData(Order entity, Order order) {
		entity.setStatus(order.getStatus());
	}
	
}
