import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa'
import { BsHeartFill, BsThreeDots } from 'react-icons/bs'

const PlayerControls = ({ currentSong, isPlaying, setIsPlaying, volume, setVolume }) => {
  const [progress, setProgress] = useState(0)

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
  }

  return (
    <div className="bg-dark border-top border-secondary py-2 px-3">
      <div className="row align-items-center">
        {/* Song Info */}
        <div className="col-md-4">
          {currentSong && (
            <div className="d-flex align-items-center gap-3">
              <img 
                src={currentSong.cover} 
                alt={currentSong.title} 
                style={{width: '56px', height: '56px'}}
              />
              <div>
                <div className="fw-bold">{currentSong.title}</div>
                <div className="text-secondary small">{currentSong.artist}</div>
              </div>
              <div className="d-flex gap-2 ms-3">
                <button className="btn btn-link text-white p-0">
                  <BsHeartFill />
                </button>
                <button className="btn btn-link text-white p-0">
                  <BsThreeDots />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Player Controls */}
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-3 mb-2">
              <button className="btn btn-link text-white">
                <FaStepBackward />
              </button>
              <button 
                className="btn btn-light rounded-circle p-2"
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button className="btn btn-link text-white">
                <FaStepForward />
              </button>
            </div>
            <div className="d-flex align-items-center gap-2 w-100">
              <span className="text-secondary small" style={{width: '40px'}}>
                {formatTime((progress / 100) * 210)}
              </span>
              <input
                type="range"
                className="form-range flex-grow-1"
                min="0"
                max="100"
                value={progress}
                onChange={(e) => setProgress(e.target.value)}
              />
              <span className="text-secondary small" style={{width: '40px'}}>
                {formatTime(210)}
              </span>
            </div>
          </div>
        </div>
        
        {/* Volume Control */}
        <div className="col-md-4 d-flex justify-content-end">
          <div className="d-flex align-items-center gap-2" style={{width: '150px'}}>
            <FaVolumeUp className="text-secondary" />
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerControls