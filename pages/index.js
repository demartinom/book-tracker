import NewBook from "../components/NewBook";
import React from "react";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  return (
    <div>
      <NewBook setBooks={setBookList} />
    </div>
  );
}
