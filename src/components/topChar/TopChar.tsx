import { realMofoGs } from "../data";
import { RealGsProps } from "../types";
import styles from './TopChar.module.css'

export function TopChar({title, characters}: RealGsProps): JSX.Element {
  const keys: string[] = Object.keys(realMofoGs.characters[0])
  const sortedFolksByVotes = Array.from(characters.sort((a,b) => b.votes - a.votes))
  return(
  <section id='wrapper' className={styles.wrapper}>
    <h4>{title}</h4>
    <table>
    <tr>
      { keys.map((elm) => (
        <th key={elm}>{elm}</th>
      ))}
    </tr>
    { sortedFolksByVotes.map((elm, index) => (
      <tr key={elm.name} className={index % 2 != 0 ? styles.dark : styles.light}>
        <td>{elm.name}</td>
        <td>{elm.skillset}</td>
        <td>{elm.votes}</td>
      </tr>
    ))}
    </table>
  </section>
  )
}