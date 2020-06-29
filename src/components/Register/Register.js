import React from 'react'

class Register  extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            entries: 0,
            joined:''
         }
    }
    onNameChange = (event) => {
        this.setState({registerName: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({registerEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({registerPassword: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3000/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.registerEmail,
                password: this.state.registerPassword,
                name: this.state.registerName
            })
        })
        .then(response => {
            if(!response.ok){
                console.log('there was an error: ', response)
                throw new Error('problem registering: ' + this.state.registerName)
                
            }else{
                return response.json()
            } 
        })
        // .then(response => response.json())
        .then(user => {
            console.log('my user: ',user, 'this.state.name: ', this.state.registerName);
            if (user.name === this.state.registerName){
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }else{
                alert(user);
            }
        })
        .catch(err => {
            alert(err);
        })
    }




    render(){
        // const {onRouteChange} = this.props;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="userName">Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="userName"  id="userName" 
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email"  id="email" 
                                onChange={this.onEmailChange} />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" name="password"  id="password" 
                                onChange={this.onPasswordChange}
                                />
                            </div>
                           
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" value="Register" 
                                onClick={this.onSubmitRegister}
                                />
                        </div>
                        
                    </div>
                </main>
            </article>
        )
    }

}


export default Register