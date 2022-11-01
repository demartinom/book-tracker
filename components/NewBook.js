import React from "react";
import { BookForm } from "../styles/NewBook.styled";

export default function NewBook() {
  return (
    <BookForm action="">
      <input type="text" placeholder="Book Name" />
      <label>
        Date Started
        <input type="date" name="Date Started" id="Start" />
      </label>
      <label>
        Date Finished <input type="date" name="Date Finished" id="Finish" />
      </label>
      <button>Add Book</button>
    </BookForm>
  );
}
