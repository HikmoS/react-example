import React , {Component} from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Header from './Header'
import Home from './Home'
import AddBook from'./AddBook'
import DetailBook from './DetailBook'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Header />
          
          {/*Route Componenti ile tıkladığımız componente gidiryourz.*/}
          <Route exact path="/" component={Home} />
          <Route path="/create" component={AddBook} />
          <Route path="/detail/:id" component = {DetailBook} />
        </div>
      </Router> 
    );
  }
}

// const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>

//     <ul>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:id`} component={Topic} />
//     <Route
//       exact
//       path={match.path}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

export default App;