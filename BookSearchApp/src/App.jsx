import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import BookList from './components/BookList';
import fetchBooks from './services/api-client';
import useBooks from './services/useBooks';

function App() {

  const {books, isLoading, setSearchTerm} = useBooks('Python')
  
  // comment code move to useBook [custom hook]
  // useEffect(()=> {
  //   fetchData();

  //   // fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
  //   //   .then(response => {
  //   //     const data = response.json();
  //   //     setBooks(data.items || []);

  //   //     console.log("BOOKData::", books);
  //   //   })
    
  // },[searchTerm]);

  
  // // https://www.googleapis.com/books/v1/volumes?q=javascript
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     // const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
  //     // const data = await res.json();
  //     // setBooks(data.items || []);

  //     const items = await fetchBooks(searchTerm);
  //     setBooks(items);

  //   } catch (error) {
  //     if (error.name !== 'AbortError'){
  //       console.log("Failed to fetch books:", error)
  //     }
  //     setIsLoading(false);
  //   } 
  // };
  // useEffect(()=>{
  //   setIsLoading(false);
  //   console.log("BOOKData::", books)
  // }, [books]);

  function handleSearch(query) {
    setSearchTerm(query);
  }
  
  
  return (
    <>
      <NavBar onSearch={handleSearch} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <BookList books={books} />
      )}
      <Footer />
    </>
  )
}

export default App
