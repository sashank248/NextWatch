import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  showBanner: true,
  activeOption: 'HOME',
  savedList: [],
  filterItemList: [],
  changeTheme: () => {},
  onShowBanner: () => {},
  changeActiveOption: () => {},
  updateSavedList: () => {},
})

export default NxtWatchContext
