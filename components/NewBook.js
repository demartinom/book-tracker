import React from "react";
import { BookForm, FormContainer } from "../styles/BookForm.styled";
import dynamic from "next/dynamic";

const RatingFunction = dynamic(
  () => import("react-simple-star-rating").then((mod) => mod.Rating),
  { ssr: false }
);
export default function NewBook(props) {
  const [bookData, setBookData] = React.useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    author: "",
    genre: "",
    status: "default",
    rating: 0,
  });
  function updateBookInfo(event) {
    setBookData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function updateRating(event) {
    setBookData((prevData) => ({ ...prevData, rating: event }));
  }
  function newBook(event) {
    event.preventDefault();
    setBookData((prevData) => ({
      ...prevData,
      id: Math.floor(Math.random() * 1000),
    }));
    props.setBooks((prevArray) => [...prevArray, bookData]);
    event.target.parentNode.reset();
    setBookData({ id: Math.floor(Math.random() * 1000), rating: 0 });
  }
  return (
    <FormContainer>
      <h2>Add a book</h2>
      <BookForm action="">
        <label htmlFor="name" className="name-label">
          Book Name
        </label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="name"
          className="name-input"
        />
        <label htmlFor="author" className="author-label">
          Author
        </label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="author"
          className="author-input"
        />
        <label htmlFor="genre" className="genre-label">
          Genre
        </label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="genre"
          className="genre-input"
        />
        <label htmlFor="bookStatus" className="status-label">
          Book Status
        </label>
        <select
          name="status"
          onChange={updateBookInfo}
          defaultValue={"default"}
          className="status-input"
        >
          <option value="default" disabled name="choose">
            Choose an Option
          </option>
          <option value="Finished">Finished</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
        </select>
        <label htmlFor="rating" className="rating-label">
          Book Rating
        </label>
        <div className="rating-input">
          <RatingFunction
            size={28}
            onClick={updateRating}
            initialValue={bookData.rating}
          />
        </div>
        <button onClick={newBook} className="submit">
          Add Book
        </button>
      </BookForm>
    </FormContainer>
  );
}
