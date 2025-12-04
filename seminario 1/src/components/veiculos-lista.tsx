import '../styles/Veiculos-lista.css'
import VeiculosCard, {type VeiculosProps } from './Veiculos-cards'
import DataVeiculos from '../data/veiculos.json'
import { VeiculosFiltro } from './Veiculos-Filtro'  
import { useState, useMemo } from 'react'


interface FiltroState {
  categoria: string;
  precoMax: number;
  disponivel: boolean;
  busca: string;
}

export default function VeiculosLista() {
  const veiculos = DataVeiculos as VeiculosProps[];

  const [filtros, setFiltros] = useState<FiltroState>({
    categoria: 'todos',
    precoMax: 1000,
    disponivel: false,
    busca: '',
  });

  const handleFiltrar = (novosFiltros: Partial<FiltroState>) => {
    setFiltros(prev => ({ ...prev, ...novosFiltros }));
  };

  const limparFiltros = () => {
    setFiltros({
      categoria: 'todos',
      precoMax: 1000,
      disponivel: false,
      busca: '',
    });
  };

  const veiculosFiltrados = useMemo(() => {
    return veiculos.filter(veiculo => {
   
      if (filtros.categoria !== 'todos' && veiculo.categoria !== filtros.categoria) {
        return false;
      }
      
  
      if (veiculo.preco > filtros.precoMax) {
        return false;
      }
      
      if (filtros.disponivel && veiculo.disponivel === 0) {
        return false;
      }
      return true;
    });
  }, [veiculos, filtros]);
 

   return (
    <section className="Veiculos-lista">
      <h2>Nossos Veículos</h2>
      
      <div className="controles-busca">
        <VeiculosFiltro
          onFiltrar={handleFiltrar}
          filtrosAtuais={filtros}
          onLimparFiltros={limparFiltros}
        />
      </div>

      {veiculosFiltrados.length === 0 ? (
        <div className="sem-resultados">
          <p>Nenhum veículo encontrado com os filtros aplicados.</p>
          <button onClick={limparFiltros} className="btn-limpar-todos">
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        <div className="Veiculos-grid">
          {veiculosFiltrados.map((v) => (
            <VeiculosCard 
              key={v.id} 
              {...v} 
            />
          ))}
        </div>
      )}
      
      <div className="contador-resultados">
        {veiculosFiltrados.length} de {veiculos.length} veículos
      </div>
    </section>
  );
}
