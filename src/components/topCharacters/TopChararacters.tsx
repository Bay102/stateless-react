import { CharacterArray, MyCompProps } from '../../App';

export const TopCharacters: React.FunctionComponent<MyCompProps> = (props) => {
  const { data } = props
  const headersArray: string[] = ['Name', 'Decscription', 'Votes']
  const workingCharactersArray: CharacterArray = Array.from(data)
  const sortedCharactersByVotes: CharacterArray = workingCharactersArray.sort((a, b) => b.votes - a.votes)
 
  return(
  <section id='character-cards' >
    <h4>top Characters</h4>
    <table>
      <tbody>
        <tr>
          { 
            headersArray.map((elm: string) => (
              <th>{elm}</th>
            ))
          }
        </tr>
        { 
          sortedCharactersByVotes.map((elm, index) => (
            <tr key={elm.name} className={index % 2 != 0 ? 'dark' : 'light'}>
            <td>{elm.name}</td>
            <td>{elm.background}</td>
            <td>{elm.votes}</td>
            </tr>      
          ))
        }
      </tbody>
    </table>
  </section>
  )
}