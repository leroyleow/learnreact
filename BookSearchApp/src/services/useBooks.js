import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState(initialQuery);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
       

        async function fetchBookQuery(query){
            setIsLoading(true);
            try {
                const items = await fetchBooks(query);
                setBooks(items)
            } catch (error) {
                if(error.name !== "AbortError"){
                    console.error("Failed to fetch books:"+ error.message);
                }
            }
            finally{
                setIsLoading(false)
            }
        }


        if(searchTerm){
            fetchBookQuery(searchTerm);
        }
        
        
    }, [searchTerm]);

    return {books, isLoading, setSearchTerm}
}

export default useBooks;