import { CharacterArray, MyCompProps } from '../../App';

export const  CharList: React.FunctionComponent<MyCompProps> = (props) =>  {
const { data } = props
const workingCharactersArray: CharacterArray = Array.from(data)
const sukkaFishSortedByName: CharacterArray = workingCharactersArray.sort((a, b) => a.name.localeCompare(b.name))  
  return(
    <section id='character-cards' > 
      { 
        sukkaFishSortedByName.map((elm, index: number) => (  
          <div key={index} className='card'>
            <div  className='card-titles'>
              <h3>{elm.name}</h3>
              <h4>{elm.nickName}</h4>
              </div>
              <img src={elm.imageUrl}></img>
              <p>{elm.background}</p>
            </div>
        ))
      }
    </section>
  )
}