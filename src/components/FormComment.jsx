import { Component } from "react";

class FormComment extends Component {
  state = {
    comment: "",
    rate: "1",
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ [propertyName]: propertyValue });
  };
  invia = async (e) => {
    e.preventDefault();
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
        <form action="" onSubmit={() => this.setState()}>
          <input
            type="text"
            value={this.state.comment}
            onChange={(event) => {
              this.setState({ comment: this.event.value });
            }}
          />
          <input
            type="number"
            min={1}
            max={5}
            value={this.state.rate}
            onChange={(event) => {
              this.setState({ rate: this.event.value });
            }}
          />
          <button type="submit" onClick={(Event) => this.invia(Event)}></button>
        </form>
      </>
    );
  }
}

export default FormComment;
