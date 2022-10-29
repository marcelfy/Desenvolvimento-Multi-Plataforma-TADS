import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SorteadorNumeroPage from './pages/SorteadorNumero/SorteadorNumeroPage';
import ListarPessoasPage from './pages/ListarPessoas/ListarPessoasPage';
import Sidebar from './components/SideBar/SideBar';

function App() {

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<SorteadorNumeroPage />} > </Route>
          <Route path="/listar-pessoas" element={<ListarPessoasPage />} > </Route>
        </Routes>
      </Sidebar>
    </Router >
  )
}

export default App;
