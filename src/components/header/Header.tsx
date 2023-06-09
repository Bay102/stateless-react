import { Component } from 'react';

class Header extends Component {
  render() {
    const buttonList = ['about us', 'info', 'support us'];

    return (
      <header>
        <h1>Fullmetal Alchemist~</h1>
        <nav className="buttons">
          {buttonList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </nav>
      </header>
    );
  }
}
export default Header;
