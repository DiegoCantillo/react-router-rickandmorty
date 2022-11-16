import { HashRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Character from './components/Character'
import CharacterPerId from './components/CharacterPerId.jsx'
import Home from './components/Home'

function App() {
 


  return (
      <HashRouter>
        <div className="App">
          <div className="link-home">
            <Link  to={'/'}><i className="fa-solid fa-house"></i></Link>
          </div>
          <h1>RICK AND MORTY</h1>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/character' element={<Character/>}/>
            <Route path='character/:id' element={<CharacterPerId/>}/>
          </Routes>
        </div>
      </HashRouter>
  )
}

export default App
