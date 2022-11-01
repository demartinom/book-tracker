import React from "react";
import { BookForm, FormElement } from "../styles/NewBook.styled";

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
    console.log(bookData);
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
        <label htmlFor="bookStatus">Book Status</label>
        <select name="status">
          <option defaultValue={"Choose an Option"} disabled>
            Choose an Option
          </option>
          <option value="finished">Finished</option>
          <option value="reading">Currently Reading</option>
          <option value="want">Want to Read</option>
        </select>
      </FormElement>
      <FormElement>
        {" "}
        <label htmlFor="rating">Book Rating</label>
        {/* Rating Placeholder */}
        <input onChange={updateBookInfo} type="text" name="rating" />
      </FormElement>
      <button onClick={newBook}>Add Book</button>
    </BookForm>
  );
}
