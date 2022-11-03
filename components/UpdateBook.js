import React from "react";
import { BookForm, FormElement } from "../styles/BookForm";
import dynamic from "next/dynamic";

const RatingFunction = dynamic(
  () => import("react-simple-star-rating").then((mod) => mod.Rating),
  { ssr: false }
);
export default function UpdateBook(props) {
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
  }

  return (
    <BookForm action="">
      <FormElement>
        <label htmlFor="name">Book Name</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="name"
          value={props.currentBook[0].name}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="author">Author</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="author"
          value={props.currentBook[0].author}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="genre">Genre</label>
        <input
          onChange={updateBookInfo}
          type="text"
          name="genre"
          value={props.currentBook[0].genre}
        />
      </FormElement>
      <FormElement>
        <label htmlFor="bookStatus">Book Status</label>
        <select
          name="status"
          onChange={updateBookInfo}
          defaultValue={props.currentBook[0].status}
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
          initialValue={props.currentBook[0].rating}
        />
      </FormElement>
      <button onClick={newBook}>Add Book</button>
    </BookForm>
  );
}
