import { registerRootComponent } from 'expo';
import { Component } from 'react';

import App from './src/App';
import Intro from './src/pages/Intro';
import Splasher from './src/pages/Splash';

export default class Main extends Component{
    constructor(){
        super();
        this.state = {currentScreen : 'splash'};
        console.log('Done 3 second')
        setTimeout(() => {
            console.log('Done 3 second')
            this.setState({currentScreen: 'intro'})
        }, 3000)
    }

    render(){
        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'splash' ? <Splasher/> : <Intro/> 
        return mainScreen
    }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
