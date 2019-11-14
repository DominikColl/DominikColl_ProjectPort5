import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from '../Page/Home';
import MoreInfo from '../Page/MoreInfo';
import AlbumDetail from './AlbumDetail';

class Routes extends Component {
    render() { 
        return (  <div>
            <Switch>
            {/* Will go straight to Home component */}
                <Route exact path= '/' component={Home}/>
                <Route exact path='/Home' component={Home}/>
                <Route exact path='/MoreInfo' component={MoreInfo}/>
                <Route exact path='/album/:albumId' component={AlbumDetail} />
            </Switch>
            </div> );
    }
}
export default Routes;