import { FaHome, FaSearch, FaMusic } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="col-md-3 col-lg-2 d-md-flex flex-column p-3 bg-black">
      <div className="logo mb-5">
        <h3 className="text-white fw-bold">Musicfy</h3>
      </div>
      <nav className="nav flex-column mb-5">
        <a href="#" className="nav-link text-white d-flex align-items-center gap-3 mb-2">
          <FaHome className="fs-5" />
          <span>Inicio</span>
        </a>
        <a href="#" className="nav-link text-white d-flex align-items-center gap-3 mb-2">
          <FaSearch className="fs-5" />
          <span>Buscar</span>
        </a>
        <a href="#" className="nav-link text-white d-flex align-items-center gap-3">
          <FaMusic className="fs-5" />
          <span>Tu biblioteca</span>
        </a>
      </nav>
      <div className="playlists">
        <h5 className="text-uppercase text-secondary fw-bold mb-3">Playlists</h5>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action bg-transparent text-white border-0 ps-0 py-1">Favoritos</a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent text-white border-0 ps-0 py-1">Descubrimiento semanal</a>
          <a href="#" className="list-group-item list-group-item-action bg-transparent text-white border-0 ps-0 py-1">Mix de éxitos</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar