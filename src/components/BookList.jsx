import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, ListGroup, Row, Card, Offcanvas } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "",
  };
  // risposta = async () => {
  //   try {
  //     const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YmEyYzhkM2Q0OTAwMTRjZmQ3ZDUiLCJpYXQiOjE2OTQwODc3MjUsImV4cCI6MTY5NTI5NzMyNX0.nEiDclrZwDUhekBj6bTeWNg02Po6mpUkGwWJAlqgIBE",
  //       },
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       this.setState({ commenti: data });
  //       console.log(typeof this.state.commenti[0].comment);
  //     }
  //   } catch (err) {
  //     {
  //       console.log("err");
  //     }
  //   }
  // };
  // componentDidMount = () => {
  //   this.risposta();
  // };

  filtra = (query) => {
    this.setState({ search: query });
  };
  render() {
    return (
      <Container>
        <input type="text" onChange={(Event) => this.filtra(Event.target.value)} />
        <Row className="lista">
          {this.props.lista
            .filter((book) => book.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book, index) => (
              <SingleBook key={`book-${index}`} title={book.title} image={book.img} idDelLibro={book.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
