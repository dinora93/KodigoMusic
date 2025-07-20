const SongCard = ({ song, index, setCurrentSong, setIsPlaying }) => {
  const handlePlay = () => {
    setCurrentSong(song)
    setIsPlaying(true)
  }

  return (
    <tr onClick={handlePlay} style={{cursor: 'pointer'}}>
      <td className="text-secondary">{index}</td>
      <td>
        <div className="d-flex align-items-center gap-3">
          <img 
            src={song.cover} 
            alt={song.title} 
            style={{width: '40px', height: '40px', objectFit: 'cover'}}
          />
          <div>
            <div className="fw-bold">{song.title}</div>
            <div className="text-secondary">{song.artist}</div>
          </div>
        </div>
      </td>
      <td className="text-secondary">{song.album}</td>
      <td className="text-secondary text-end">{song.duration}</td>
    </tr>
  )
}

export default SongCard