import { useState } from "react";
import palavras from '../palavras/palavras'
import frases from '../palavras/frases'
import filmes from '../palavras/filmes'
import personagensFilmes from '../palavras/personagens'

import './style/HomeStyle.css'

function Home(){
	const [mimica, setMimica] = useState([])

	const [isFrases, setIsFrases] = useState(false)
	const [isFilmes, setIsFilmes] = useState(false)
	const [isPersonagens, setIsPersonagens] = useState(false)

	const gerar = () => {
		var c = 0
		var palavraAntiga = ''
		var mimicas = []

		var total = value
		var randomIndex = Math.floor(Math.random() * frases.length);
		if(isFrases == true){
			mimicas.push(frases[randomIndex])
			total--
		}
		if(isFilmes == true){
			randomIndex = Math.floor(Math.random() * filmes.length);
			mimicas.push(filmes[randomIndex])
			total--
		}
		if(isPersonagens == true){
			randomIndex = Math.floor(Math.random() * personagensFilmes.length);
			mimicas.push(personagensFilmes[randomIndex])
			total--
		}

		while(c < total){
			const randomIndex = Math.floor(Math.random() * palavras.length);
			if(palavras[randomIndex] != palavraAntiga){
				palavraAntiga = palavras[randomIndex]
				mimicas.push(palavras[randomIndex])
				c++
			}
		}

		setMimica(mimicas)
	}

	const [value, setValue] = useState(5);
	
	const handleIncrement = () => {
		setValue(prevValue => prevValue + 1);
	};
	
	const handleDecrement = () => {
		if(value != 0){
			setValue(prevValue => prevValue - 1);
		}
	};

	return(
		<>
		<div className="home">
			<div className="home-center">
				<h1>mímica <span>generator</span></h1>
				<ul>
					<li>Quantidade</li>
					<li>
					<button onClick={handleDecrement}>-</button>
					<input
						type="number"
						className="quantidade"
						value={value}
						onChange={(e) => setValue(parseInt(e.target.value))}
						step="1"
						readOnly
					/>
					<button onClick={handleIncrement}>+</button>
					</li>
					<li>Frases</li>
					<li>
						<label className="switch">
							<input type="checkbox" onClick={() => {setIsFrases(!isFrases)}}/>
							<span className="slider round"></span>
						</label>
					</li>
					<li>Filmes</li>
					<li>
						<label className="switch">
							<input type="checkbox" onClick={() => {setIsFilmes(!isFilmes)}}/>
							<span className="slider round"></span>
						</label>
					</li>
					<li>Personagens</li>
					<li>
						<label className="switch">
							<input type="checkbox" onClick={() => {setIsPersonagens(!isPersonagens)}}/>
							<span className="slider round"></span>
						</label>
					</li>
				</ul>
				<ol className="lista-palavras">
					{mimica.map(m => {
						return <li key={m}>{m}</li>
					})}
				</ol>
				{/* <button onClick={gerar}>gerar</button> */}
				<div className="btn-gerar" onClick={gerar}>gerar</div>
			</div>
		</div>
		</>
	)
}


export default Home;