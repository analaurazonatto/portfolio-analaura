import './App.css'
import NavBar from './components/nav/navbar';
import Inicio from './components/inicio/inicio';
import QuemSouEu from './components/quemsoueu/quemsoueu';
import Habilidades from './components/habilidades/habilidades';
import MeusProjetos from './components/meusprojetos/meusprojetos';
import Contatos from './components/contatos/contatos';

function App() {

  return (
    <>
    <NavBar/>
    <Inicio/>
    <QuemSouEu/>
    <Habilidades/>
    <MeusProjetos/>
    <Contatos/>
    </>
  );
}

export default App;
