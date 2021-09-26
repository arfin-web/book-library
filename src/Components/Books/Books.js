import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [addBook, setAddBook] = useState([]);

    // fetch data from local json file
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    //handle event listener
    const handleBooks = (book) => {
        const newBook = [...addBook, book];
        setAddBook(newBook);
    }

    //calculate total price
    const total = addBook.reduce((previous, book) => previous + book.price, 0)

    return (
        <div className="overflow-hidden">
            <div className="row">
                {/* display books */}
                <div className="col-9 container mt-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            books.map(book => <Book
                                key={book.price}
                                book={book}
                                handleBooks={handleBooks}
                            ></Book>)
                        }
                    </div>
                </div>
                {/* add to cart part */}
                <div className="col-3 mt-5">
                    <div className="card border-0 rounded-3 shadow-lg">
                        <div className="card-header fw-bold h3">
                            Book Added: {addBook.length}
                        </div>
                        <div className="card-header fw-bold h3">
                            Total: $ {total}
                        </div>
                        <ul className="list-group list-group-flush">
                            {
                                addBook.map(book => <li class="list-group-item fs-5">{book.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Books;