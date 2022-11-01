import React from "react";
import { BookForm, FormElement } from "../styles/NewBook.styled";
import dynamic from "next/dynamic";

const RatingFunction = dynamic(
  () => import("react-simple-star-rating").then((mod) => mod.Rating),
  { ssr: false }
);
export default function NewBook(props) {
  const [bookData, setBookData] = React.useState({
    id: "",
    name: "",
    author: "",
    genre: "",
    status: "",
    rating: 0,
  });
  function updateBookInfo(event) {
    setBookData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
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
        <input onChange={updateBookInfo} type="text" name="name" />
      </FormElement>
      <FormElement>
        <label htmlFor="author">Author</label>
        <input onChange={updateBookInfo} type="text" name="author" />
      </FormElement>
      <FormElement>
        <label htmlFor="genre">Genre</label>
        <input onChange={updateBookInfo} type="text" name="genre" />
      </FormElement>
      <FormElement>
        <label htmlFor="bookStatus" defaultValue={"Want to Read"}>
          Book Status
        </label>
        <select
          name="status"
          onChange={updateBookInfo}
          defaultValue={"default"}
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
        <RatingFunction />
      </FormElement>
      <button onClick={newBook}>Add Book</button>
    </BookForm>
  );
}
