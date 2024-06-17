import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import './index.css'

const FilterItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {activeOption, changeActiveOption, isDark} = value
      const {details} = props
      const {id, path, displayText, icon} = details

      const LinkEl = isDark ? 'link-el-dark' : 'link-el-light'

      const active = isDark ? 'dark-active' : 'light-active'

      const incativeIcon = isDark ? 'dark-inactive-icon' : 'light-inactive-icon'

      const onChangeActiveOption = () => {
        changeActiveOption(id)
      }

      return (
        <Link to={path} className={LinkEl}>
          <li
            onClick={onChangeActiveOption}
            className={activeOption === id ? active : 'inactive'}
          >
            <p className={activeOption === id ? 'active-icon' : incativeIcon}>
              {icon}
            </p>
            <p> {displayText} </p>
          </li>
        </Link>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default FilterItem
