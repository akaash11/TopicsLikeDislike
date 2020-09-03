import React,{ Component } from "react";
import Form from "../../components/Form/Form"
import Topics from "../../components/Topics/Topics"
export default class MainMenu extends Component{
    render(){
        return(
            <div>
                <Form />
                <Topics />
            </div>
        )
    }
}