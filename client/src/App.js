import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Seek from './components/FindBook'
import Books from './components/Books'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResponse: "" };
//   }

//   callAPI() {
//       fetch("http://localhost:9000/testAPI")
//           .then(res => res.text())
//           .then(res => this.setState({ apiResponse: res }));
//   }

//   componentDidMount() {
//       this.callAPI();
//   }

  //render() {

    const App = () => {
      const [books, showBooks] = useState([])

      useEffect(()=>{
        const getBooks = async () => {
          const booksFromServer = await fetchBooks()
          showBooks(booksFromServer)
        }

        getBooks()
      }, [])

      // Fetch Books
      const fetchBooks = async() => {
          const res = await fetch('http://localhost:9000/testAPI')
          const data = await res.json()
  
          return data
        }

      return (
        <div className="App">
          <Header />
          <Seek />
          <Books books={books} key={books.id}/>
        </div>
      );
    }
    
  //}
  
//}

export default App;
