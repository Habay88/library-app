import React from "react";
import { useState, useEffect } from "react";
import SpinnerLoading from "../utils/SpinnerLoading";
import BookModel from "../models/BookModel";
import SearchBook from "./component/SearchBook";

const SearchBooksPage = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchBooks = async () => {
      const baseUrl: string = "http://localhost:1988/api/books";
      const url: string = `${baseUrl}?page=0&size=5`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong !!");
      }
      const responseJson = await response.json();
      const responseData = responseJson._embedded.books;
      const loadedBooks: BookModel[] = [];
      for (const key in responseData) {
        loadedBooks.push({
          id: responseData[key].id,
          title: responseData[key].title,
          author: responseData[key].author,
          description: responseData[key].description,
          copies: responseData[key].copies,
          copiesAvailable: responseData[key].copies,
          category: responseData[key].category,
          img: responseData[key].img,
        });
      }
      setBooks(loadedBooks);
      setIsLoading(false);
    };
    fetchBooks().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <div className="container m-5">
        <SpinnerLoading />
      </div>
    );
  }
  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return <div>
    <div className="container">
      <div>
        <div className="row mt-5">
        <div className="col-6">
          <div className="d-flex">
            <input className='form-control me-2' type="search" placeholder="Search" aria-labelledby="Search"/>
            <button className="btn btn-outline-success">
                Search
            </button>
            
          </div>

        </div>
        <div className='col-4'>
            <div className="dropdown">
            <button className='btn btn-secondary dropdown-toggle' type='button' id="dropdownMenuButton1" data-bs-toggle='dropdown' aria-expanded='false' >
             Category
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                    All
                </a>
                <a className="dropdown-item" href="#">
                    FrontEnd
                </a>
                <a className="dropdown-item" href="#">
                    Backend
                </a>
                <a className="dropdown-item" href="#">
                    Devops
                </a>
                <a className="dropdown-item" href="#">
                    FullStack
                </a>

              </li>

            </ul>
            </div>
        </div>
        </div>
        <div className="mt-3">
        <h5>Number of results: (22)</h5>
        </div>
        <p>
          1 0f 5 of 22 items:
        </p>
        {books.map(book =>(
          <SearchBook book={book} key={book.id} />
        ))}
      </div>

    </div>

          </div>;
};

export default SearchBooksPage;