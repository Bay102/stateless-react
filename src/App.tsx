import Header from './components/header/Header';
import { TopCharacters } from './components/topCharacters/TopChararacters';
import { CharacterList } from './components/charList/CharList';
import { data } from './components/data';

function App() {
  return (
    <>
      <Header />
      <TopCharacters data={data} />
      <CharacterList data={data} />
    </>
  );
}
export default App;
