import React from "react";
import { BookTableStyled, Actions } from "../styles/BookTable.styled";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import dynamic from "next/dynamic";

const RatingFunction = dynamic(
  () => import("react-simple-star-rating").then((mod) => mod.Rating),
  { ssr: false }
);
export default function BookTable(props) {
  function deleteBook(e) {
    props.setBooks((prevList) =>
      prevList.filter(
        (book) => book.id !== parseInt(e.target.parentNode.parentNode.id)
      )
    );
  }
  function updateBook(e) {
    const bookObject = props.bookList.find(
      (book) => book.id == e.target.parentNode.parentNode.id
    );
    if (bookObject) {
      props.setCurrentBook({
        name: bookObject.name,
        id: bookObject.id,
        author: bookObject.author,
        genre: bookObject.genre,
        status: bookObject.status,
        rating: bookObject.rating,
      });
    }
    props.setIsShown(true);
  }
  const bookData = props.bookList.map((book) => (
    <tr key={book.id} id={book.id}>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.status}</td>
      <td>
        <RatingFunction initialValue={book.rating} size={24} readonly={true} />
      </td>
      <Actions>
        <AiOutlineDelete onClick={deleteBook} />
        <AiOutlineEdit onClick={updateBook} />
      </Actions>
    </tr>
  ));
  function sortName() {
    let sortedBooks = [...props.bookList];
    sortedBooks.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    props.setBooks(sortedBooks);
  }
  function sortAuthor() {
    let sortedBooks = [...props.bookList];
    sortedBooks.sort((a, b) => {
      if (a.author.toLowerCase() < b.author.toLowerCase()) {
        return -1;
      } else if (a.author.toLowerCase() > b.author.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    props.setBooks(sortedBooks);
  }
  function sortGenre() {
    let sortedBooks = [...props.bookList];
    sortedBooks.sort((a, b) => {
      if (a.genre.toLowerCase() < b.genre.toLowerCase()) {
        return -1;
      } else if (a.genre.toLowerCase() > b.genre.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    props.setBooks(sortedBooks);
  }
  function sortStatus() {
    let sortedBooks = [...props.bookList];
    sortedBooks.sort((a, b) => {
      if (a.status.toLowerCase() < b.status.toLowerCase()) {
        return -1;
      } else if (a.status.toLowerCase() > b.status.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    props.setBooks(sortedBooks);
  }
  function sortRating() {
    let sortedBooks = [...props.bookList];
    sortedBooks.sort((a, b) => {
      if (a.rating < b.rating) {
        return 1;
      } else if (a.rating > b.rating) {
        return -1;
      }
      return 0;
    });
    props.setBooks(sortedBooks);
  }
  return (
    <BookTableStyled>
      <thead>
        <tr>
          <th onClick={sortName}>Book Title</th>
          <th onClick={sortAuthor}>Author</th>
          <th onClick={sortGenre}>Genre</th>
          <th onClick={sortStatus}>Status</th>
          <th onClick={sortRating}>Rating</th>
        </tr>
      </thead>
      <tbody>{bookData}</tbody>
    </BookTableStyled>
  );
}
