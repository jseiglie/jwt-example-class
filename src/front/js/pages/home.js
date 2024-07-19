import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { RegisterLogin } from "../component/registerLogin.jsx";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleLogout = () => {
		actions.logout()
		navigate('/')
	}


	return (
		<div className="text-center mt-5">
			<RegisterLogin />


			{localStorage.getItem('token') ?
				<>
					<p>Estas logeado!!!!</p>
					<Link to={'/demo'}>
					ve a demo
					</Link>

					o 

					<button onClick={handleLogout}>log out </button>
				</>
				:
				''
			}

		</div>
	);
};
