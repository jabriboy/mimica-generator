import { useState } from "react";
import './style/HomeStyle.css'

function Home(){
	const palavras = ['Escada', 'Criança', 'Fralda', 'Leão', 'Pássaro', 'Natação', 'Banho', 'Musculação', 'Faca', 'Banana', 'Chave', 'Sapato', 'Relógio', 'Bolsa', 'Abraço', 'Beijo', 'Flores', 'Criança', 'Bateria', 'Carro', 'Moto', 'Colar', 'Brinco', 'Casa', 'Igreja', 'Macaco', 'Chá', 'Dançar', 'Sol', 'Árvore', 'Música', 'Pizza', 'Sorvete', 'Ônibus', 'Maçã', 'Espelho', 'Guitarra', 'Livro', 'Estrela', 'Balão', 'Avião', 'Elefante', 'Bola', 'Bebê', 'Peixe', 'Futebol', 'Beliscão', 'Rolo de papelhigiênico', 'Basquete', 'Controle remoto', 'Triste', 'Gato', 'Golfe', 'Tesoura', 'Colher', 'Pular', 'Galinha', 'Sapo', 'Espirro', 'Martelo', 'Violão', 'Aplaudir', 'Tosse', 'Chifres', 'Pinguim', 'Chorar', 'Rabo', 'Piada', 'Escova de dente', 'Celular', 'Cachorro', 'Pato', 'Sofá', 'Fotógrafo', 'Óculos de grau', 'Balé', 'Pipa', 'Café', 'Táxi', 'Cadeira', 'Ônibus', 'Elevador', 'Bicicleta', 'Fogão', 'Copo', 'Orelhas', 'Chocolate', 'Pescador', 'Notebook', 'Lápis', 'Coruja', 'Gavião', 'Juramento', 'MarchaAmor', 'Placenta', 'Cordão Umbilical', 'Aeroporto', 'Multa de trânsito', 'Chuveiro elétrico', 'Trator', 'Anfíbio', 'Escorpião', 'Esfinge', 'Ronco', 'Sinfonia', 'Burocracia', 'Jardineiro', 'Frigorífico', 'Jazida', 'Hidrelétrica', 'Compasso', 'Ritmo', 'Circo', 'Desenho animado', 'Geleira', 'Zoológico', 'Cicatriz', 'Cobertor', 'Helicóptero', 'Aniversário', 'Vulcão', 'Arco-íris', 'Presidente da República', 'Noiva', 'Babar', 'Montanha-russa', 'Natal', 'Luz', 'Sombra', 'Magia', 'Maquiadora', 'Shopping', 'Berço', 'Medir', 'Aranha', 'Jardim', 'Trampolim', 'Cachoeira', 'Iô-iô', 'Janela', 'Girafa', 'Roncar', 'Pesadelo', 'Lanterna', 'Curiosidade', 'Panquecas', 'Aplicativo', 'Convite', 'Adolescente', 'Satélite', 'Jornal', 'Diamante', 'Lenha', 'Sapo', 'Andador infantil', 'Ração', 'Google', 'Tocha', 'Acampar', 'Lago', 'Emagrecer', 'Fofoca', 'Salário', 'Sorte']

	const frases = ['Me dê um abraço apertado', 'Eu amo você.', 'Vamos dançar até o amanhecer.', 'Estou com muita fome.', 'Vamos para a praia este fim de semana.', 'Eu quero viajar pelo mundo.', 'Estou muito animado para o show hoje à noite.', 'Eu tenho que ir ao médico amanhã.', 'Estou cansado de trabalhar todos os dias.', 'Vou ao shopping hoje', 'Eu não consigo acreditar nisso.', 'Vamos para a piscina hoje?', 'Vamos ver um filme esta noite.', 'Estou ansioso para o meu aniversário.', 'Eu quero aprender a tocar violão.', 'Acho que estou com uma alergia.', 'Estou com fome', 'Vou passear com o meu cachorro', 'Hoje está muito calor', 'Estava correndo e machuquei o meu pé', 'Estou com preguiça', 'Estou com saudade dos meus pais', 'Vou comer pizza', 'Vou ver minhas amigas hoje', 'Eu perdi as minhas chaves de casa', 'Meu computador não está ligando', 'Estou com dor de cabeça', 'Amanhã vou acampar', 'Eu nunca viajei de avião', 'Eu amo a primavera', 'Quero aprender a cozinhar', 'Eu escrevi uma carta ontem', 'Eu quero sair para dançar', 'Vou ao cinema hoje', 'Amo ler livros']

	const filmes = ['Guerra nas Estrelas', 'Indiana Jones', 'De Volta para o Futuro', 'Titanic', 'O Rei Leão', 'De Volta para o Futuro', 'O Rei do Show', 'Os Vingadores', 'Harry Potter e a Pedra Filosofal', 'Um Sonho de Liberdade', 'Jurassic Park', 'A Guerra dos Botões', 'Os Muppets', 'O Senhor dos Anéis: A Sociedade do Anel', 'O Incrível Hulk', 'Indiana Jones e os Caçadores da Arca Perdida', 'MIB - Homens de Preto', 'Cinderela Baiana', 'Ó o Paí Ó', 'Mulher Invisível', 'Extraordinário', 'Meu Pai', 'Guardiões da Galáxia', 'A Vida Secreta dos Pets', 'Zootopia', 'Encanto', 'A Princesa e o Sapo', 'Sharknado', 'Pânico', 'O Poderoso Chefão', 'O Mágico de Oz', 'A Culpa é das Estrelas', 'Minha Mãe é uma Peça', 'O Amor é Cego', 'As Branquelas', 'Clube dos 5', 'Cantando na Chuva', 'A Ilha da Fantasia', 'Branca de Neve e Os Sete Anões', 'Psicose', 'Uma Linda Mulher', 'Central do Brasil', 'Titanic', 'Duro de Matar', 'Cidade de Deus', 'O Sexto Sentido', 'E.T. O Extraterrestre', 'Forest Gump', 'O Exterminador do Futuro', 'Homem-Aranha', 'Matrix', 'O Silêncio dos Homens', 'O Auto da Compadecida', 'Logan', 'Náufrago', 'A Paixão de Cristo', 'Garota Exemplar', 'King Kong', 'Gladiador', 'O silêncio dos inocentes', 'Django Livre']

	const personagensFilmes = ['Hannibal Lecter (O Silêncio dos Inocentes)', 'Freddy Krueger (A Hora do Pesadelo)', 'Agente Smith (Matrix)', 'Katniss Everdeen (Jogos Vorazes)', 'Sherlock Holmes', 'Wolverine (X-Men)', 'Neo (Matrix)', 'Ellen Ripley (Alien)', 'Indiana Jones', 'Jack Bauer (24 Horas)', 'Jason Bourne', 'Sarah Connor (O Exterminador do Futuro)', 'Pernalonga', 'Rocky Balboa (Rocky)', 'Piupiu', 'Frajola', 'Fred Flinston', 'Hermione Granger (Filmes Harry Potter)', 'Remus Lupin', 'Gandalf', 'Capitão Gancho', 'Pinóquio', 'Princesa Mia Thermopolis (Diário da Princesa)', 'Sidney (franquia Pânico)', 'Batman', 'Coringa', 'Darth Vader', 'Loki', 'Vitor Corleone', 'Capitão América', 'James Bond', 'Yoda', 'Xerife Woody (Toy Story)', 'Capitão Jack Sparrow', 'Norman Bates (Filme Psicose)', 'Maximus (Filme Gladiador)', 'Groot (Guardiões da Galáxia)', 'Joey Tribbiani (Série Friends)', 'Lord Voldemort (Filmes Harry Potter)']

	const [mimica, setMimica] = useState([])

	const gerar = () => {
		var c = 0
		var palavraAntiga = ''
		var mimicas = []
		while(c < 2){
			const randomIndex = Math.floor(Math.random() * palavras.length);
			if(palavras[randomIndex] != palavraAntiga){
				palavraAntiga = palavras[randomIndex]
				mimicas.push(palavras[randomIndex])
				c++
			}
		}
		var randomIndex = Math.floor(Math.random() * frases.length);
		mimicas.push(frases[randomIndex])
		randomIndex = Math.floor(Math.random() * filmes.length);
		mimicas.push(filmes[randomIndex])
		randomIndex = Math.floor(Math.random() * personagensFilmes.length);
		mimicas.push(personagensFilmes[randomIndex])

		setMimica(mimicas)
	}
	return(
		<>
		<div className="home">
			<div className="home-center">
				<h1>mímica <span>generator</span></h1>
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