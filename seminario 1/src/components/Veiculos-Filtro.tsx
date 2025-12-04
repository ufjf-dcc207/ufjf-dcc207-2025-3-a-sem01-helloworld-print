import '../styles/veiculos-filtro.css';

interface FiltroProps {
  onFiltrar: (filtros: { categoria?: string; precoMax?: number; disponivel?: boolean }) => void;
  filtrosAtuais: {
    categoria: string;
    precoMax: number;
    disponivel: boolean;
  };
  onLimparFiltros: () => void;
}

export function VeiculosFiltro({ onFiltrar, filtrosAtuais, onLimparFiltros }: FiltroProps) {
  const categorias = ['todos', 'Econômico', 'SUV', 'Compacto', 'APC'];

  const handleCategoriaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltrar({categoria: e.target.value});
  }

    const handlePrecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFiltrar({precoMax: Number(e.target.value)});
    }

    const handleDisponivelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFiltrar({disponivel: e.target.checked});
    };

    return (
        <div className="filtro-container">
            <h3>Filtrar Veículos</h3>

            <div className="filtro-grupo">
                <label>Categoria:</label>
                <select 
                
                value={filtrosAtuais.categoria}
                onChange={handleCategoriaChange}
                >
                    {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat === 'todos' ? 'Todos' : cat}
                        </option>
                    ))}
                </select>
            </div>

            <div className="filtro-grupo">
                <label>Preço Máximo: R$ {filtrosAtuais.precoMax}</label>
                <input
                    type="range"
                    min='0'
                    max='1000'
                    step = '10'
                    value={filtrosAtuais.precoMax}
                    onChange={handlePrecoChange}
                />
                <div className="preco-range">
                    <span>R$ 0</span>
                    <span>R$ 1000</span>
                </div>
            </div>

            <div className="filtro-grupo checkbox">
                <label>
                    <input
                        type="checkbox"
                        checked={filtrosAtuais.disponivel}
                        onChange={handleDisponivelChange}
                    />
                    Apenas Disponíveis
                </label>
                </div>

                <button className='btn-limpar'
                onClick={onLimparFiltros}>
                    Limpar Filtros
                </button>
            </div>
    );
}