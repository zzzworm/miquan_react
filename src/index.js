import { AppContainer } from 'react-hot-loader'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, routerReducer, routerMiddleware, syncHistoryWithStore, push } from 'react-router-redux'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import App from './App'
import rootReducers from './reducers'

injectTapEventPlugin();

const reducer = combineReducers({
  ...rootReducers,
  routing: routerReducer
})
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)
const history = syncHistoryWithStore(createBrowserHistory(), store)


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider>
          <App history={history} />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(
      reducer
    )
  })
}
