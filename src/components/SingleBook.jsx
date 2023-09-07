import { Component } from "react";
import { Card, Container } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false, commenti: [] };
  risposta = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.idDelLibro}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ commenti: data });
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Card
        style={{ border: this.state.selected ? "2px solid blue" : "2px solid red" }}
        className="col-3"
        onClick={(event) => {
          this.state.selected ? this.setState({ selected: false }) : this.setState({ selected: true });
          this.risposta(event);
        }}
      >
        <img src={this.props.image} className="card-img-top" alt={this.props.title} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
        </div>
        <span>
          <p>{this.props.idDelLibro}</p>
          {this.state.selected &&
            this.state.commenti.length >= 1 &&
            this.state.commenti.map((com) => (
              <>
                {console.log(com)}
                <p style={{ border: "solid black 1px" }}>
                  {com.comment} | {com.rate} stelle / 5
                </p>
              </>
            ))}
        </span>
      </Card>
    );
  }
}

export default SingleBook;
