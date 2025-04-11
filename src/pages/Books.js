import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Books.css";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ошибка загрузки книг");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="books-container">
      <h1>Список новых книг</h1>
      <div className="books-list">
        {books.map((book) => (
          <div key={book.isbn13} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.subtitle}</p>
            <Link to={`/books/${book.isbn13}`} className="details-link">
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
