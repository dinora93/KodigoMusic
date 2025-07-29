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
// import { useState, useEffect } from 'react';
// import { FaPlay, FaRegClock } from 'react-icons/fa';

// // Configuración (usa variables de entorno en producción)
// const CLIENT_ID = 'b7b7be5c1119499ba90d405bb3d2ff74';
// const CLIENT_SECRET = '626df6b1d5e9493483d279a177d6232d'; // 🔒 Reemplaza esto

// const getAccessToken = async () => {
//   try {
//     const response = await fetch('https://accounts.spotify.com/api/token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
//       },
//       body: 'grant_type=client_credentials',
//     });
//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(`Error al obtener token: ${errorData.error_description || response.status}`);
//     }
//     const data = await response.json();
//     return data.access_token; // Retorna el token directamente
//   } catch (error) {
//     console.error('Error en getAccessToken:', error);
//     return null; // Retorna null si hay error
//   }
// };

// const SongGrid = () => {
//   const [songs, setSongs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//  useEffect(() => {
//   const fetchData = async () => {
//     console.log('Obteniendo token...');
//     const token = await getAccessToken();
    
//     if (!token) {
//       setError('No se pudo obtener el token de acceso');
//       setLoading(false);
//       return;
//     }

//     try {
//       console.log('Token obtenido:', token);
//       const url = new URL('https://api.spotify.com/v1/recommendations');
//       url.searchParams.append('limit', '12');
//       url.searchParams.append('seed_genres', 'pop,rock');
//       url.searchParams.append('seed_artists', '4NHQUGzhtTLFvgF5SZesLK'); // Bad Bunny como semilla
      
//       console.log('URL de solicitud:', url.toString());
      
//       const response = await fetch(url, {
//         headers: { 
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       console.log('Respuesta recibida, status:', response.status);
      
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Error en la respuesta:', errorText);
//         throw new Error(`Error ${response.status}: ${errorText}`);
//       }

//       const data = await response.json();
//       console.log('Datos recibidos:', data);
      
//       setSongs(data.tracks.map(track => ({
//         id: track.id,
//         title: track.name,
//         artist: track.artists[0].name,
//         duration: `${Math.floor(track.duration_ms / 60000)}:${((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}`,
//         cover: track.album.images[0]?.url,
//       })));
//     } catch (err) {
//       console.error('Error en fetchData:', err);
//       setError(`Error al cargar canciones: ${err.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchData();
// }, []);

//   if (loading) return <div>Cargando...</div>;
//   if (error) return <div className="text-red-500">{error}</div>;

//   return (
//     <div className="song-grid-container">
//       <h2 className="section-title mb-4" style={{ fontFamily: 'Marcellus, serif' }}>
//         Recomendaciones para ti
//       </h2>
//       <div className="song-grid">
//         {songs.map((song) => (
//           <div key={song.id} className="song-card">
//             <div className="card-cover">
//               <img src={song.cover} alt={song.title} />
//               <button className="play-btn btn btn-success rounded-circle">
//                 <FaPlay size={14} />
//               </button>
//             </div>
//             <div className="card-body">
//               <h5 className="song-title">{song.title}</h5>
//               <p className="song-artist">{song.artist}</p>
//               <div className="song-duration">
//                 <FaRegClock className="me-2" />
//                 {song.duration}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SongGrid;