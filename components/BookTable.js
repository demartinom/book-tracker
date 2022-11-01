import React from "react";
import { BookTableStyled } from "../styles/BookTable.styled";
import {AiOutlineDelete} from 'react-icons/ai'

export default function BookTable(props) {
  const bookData = props.bookList.map((book) => (
    <tr key={book.id}>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.status}</td>
      <td>{book.rating}</td>
      <td><AiOutlineDelete/></td>
    </tr>
  ));
  return (
    <BookTableStyled>
      <thead>
        <tr>
          <th>Book Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Status</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>{bookData}</tbody>
      
    </BookTableStyled>
  );
}
