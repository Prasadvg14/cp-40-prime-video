// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {item} = props
  console.log(item)
  return (
    <Popup
      model
      trigger={
        <img className="image" src={item.thumbnailUrl} alt="thumbnail" />
      }
      position="bottom-center"
    >
      {close => (
        <div className="pop">
          <button
            data-testid="closeButton"
            className="btn"
            type="button"
            onClick={() => close()}
          >
            .<IoMdClose />
          </button>
          <div>
            <ReactPlayer
              width="30vw"
              height="30vh"
              controls
              url={item.videoUrl}
            />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
