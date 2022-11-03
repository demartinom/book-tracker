import NewBook from "../components/NewBook";
import React from "react";
import BookTable from "../components/BookTable";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  return (
    <div>
      <NewBook setBooks={setBookList} />
      <BookTable bookList={bookList} setBooks={setBookList} />
    </div>
  );
}
