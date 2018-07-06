import * as React from 'react';
import { withRouter } from 'react-router-dom'
//
// interface IState {
//     firstname: string;
//     lastname: string
// }

class Home  extends React.Component<any,{}> {

  public navigate = () => {
      this.props.history.push('/login');
  }

  public render() {
    return (
      <div className="wrapper">
         <div className="flex-container">
             <div className="box">
                   Go to <a onClick={this.navigate}>Login</a>
             </div>
         </div>
      </div>
    );
  }
}

export default withRouter(Home);
