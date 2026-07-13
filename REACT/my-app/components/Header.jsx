export function Header(){
  return(
    <header className="header">
      <img className='logo' alt='React Image' src='/src/assets/react.svg'/>
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}