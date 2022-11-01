import NewBook from "../components/NewBook";

export default function Home() {
  const [bookList, setBookList] = React.useState([]);
  return (
    <div>
      <NewBook />
    </div>
  );
}
