import React, { Component } from 'react';

class PasswordShowHide extends Component {
    constructor (props) {
        super(props);
        this.state = {
            hidden: true
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div>
                <input type={this.state.hidden ? 'password' : 'text'} />
                {this.state.hidden ?
                <i className="fa fa-eye" onClick={this.toggleShow} style={{marginLeft: '-30px'}} aria-hidden="true"></i>
                : <i class="fa fa-eye-slash" onClick={this.toggleShow} style={{ marginLeft: '-30px' }} aria-hidden="true"></i>
                }
            </div>
        );
    }
}

export default PasswordShowHide;