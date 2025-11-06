import '../styles/Veiculos-lista.css'
import VeiculosCard, { VeiculosProps } from './Veiculos-cards'
import DataVeiculos from '../data/veiculos.json'

export default function VeiculosLista() {
  const veiculos: VeiculosProps[] = DataVeiculos as VeiculosProps[]

  return (
    <section className="Veiculos-lista">
      <h2>Nossos Veículos</h2>
      <div className="Veiculos-grid">
        {veiculos.map((v) => (
          <VeiculosCard key={v.id} {...v} />
        ))}
      </div>
    </section>
  )
}
