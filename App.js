import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Image,
  Platform,
  YellowBox,
  LogBox,
} from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from './src/redux/reduxStore';
import Root from './src/container/root/Root';

class App extends Component<{}> {
  renderContent = () => {
    return <Root />;
  };
  render() {
    return (
      <Provider store={configureStore.store}>
        <PersistGate persistor={configureStore.persistor}>
          {this.renderContent}
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
