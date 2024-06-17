import {ListContainer} from './styledComponents'
import './index.css'
import NxtWatchContext from '../../context/NxtWatchContext'
import SavedVideoItem from '../SavedVideoItem'

const SavedVideoBanner = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, savedList} = value
      return (
        <>
          {savedList.length === 0 ? (
            <div className="fail-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
                className="fail-img"
              />
              <div className={isDark ? 'fail-dark' : 'fail-light'}>
                <h1> No Saved Videos found. </h1>
                <p> You can save your videos while watching them. </p>
              </div>
            </div>
          ) : (
            <ListContainer>
              {savedList.map(eachVideo => (
                <SavedVideoItem details={eachVideo} key={eachVideo.id} />
              ))}
            </ListContainer>
          )}
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideoBanner
