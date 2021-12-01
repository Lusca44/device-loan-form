import Button from "components/button";
import { useState } from "react";

function Form() {
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [matricula, setMatricula] = useState("");
	const [secao, setSecao] = useState("");
	const [nomeGerente, setNomeGerente] = useState("");
	const [notebook, setNotebook] = useState(false);
	const [celular, setCelular] = useState(false);

	const handleLimpa = () => {
		setNome("");
		setEmail("");
		setMatricula("");
		setSecao("");
		setNomeGerente("");
		if (notebook === true) {
			handleChangeNotebook();
		}
		if (celular === true) {
			handleChangeCelular();
		}
	};

	const handleChangeCelular = () => {
		setCelular(!celular);
	};

	const handleChangeNotebook = () => {
		setNotebook(!notebook);
	};

	const handleOrderObj = () => {
		const order = {
			nome,
			email,
			matricula,
			secao,
			nomeGerente,
			notebook,
			celular
		};
		return order;
	};

	return (
		<>
			<div className="container">
				<div className="jumbotron d-flex justify-content-center">
					<form className="row g-3 w-50">
						{/* NOME */}

						<div className="col-md-12">
							<label htmlFor="name" className="form-label">
								Nome completo
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Ex.: Pedro Barbosa dos Santos"
								value={nome}
								onChange={e => setNome(e.target.value)}
							/>
						</div>

						{/* EMAIL */}

						<div className="col-md-12">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Ex.: email@gmail.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>

						{/* MATRICULA */}

						<div className="col-12">
							<label htmlFor="matricula" className="form-label">
								Matricula
							</label>
							<input
								type="text"
								className="form-control"
								id="matricula"
								placeholder="Ex.: 4868"
								value={matricula}
								onChange={e => setMatricula(e.target.value)}
							/>
						</div>

						{/* SEÇÃO */}

						<div className="col-12">
							<label htmlFor="secao" className="form-label">
								Seção
							</label>
							<input
								type="text"
								className="form-control"
								id="secao"
								placeholder="Ex.: P&O"
								value={secao}
								onChange={e => setSecao(e.target.value)}
							/>
						</div>

						{/* NOME GERENTE */}

						<div className="col-md-12">
							<label htmlFor="nomeGerente" className="form-label">
								Nome do seu Gerente
							</label>
							<input
								type="text"
								className="form-control"
								id="nomeGerente"
								placeholder="Ex.: Carlinhos Maia"
								value={nomeGerente}
								onChange={e => setNomeGerente(e.target.value)}
							/>
						</div>

						{/* CHECKBOX */}

						<h5>Selecione o dispositivo</h5>
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value="celular"
								id="flexCheckDefault"
								checked={celular}
								onChange={handleChangeCelular}
							/>
							<label className="form-check-label" htmlFor="flexCheckDefault">
								Celular
							</label>
						</div>

						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value="notebook"
								id="flexCheckChecked"
								checked={notebook}
								onChange={handleChangeNotebook}
							/>
							<label className="form-check-label" htmlFor="flexCheckChecked">
								Notebook
							</label>
						</div>

						{/* BUTTON */}

						<div className="col-12 d-flex justify-content-center">
							<Button
								handleOrderObj={handleOrderObj}
								handleLimpa={handleLimpa}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Form;
