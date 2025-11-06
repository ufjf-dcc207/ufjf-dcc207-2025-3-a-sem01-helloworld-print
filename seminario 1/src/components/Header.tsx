import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">AlugaFácil.com</h1>
      <nav className="nav-links">
        <a href="#">Início</a>
        <a href="#">Veículos</a>
        <a href="#">Contato</a>
        <a href="#">cadastre-se</a>
        <a href="#">Login</a>
      </nav>
    </header>
  )
}
