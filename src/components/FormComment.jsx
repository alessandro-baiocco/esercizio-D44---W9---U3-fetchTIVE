import { Component } from "react";



class FormComment extends Component {

try{
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.idDelLibro}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
        
        }},)
}catch(err){
    console.log(err)
}


    render(){
        return(
            <>
            </>
        )
    }
} 
