import axios from "axios";
import { BASE_URL } from "utils/requests";

interface Props {
	handleLimpa: Function;
	handleOrderObj: Function;
}

function Button({ handleLimpa, handleOrderObj }: Props) {
	const handleSave = () => {
		axios.post(`${BASE_URL}/order`, handleOrderObj());
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
