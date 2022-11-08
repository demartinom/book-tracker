import NewBook from "../components/NewBook";
import React, { useRef } from "react";
import BookTable from "../components/BookTable";
import UpdateBook from "../components/UpdateBook";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  const [currentBook, setCurrentBook] = React.useState({});
  const [isShown, setIsShown] = React.useState(false);
  React.useEffect(() => {
    const savedBookList = JSON.parse(localStorage.getItem("book-tracker-list"));
    if (savedBookList === null) {
      localStorage.setItem("book-tracker-list", JSON.stringify(bookList));
    } else {
      setBookList(savedBookList);
    }
  }, []);
  let firstLoad = useRef(false);
  React.useEffect(() => {
    if (!firstLoad.current) {
      firstLoad.current = true;
    } else {
      localStorage.setItem("book-tracker-list", JSON.stringify(bookList));
    }
  }, [bookList]);
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
