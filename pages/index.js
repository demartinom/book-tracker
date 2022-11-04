import NewBook from "../components/NewBook";
import React from "react";
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  const [currentBook, setCurrentBook] = React.useState(null);
  const [isShown, setIsShown] = React.useState(false);
  return (
    <div>
      <NewBook setBooks={setBookList} />
      <BookTable
        bookList={bookList}
        setBooks={setBookList}
        setCurrentBook={setCurrentBook}
        setIsShown={setIsShown}
      />
      {isShown && (
        <UpdateBook
          hideUpdate={setIsShown}
          currentBook={currentBook}
          setCurrent={setCurrentBook}
          setBooks={setBookList}
          bookList={bookList}
        />
      )}
    </div>
  );
}
