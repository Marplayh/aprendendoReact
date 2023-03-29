import './App.css';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Cabecalho from './components/cabecalho';
import Container from './components/cabecalho/Container';
import Grafico from './components/grafico';
import Rodape from './components/rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissionais from './useDadosProfissionais';


function App() {
  const{dados: consultas, erro: consultasErro} = useDadosConsulta();
  const{dados: Profissionais, erro: ProfissionaisErro} = useDadosProfissionais();

  if(consultasErro || ProfissionaisErro){
    console.log("Ocorreu um erro na requisição")
  }
  return (
    <>
        <Cabecalho />
        <Container>
            <Titulo>Área Administrativa</Titulo>
            <Botao>Cadastrar especialista</Botao>
            <Titulo imagem="consulta">Consultas do dia</Titulo>
            <Tabela consultas={consultas}></Tabela>
            <Botao>Ver mais</Botao>
             <Titulo imagem="grafico">Consultas mensais por especialistas</Titulo>
             <Subtitulo>Dezembro/22</Subtitulo>
            <Grafico consultas={consultas} profissionais={Profissionais}></Grafico>
            <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
            <Subtitulo>Dezembro/22</Subtitulo>
            <Avaliacao profissionais={Profissionais}></Avaliacao>
        </Container>
        <Rodape></Rodape>
      </>
  );
}

export default App;
