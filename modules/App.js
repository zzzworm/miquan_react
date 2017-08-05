import React from 'react'
import NavLink from './NavLink'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin();

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
