import { FaPlay, FaRegClock } from 'react-icons/fa'

const SongGrid = () => {
  const songs = [
    { id: 1, title: "Someone Like You", artist: "Adele", duration: "3:20", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752981876/05c3ea9a4e20de61b8052e7ecf0e11c1_cui55q.jpg" },
    { id: 2, title: "Baile Inolvidable", artist: "Bad Bunny", duration: "3:35", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752981876/0x1900-000000-80-0-0_cd3gar.jpg" },
    { id: 3, title: "We Don´t Stop", artist: "Miley Cyrus", duration: "3:50", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752981876/images_5_bbdacu.jpg" },
    { id: 4, title: "Héroe del Leyenda", artist: "Héroes del silencio", duration: "3:42", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982203/0x1900-000000-80-0-0_1_k68qil.jpg" },
    { id: 5, title: "Thunderstruck", artist: "AC DC", duration: "4:20", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982202/descarga_e6pslt.jpg" },
    { id: 6, title: "In the End", artist: "Linking Park", duration: "6:01", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982202/1900x1900-000000-80-0-0_es9ov3.jpg" },
    { id: 7, title: "Fuera de la ciudad", artist: "Kudai", duration: "3:18", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982201/Sobrevive_ubbeem.jpg" },
    { id: 8, title: "In Your Eyes", artist: "The Weeknd", duration: "3:58", cover: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431" },
    { id: 9, title: "Rival", artist: "Romeo Santos", duration: "3:08", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982423/images_6_gzl2mz.jpg" },
    { id: 10, title: "Los malaventurados no lloran", artist: "Pxndx", duration: "3:34", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982423/images_7_vkxqzx.jpg" },
    { id: 11, title: "Making love Out of Nothing at All", artist: "Air Supply", duration: "3:31", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982423/91GdWbiEaKL_ra13ws.jpg" },
    { id: 12, title: "Ojalá", artist: "José Madero", duration: "3:19", cover: "https://res.cloudinary.com/dmnbaipjy/image/upload/v1752982423/0x1900-000000-80-0-0_2_y7jomi.jpg" }
  ]

  return (
    <div className="song-grid-container">
      <h2 className="section-title mb-4" style={{ fontFamily: 'Marcellus, serif' }}>Recomendaciones para ti</h2>
      
      <div className="song-grid">
        {songs.map(song => (
          <div key={song.id} className="song-card">
            <div className="card-cover">
              <img src={song.cover} alt={song.title} />
              <button className="play-btn btn btn-success rounded-circle">
                <FaPlay size={14} />
              </button>
            </div>
            <div className="card-body">
              <h5 className="song-title">{song.title}</h5>
              <p className="song-artist">{song.artist}</p>
              <div className="song-duration">
                <FaRegClock className="me-2" />
                {song.duration}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SongGrid