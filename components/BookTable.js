import React from "react";
import { BookTableStyled } from "../styles/BookTable.styled";
import { AiOutlineDelete } from "react-icons/ai";
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
  const bookData = props.bookList.map((book) => (
    <tr key={book.id} id={book.id}>
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.status}</td>
      <td>
        <RatingFunction initialValue={book.rating} size={24} readonly={true}/>
      </td>
      <td>
        <AiOutlineDelete onClick={deleteBook} />
      </td>
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
