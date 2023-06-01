import { ClonesAndGoonsProps } from "../types";
import styles from './CharList.module.css'

export function CharList({ info }: ClonesAndGoonsProps): JSX.Element {
  const sukkaFishSortedByName = [...info].sort((a, b) => a.name.localeCompare(b.name));  
  return(
    <section className={styles.wrapper}>
      { sukkaFishSortedByName.map((elm: { name: string; nickname: string; imgURL: string; description: string; }, index: number) => (  
        <div key={index} className={styles.card}>
          <div  className={styles.cardTitles}>
            <h3>{elm.name}</h3>
            <h4>{elm.nickname}</h4>
            </div>
            <img src={elm.imgURL}></img>
            <p>{elm.description}</p>
          </div>
      ))}
    </section>
  )
}