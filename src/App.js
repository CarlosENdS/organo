
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {

  const times =  [
    {
      nome:'Valorant',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome:'League of Legends',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome:'CS:GO',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome:'Apex',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome:'PokeXGames',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome:'Rocket League',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
  ]

  const [jogadores, setJogadores] = useState([]);

  
  const aoNovoJogadorAdicionado = (jogador) => {
    setJogadores([...jogadores, jogador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map( time => time.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdicionado(jogador) }/>
      
      {times.map(time => <Time
        key={time.nome}F
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria} 
        jogadores={jogadores.filter( jogador => jogador.time === time.nome)}
        /> )}
      <Rodape />
    </div>
  );
}

export default App;
