import {Component} from 'react'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import NxtWatchContext from '../../context/NxtWatchContext'
import NavBar from '../NavBar'
import FilterGroup from '../FilterGroup'
import './index.css'
import {
  HomeContainer,
  InnerContainer,
  VideoDetailsContainer,
  VideoContainer,
  Description,
  Title,
  ExtraContainer,
  TextContainer,
  Image,
  Content,
  Details,
  Name,
  Like,
  Dislike,
  Subscribers,
  ViewYear,
  View,
  Extra,
  LikeButton,
  DisLikeButton,
  SaveButton,
} from './styledComponents'

const apiStatusConstants = {
  success: 'SUCCESS',
  progress: 'PROGRESS',
  fail: 'FAIL',
  initial: 'INITIAL',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    channel: {},
    isLiked: false,
    isUnliked: false,
    isSaved: false,
    extraSaved: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onSuccess = data => {
    const updatedData = {
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscribersCount: data.channel.subscriber_count,
      },
      description: data.description,
      id: data.id,
      publishedAt: data.published_at,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      videoUrl: data.video_url,
      viewCount: data.view_count,
      isSaved: false,
    }
    this.setState({
      videoDetails: updatedData,
      channel: updatedData.channel,
      isSaved: updatedData.isSaved,
      apiStatus: apiStatusConstants.success,
    })
  }

  onFail = () => {
    this.setState({apiStatus: apiStatusConstants.fail})
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt_token')}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.video_details)
    } else {
      this.onFail()
    }
  }

  onLiked = () => {
    const {isUnliked, isLiked} = this.state
    if (isUnliked) {
      this.setState({isLiked: true, isUnliked: false})
    } else {
      this.setState({isLiked: !isLiked})
    }
  }

  onDisliked = () => {
    const {isLiked, isUnliked} = this.state
    if (isLiked) {
      this.setState({isLiked: false, isUnliked: true})
    } else {
      this.setState({isUnliked: !isUnliked})
    }
  }

  renderSuccess = (isDark, updateSavedList, savedList) => {
    const features = isDark ? 'features-dark' : 'features-light'
    const {videoDetails, isLiked} = this.state
    const {isUnliked, isSaved, extraSaved, channel} = this.state
    const {id, videoUrl, description} = videoDetails
    const {title, viewCount, publishedAt} = videoDetails
    const {name, subscribersCount, profileImageUrl} = channel

    const addSavedList = () => {
      updateSavedList(videoDetails)
    }

    const onSaved = () => {
      this.setState({isSaved: !isSaved}, addSavedList)
    }

    const onExtraSaved = () => {
      this.setState({extraSaved: !extraSaved}, addSavedList)
    }

    const isThere = savedList.some(eachItem => eachItem.id === id)

    return (
      <VideoDetailsContainer>
        <VideoContainer>
          <ReactPlayer width="100%" controls url={videoUrl} />
          <Title isDark={isDark}> {title} </Title>
          <ExtraContainer isDark={isDark}>
            <ViewYear>
              <View> {viewCount} </View>
              <p>.</p>
              <p> {publishedAt} </p>
            </ViewYear>
            <Extra isDark={isDark}>
              <div className={features}>
                <LikeButton
                  isDark={isDark}
                  isLiked={isLiked}
                  onClick={this.onLiked}
                >
                  <AiOutlineLike />
                  <Like isLiked={isLiked}> Like </Like>
                </LikeButton>
              </div>
              <div className={features}>
                <DisLikeButton isUnliked={isUnliked} onClick={this.onDisliked}>
                  <AiOutlineDislike />
                  <Dislike isUnliked={isUnliked}> Dislike </Dislike>
                </DisLikeButton>
              </div>
              <div className={features}>
                {isThere ? (
                  <SaveButton extraSaved={extraSaved} onClick={onExtraSaved}>
                    <BiListPlus />
                    <p>{extraSaved ? 'Saved' : 'Save'}</p>
                  </SaveButton>
                ) : (
                  <SaveButton isSaved={isSaved} onClick={onSaved}>
                    <BiListPlus />
                    <p> {isSaved ? 'Saved' : 'Save'} </p>
                  </SaveButton>
                )}
              </div>
            </Extra>
          </ExtraContainer>
        </VideoContainer>
        <hr />
        <TextContainer>
          <Image src={profileImageUrl} alt="channel logo" />
          <Content>
            <Details>
              <Name isDark={isDark}>{name}</Name>
              <Subscribers isDark={isDark}>
                {subscribersCount} Subscribers
              </Subscribers>
            </Details>
            <Description isDark={isDark}>{description}</Description>
          </Content>
        </TextContainer>
      </VideoDetailsContainer>
    )
  }

  onRetry = () => this.getVideoDetails()

  renderFail = isDark => (
    <div className="fail-con">
      <img
        src={
          isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
        className="fail-img"
      />
      <div className={isDark ? 'fail-dark' : 'fail-light'}>
        <h1> Oops! Something Went Wrong. </h1>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <button type="button" onClick={this.onRetry} className="fail-btn">
          {' '}
          Retry{' '}
        </button>
      </div>
    </div>
  )

  renderProgress = () => (
    <div className="fail-con" data-testid="loader">
      <Loader type="ThreeDots" color="#00306e" height="50" width="50" />
    </div>
  )

  getVideoData = (isDark, updateSavedList, savedList) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess(isDark, savedList, updateSavedList)
      case apiStatusConstants.progress:
        return this.renderProgress()
      case apiStatusConstants.fail:
        return this.renderFail(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedList, updateSavedList} = value

          return (
            <HomeContainer data-testid="videoItemDetails" isDark={isDark}>
              <NavBar />
              <InnerContainer>
                <FilterGroup />
                {this.getVideoData(isDark, savedList, updateSavedList)}
              </InnerContainer>
            </HomeContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoDetails
