import NewBook from "../components/NewBook";
import React from "react";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  const bookTable = bookList.map((book) => (
    <div key={book.name}>
      <h1>{book.name}</h1>
      <h2>{book.author}</h2>
      <h3>{book.genre}</h3>
      <h3>{book.status}</h3>
      <h3>{book.rating}</h3>
    </div>
  ));
  return (
    <div>
      <NewBook setBooks={setBookList} />
      {bookTable}
    </div>
  );
}
