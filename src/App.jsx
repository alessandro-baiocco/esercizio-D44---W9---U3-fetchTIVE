import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyWelcome from "./components/MyWelcome";
import BookList from "./components/BookList";
import libri from "./components/books/scifi.json";

function App() {
  return (
    <>
      <MyNav />
      <MyWelcome title="BENVENUTO!!!" subTitle="ehi tu che stai leggendo questa frase , ciao" />
      <BookList lista={libri} />

      <MyFooter />
    </>
  );
}

export default App;
