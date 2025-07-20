import TopNav from './components/TopNav'
import TopSongsPanel from './components/TopSongPanel'
import SongGrid from './components/SongGrid'

import './App.css'


function App() {
   return (
    <div className="app-container">
      <TopNav />
      
      <div className="main-content">
        <TopSongsPanel />
        <SongGrid />
      </div>
      </div>
   
  )
}

export default App