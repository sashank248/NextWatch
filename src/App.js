import {Component} from 'react'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoDetails from './components/VideoDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import NxtWatchContext from './context/NxtWatchContext'

const filterList = [
  {
    id: 'HOME',
    path: '/',
    displayText: 'Home',
    icon: <IoMdHome />,
  },
  {
    id: 'TRENDING',
    path: '/trending',
    displayText: 'Trending',
    icon: <FaFire />,
  },
  {
    id: 'GAMING',
    path: '/gaming',
    displayText: 'Gaming',
    icon: <SiYoutubegaming />,
  },
  {
    id: 'SAVED VIDEOS',
    path: '/saved-videos',
    displayText: 'Saved Videos',
    icon: <BiListPlus />,
  },
]

// Replace your code here
class App extends Component {
  state = {
    isDark: false,
    showBanner: true,
    activeOption: 'HOME',
    savedList: [],
    filterItemList: filterList,
  }

  onChangeTheme = () => {
    const {isDark} = this.state
    this.setState({isDark: !isDark})
  }

  onShowBanner = () => {
    const {showBanner} = this.state
    this.setState({showBanner: !showBanner})
  }

  onChangeActiveOption = val => {
    this.setState({activeOption: val})
  }

  onUpdateSavedList = data => {
    const {savedList} = this.state
    const isThere = savedList.some(eachItem => eachItem.id === data.id)
    if (isThere) {
      this.setState(prevState => ({
        savedList: prevState.savedList.filter(
          eachItem => eachItem.id !== data.id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        savedList: [...prevState.savedList, data],
      }))
    }
  }

  render() {
    const {isDark, showBanner, activeOption} = this.state
    const {savedList, filterItemList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          showBanner,
          activeOption,
          savedList,
          filterItemList,
          changeTheme: this.onChangeTheme,
          onShowBanner: this.onShowBanner,
          changeActiveOption: this.onChangeActiveOption,
          updateSavedList: this.onUpdateSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
