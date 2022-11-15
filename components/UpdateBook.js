import React from "react";
import { BookForm } from "../styles/BookForm.styled";
import { UpdateStyled } from "../styles/UpdateBook.styled";
import dynamic from "next/dynamic";

const RatingFunction = dynamic(
  () => import("react-simple-star-rating").then((mod) => mod.Rating),
  { ssr: false }
);
export default function UpdateBook(props) {
  function updateBookInfo(event) {
    props.setCurrent((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function updateRating(event) {
    props.setCurrent((prevData) => ({ ...prevData, rating: event }));
  }
  function update(event) {
    event.preventDefault();
    let newArray = props.bookList.map((book) => {
      if (book.id === props.currentBook.id) {
        return props.currentBook;
      }
      return book;
    });
    props.setBooks(newArray);
    props.hideUpdate(false);
  }
  return (
    <UpdateStyled>
      <BookForm action="">
        <label htmlFor="name" className="name-label">
          Book Name
        </label>
        <label htmlFor="author" className="author-label">
          Author
        </label>
        <label htmlFor="genre" className="genre-label">
          Genre
        </label>
        <label htmlFor="bookStatus" className="status-label">
          Book Status
        </label>
        <label htmlFor="rating" className="rating-label">
          Book Rating
        </label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="name"
          defaultValue={props.currentBook.name}
          className="name-input"
        />
        <input
          onChange={updateBookInfo}
          type="text"
          name="author"
          defaultValue={props.currentBook.author}
          className="author-input"
        />
        <input
          onChange={updateBookInfo}
          type="text"
          name="genre"
          defaultValue={props.currentBook.genre}
          className="genre-input"
        />
        <select
          name="status"
          onChange={updateBookInfo}
          defaultValue={props.currentBook.status}
          className="status-input"
        >
          <option value="default" disabled name="choose">
            Choose an Option
          </option>
          <option value="Finished">Finished</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
        </select>
        <div className="rating-input">
          <RatingFunction
            size={28}
            onClick={updateRating}
            initialValue={props.currentBook.rating}
            emptyColor={"#676767"}
          />
        </div>
        <button onClick={update} className="submit">
          Update Book
        </button>
      </BookForm>
    </UpdateStyled>
  );
}
