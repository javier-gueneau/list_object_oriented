import React, {Component} from "react";

class New_component extends Component{
    render(){
        return(
            <div>
                {this.props.some_text}
            </div>
        )
    }
}

export default New_component