import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.css";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://api.itbook.store/1.0/books/${id}`);
        if (!response.ok) throw new Error("Книга не найдена");
        const data = await response.json();
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (error) return <ErrorMessage message={error} />;
  if (loading) return <Loader />;


  if (error)
    return <h2 style={{ color: "red" }}>Ошибка: {error}</h2>;

    return (
      <div className="book-details">
        <h1>{book.title}</h1>
        <img src={book.image} alt={book.title} />
        <p><strong>Автор:</strong> {book.authors}</p>
        <p><strong>Цена:</strong> {book.price}</p>
        <p><strong>Описание:</strong> {book.desc}</p>
    
        {/* Кнопка возврата */}
        <Link to="/books" className="back-button">Назад к списку</Link>
      </div>
    );
};

export default BookDetails;
