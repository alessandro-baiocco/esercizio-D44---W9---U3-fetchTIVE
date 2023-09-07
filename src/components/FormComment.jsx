import { Component } from "react";

class FormComment extends Component {
  state = {
    comment: "",
    rate: "",
  };

  invia = async () => {
    try {
      const commento = {
        comment: this.state.comment,
        rate: this.state.rate,
      };
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.idDelLibro}`, {
        method: "POST",
        body: JSON.stringify(commento),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
        },
      });
      if (response.ok) {
        alert("andato a buon fine");
      } else {
        alert("nope");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <>
        <input type="text" />
        <input type="number" min={1} max={5} />
      </>
    );
  }
}

export default FormComment;
