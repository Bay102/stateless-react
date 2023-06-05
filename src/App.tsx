import  Header  from './components/header/Header'
import { TopCharacters } from './components/topCharacters/TopChararacters'
import { CharList } from './components/charList/CharList'
import { data }  from './components/data'


export type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
}
export type CharacterArray = Character[]

export type MyCompProps = {
  data: CharacterArray
}

function App(): React.ReactNode  {
  return (
    <>
      <Header />
      <TopCharacters data={data} />
      <CharList data={data}/>
    </>
  )
}
export default App
