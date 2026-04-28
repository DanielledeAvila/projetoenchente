import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [necessidades, setNecessidades] = useState([]);
  const [doacao, setDoacao] = useState({ necessidade_id: '', doador_nome: '', quantidade_doada: '' });

  // Busca as necessidades do Back-end
  const buscarNecessidades = async () => {
    try {
      const response = await axios.get('http://localhost:3000/necessidades');
      setNecessidades(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    buscarNecessidades();
  }, []);

  // Envia a doação para o Back-end
  const realizarDoacao = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/doar', doacao);
      alert("Obrigado! Sua doação foi registrada.");
      setDoacao({ necessidade_id: '', doador_nome: '', quantidade_doada: '' });
      buscarNecessidades(); // Atualiza a lista automaticamente
    } catch (error) {
      alert("Erro ao processar doação.");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>A gente doa 🤝</h1>
      <p>Ajudando a equilibrar a distribuição de recursos nas enchentes.</p>

      <hr />

      <h2>Itens Necessários</h2>
      <div style={{ display: 'grid', gap: '10px' }}>
        {necessidades.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <strong>{item.item}</strong> ({item.categoria})<br />
            Local: {item.local_nome}<br />
            Progresso: {item.quantidade_recebida} de {item.quantidade_pedida} recebidos
          </div>
        ))}
      </div>

      <hr />

      <h2>Quero Ajudar</h2>
      <form onSubmit={realizarDoacao} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <select 
          required 
          value={doacao.necessidade_id} 
          onChange={(e) => setDoacao({...doacao, necessidade_id: e.target.value})}
        >
          <option value="">Selecione o que quer doar</option>
          {necessidades.map(n => (
            <option key={n.id} value={n.id}>{n.item} - {n.local_nome}</option>
          ))}
        </select>
        
   
        <input 
          type="text" 
          placeholder="Seu nome" 
          value={doacao.doador_nome} // Verifique se está doacao.doador_nome
          onChange={(e) => setDoacao({...doacao, doador_nome: e.target.value})} 
          required 
        />  
        
        <input 
          type="number" 
          placeholder="Quantidade" 
          value={doacao.quantidade_doada}
          onChange={(e) => setDoacao({...doacao, quantidade_doada: e.target.value})} 
          required 
        />
        
        <button type="submit" style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
          Confirmar Doação
        </button>
      </form>
    </div>
  );
}

export default App;