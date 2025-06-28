import { useState } from "react"
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
        async function getData() {
        setIsLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();

        setData(jsonData);
        setIsLoading(false);
      }

      getData(); //call only once when page render
    }, []);


  return (
   <div className='container pt-2'>
    <DataFetching data={data} isLoading={isLoading}/>
   </div>
  )
}

export default App

// DataFetch way is wrong way
function DataFetching({data, isLoading}) {
  // const [data, setData] = useState([])

  //always call when re-render. Re-render is call by setData -> getData()
  // async function getData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const jsonData = await response.json();

  //   setData(jsonData);
  // }

  //getData();

  if(isLoading){
    return <dvi>Loading....</dvi>
  }
  else 
  {
    return (
      <div>
        {data.map((post)=> (
          <div key={post.id}>
            {post.title}
          </div>
        ))}
      </div>
    )
  }
}