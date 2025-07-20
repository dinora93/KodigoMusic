import { FaPlay, FaMusic } from 'react-icons/fa'

const TopSongsPanel = () => {
  const topSongs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", plays: "1.2B" },
    { id: 2, title: "Save Your Tears", artist: "The Weeknd", plays: "980M" },
    { id: 3, title: "Stay", artist: "The Kid LAROI, Justin Bieber", plays: "1.1B" },
    { id: 4, title: "Levitating", artist: "Dua Lipa", plays: "1.3B" },
    { id: 5, title: "Good 4 U", artist: "Olivia Rodrigo", plays: "890M" },
    { id: 6, title: "Montero", artist: "Lil Nas X", plays: "950M" },
    { id: 7, title: "Peaches", artist: "Justin Bieber", plays: "850M" },
    { id: 8, title: "Kiss Me More", artist: "Doja Cat ft. SZA", plays: "920M" },
    { id: 9, title: "Butter", artist: "BTS", plays: "1.05B" },
    { id: 10, title: "Deja Vu", artist: "Olivia Rodrigo", plays: "780M" }
  ]

  return (
    <div className="top-songs-panel">
      <div className="panel-header d-flex align-items-center gap-3 mb-4">
        <FaMusic size={24} className="text-success" />
        <h3 className="m-0" style={{ fontFamily: 'Marcellus, serif' }}>Top 10 Global</h3>
      </div>
      
      <div className="songs-list">
        {topSongs.map((song, index) => (
          <div key={song.id} className="song-item d-flex align-items-center justify-content-between p-2 mb-2 rounded">
            <div className="d-flex align-items-center gap-3">
              <span className="song-rank">{index + 1}</span>
              <div>
                <div className="song-title">{song.title}</div>
                <div className="song-artist">{song.artist}</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <span className="song-plays">{song.plays}</span>
              <button className="play-btn btn btn-sm btn-success rounded-circle p-2">
                <FaPlay size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSongsPanel