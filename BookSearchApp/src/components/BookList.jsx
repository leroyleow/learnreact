import BookCard from "./BookCard";

function BookList({books}) {

    console.log("BookList::", books);
    return(
        <>
        <div className="row">
            <h2>Book List</h2>
        </div>
        <div className="row">
            {/* {books.map(book => <p key={book.id}>{book.volumeInfo.title}</p>)} */}
            {books.map(book => 
                <BookCard key={book.id} book={book} />
            )}
        </div>
        </>
    )
}

export default BookList;