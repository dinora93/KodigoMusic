import { FaSearch, FaUser, FaRegBell, FaRegUserCircle } from 'react-icons/fa'

const TopNav = () => {
  return (
    <header className="fixed-top bg-black shadow-sm" style={{ height: '70px', zIndex: 1000 }}>
      <div className="container-fluid h-100 px-4">
        <div className="d-flex align-items-center justify-content-between h-100">
          
          
          <div className="d-flex align-items-center" style={{ width: '200px' }}>
            <h1 className="m-0" style={{ 
              fontFamily: 'Marcellus, serif', 
              fontSize: '1.8rem',
              color: '#1DB954',
              letterSpacing: '1px'
            }}>
              KodigoMusic
            </h1>
          </div>
          
          <div className="flex-grow-1 mx-4" style={{ maxWidth: '600px' }}>
            <div className="input-group h-100">
              <span className="input-group-text bg-dark border-0 rounded-end-0 text-white h-100">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control bg-dark text-white border-0 rounded-start-0 h-100"
                placeholder="Buscar canciones, artistas o álbumes"
                style={{ 
                  fontFamily: 'Marcellus, serif',
                  fontSize: '0.95rem'
                }}
              />
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-4" style={{ width: '200px', justifyContent: 'flex-end' }}>
            <button className="btn btn-link text-white p-0">
              <FaRegBell size={20} />
            </button>
            
            <div className="dropdown">
              <button 
                className="btn btn-dark dropdown-toggle d-flex align-items-center gap-2 rounded-pill py-1 px-3"
                data-bs-toggle="dropdown"
                style={{
                  fontFamily: 'Marcellus, serif',
                  border: '1px solid #333'
                }}
              >
                <FaRegUserCircle size={20} />
                <span>Usuario</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary">
                <li><a className="dropdown-item text-white" href="#">Cuenta</a></li>
                <li><a className="dropdown-item text-white" href="#">Perfil</a></li>
                <li><hr className="dropdown-divider border-secondary" /></li>
                <li><a className="dropdown-item text-white" href="#">Cerrar sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopNav