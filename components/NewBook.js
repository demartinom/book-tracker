import React from "react";
import { BookForm, FormElement } from "../styles/NewBook.styled";

export default function NewBook() {
  return (
    <BookForm action="">
      <FormElement>
        <label htmlFor="name">Book Name</label>
        <input type="text" id="name" />
      </FormElement>
      <FormElement>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" />
      </FormElement>
      <FormElement>
        <label htmlFor="genre">Genre</label>
        <input type="text" id="genre" />
      </FormElement>
      <FormElement>
        <label htmlFor="bookStatus">Book Status</label>
        <select name="Book Status" id="bookStatus">
          <option value="" disabled selected>
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
        <input type="text" id="rating" />
      </FormElement>
      <button>Add Book</button>
    </BookForm>
  );
}
