import { Component } from 'react'

class Header extends Component {
  render() {
    const buttonList: string[] = ['about us', 'info', 'support us']
    const headTitle: string = 'Fullmetal Alchemist~'

    return(
      <header>
        <h1>{headTitle}</h1>
        <nav className="buttons">
          { buttonList.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </nav>
      </header>
    )
  }
}
export default Header
