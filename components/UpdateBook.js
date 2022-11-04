import React from "react";
import { BookForm, FormElement } from "../styles/BookForm";
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
  }
  return (
    <BookForm action="">
      <FormElement>
        <label htmlFor="name">Book Name</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="name"
          defaultValue={props.currentBook.name}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="author">Author</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="author"
          defaultValue={props.currentBook.author}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="genre">Genre</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="genre"
          defaultValue={props.currentBook.genre}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="bookStatus">Book Status</label>
        <select
          name="status"
          onChange={updateBookInfo}
          defaultValue={props.currentBook.status}
        >
          <option value="default" disabled name="choose">
            Choose an Option
          </option>
          <option value="Finished">Finished</option>
          <option value="Currently Reading">Currently Reading</option>
          <option value="Want to Read">Want to Read</option>
        </select>
      </FormElement>
      <FormElement>
        <label htmlFor="rating">Book Rating</label>
        <RatingFunction
          size={24}
          onClick={updateRating}
          initialValue={props.currentBook.rating}
        />
      </FormElement>
      <button onClick={update}>Add Book</button>
    </BookForm>
  );
}
