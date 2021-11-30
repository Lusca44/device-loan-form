package com.lusca44.form.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_order")
public class Order implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String email;
	private String matricula;
	private String secao;
	private String nomeGerente;
	private Boolean notebook = false;
	private Boolean celular = false;
	
	public Order() {
	}

	public Order(Long id, String nome, String email, String matricula, String secao, String nomeGerente, Boolean notebook, Boolean celular) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.matricula = matricula;
		this.secao = secao;
		this.nomeGerente = nomeGerente;
		this.notebook = notebook;
		this.celular = celular;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getSecao() {
		return secao;
	}

	public void setSecao(String secao) {
		this.secao = secao;
	}

	public String getNomeGerente() {
		return nomeGerente;
	}

	public void setNomeGerente(String nomeGerente) {
		this.nomeGerente = nomeGerente;
	}

	public Boolean getNotebook() {
		return notebook;
	}

	public void setNotebook(Boolean notebook) {
		this.notebook = notebook;
	}

	public Boolean getCelular() {
		return celular;
	}

	public void setCelular(Boolean celular) {
		this.celular = celular;
	}
	
}