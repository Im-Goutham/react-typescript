import * as React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//
// interface IState {
//     firstname: string;
//     lastname: string
// }

class Login extends React.Component<any,any> {

  constructor (props: any) {
     super(props);
     this.state = {
          lastname: "",
          firstname: ""
     }
  }



  public componentDidMount (){
    const self = this;
    setTimeout(() => {   self.handleClick(); }, 3000);
  }

  public handleClick = () => {
        this.setState({firstname: 'Goutham'});
  }

  public handleSubmit = (e: any) => {
      e.preventDefault();
      alert('submit clicked')
      this.props.signIn(this.state);
  }

  public handleInput = (e: any) => {
      // console.log(e.target.name+" : "+e.target.value);
      // const name: IState = e.target.name;
      this.setState({[e.target.name]: e.target.value});
  }

  public render() {
    return (
      <div className="wrapper">
         <div className="flex-container">
             <div className="box">
                  <form onSubmit={this.handleSubmit}>
                    First name: <input type="text" name="firstname" value={this.state.firstname} onChange={this.handleInput} /><br />
                    Last name: <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleInput}  /><br />
                    <input type="submit" defaultValue="Submit" onClick={this.handleSubmit} />
                  </form>
             </div>
         </div>
      </div>
    );
  }
}

export default connect(null, actions)(withRouter(Login));
