package com.lusca44.form.enums;

public enum Status {

	ENVIADO(0),
	RECEBIDO(1),
	PROCESSANDO(2),
	FINALIZADO(3);
	
	private int code;
	
	private Status(int code) {
		this.code = code;
	}

	public int getCode() {
		return code;
	}
	
	public static Status valueOf(int code) {
		for(Status value : Status.values()) {
			if(value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException("Codigo de status INVÁLIDO!");
	}
	
}
