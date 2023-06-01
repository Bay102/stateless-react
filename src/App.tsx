import './App.css'
import  Header  from './components/header/Header'
import { daHeaderItems } from './components/data'
import { realMofoGs } from './components/data'
import { charactersClonesAndGoons } from './components/data'
import { TopChar } from './components/topChar/TopChar'
import { CharList } from './components/charList/CharList'


function App(): JSX.Element {
  return (
    <>
    <Header {...daHeaderItems} />
    <TopChar {...realMofoGs} />
    <CharList {...charactersClonesAndGoons} />
    </>
  )
}
export default App
