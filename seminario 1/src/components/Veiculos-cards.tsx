import '../styles/Veiculos-cards.css'

export interface VeiculosProps {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
  disponivel: number;
  assentos: number;
  bagagem: number;
}

export default function VeiculosCard({ nome, categoria, preco, imagem, disponivel, assentos, bagagem }: VeiculosProps) {
  const Disponivel = disponivel > 0;

  return (
    <div className={`Veiculos-cards ${Disponivel ? '' : 'NaoDisponivel'}`}>
      <img src={imagem} alt={nome} className="ImagemVeiculo" />
      <h3>{nome}</h3>
      <p className="categoria">{categoria}</p>
      <p className="assentos">{assentos} assentos | {bagagem} malas</p>

      {Disponivel ? (
        <>
          <p className="preco">R$ {preco}/dia</p>
          <p className="disponivel">{disponivel} unidade{disponivel > 1 ? 's' : ''} disponíveis</p>
          <button className="btn-secondario">Detalhes</button>
        </>
      ) : (
        <p className="indisponivel">Indisponível</p>
      )}
    </div>
  )
}
