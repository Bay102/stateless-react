import { HeaderBangerProps } from '../types'
import styles from './Header.module.css'
import { Component } from 'react'

class Header extends Component<HeaderBangerProps> {
  render() {
    const {title, buttons} = this.props
    return(
      <>
      <div className={styles.header}>
        <h1>{title}</h1>
        <nav className="buttons">
          { buttons.map((item: string) => (
            <li key={item}>{item}</li>
            ))}
        </nav>
      </div>
    </>
    )
  }
}
export default Header
