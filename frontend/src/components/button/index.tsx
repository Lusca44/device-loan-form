import axios from "axios";
import { BASE_URL } from "utils/requests";

interface Props {
	nome: string;
	email: string;
	matricula: string;
	secao: string;
	nomeGerente: string;
	notebook: boolean;
	celular: boolean;
	handleLimpa: Function;
}

function Button({
	nome,
	email,
	matricula,
	secao,
	nomeGerente,
	notebook,
	celular,
	handleLimpa
}: Props) {
	const handleSave = () => {
		const order = {
			nome: nome,
			email: email,
			matricula: matricula,
			secao: secao,
			nomeGerente: nomeGerente,
			notebook: notebook,
			celular: celular
		};
		axios.post(`${BASE_URL}/order`, order);
	};

	const handleConsole = () => {
		console.clear();
		console.log(`nome  ======= ${nome}`);
		console.log(`email ======= ${email}`);
		console.log(`matricula === ${matricula}`);
		console.log(`secao ======= ${secao}`);
		console.log(`nomeGerente = ${nomeGerente}`);
		console.log(`notebook ==== ${notebook}`);
		console.log(`celular ===== ${celular}`);
	};

	return (
		<>
			<div>
				<button
					type="button"
					value="salvar"
					style={{ width: 500 }}
					className="btn btn-primary btn-lg"
					onClick={() => {
						handleConsole();
						handleSave();
						handleLimpa();
					}}
				>
					Fazer Empréstimo
				</button>
			</div>
		</>
	);
}

export default Button;
