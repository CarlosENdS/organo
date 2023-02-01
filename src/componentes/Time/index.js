import Jogador from '../Jogador';
import './Time.css';

const Time = ( props ) => {
    return(
        props.jogadores.length > 0 ? <section className='time' style={{'backgroundColor': props.corSecundaria}}>
            <h3 style={{"borderBottomColor": props.corPrimaria}}>{props.nome}</h3>
            <div className='jogadores'>

            {props.jogadores.map( jogador => <Jogador key={jogador.nome} corDeFundo={props.corPrimaria} nome={jogador.nome} cargo={jogador.cargo} imagem={jogador.imagem}/>)}
            </div>
        </section>
        : ''
    );
}

export default Time;