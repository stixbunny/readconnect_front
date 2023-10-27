import react, { useEffect, useState } from 'react';
import Link from 'next/link';
import Book from '../components/book';
import fetchBooks from '../utils/fetchBooks';

export default async function Books() {
  const [totalBooks, setTotalBooks] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(null);
  const [hasPrevPage, setHasPrevPage] = useState(null);
  const [endCursor, setEndCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { totalBooks, hasNextPage, hasPrevPage, endCursor } =
        await fetchBooks();
      setTotalBooks(totalBooks);
      setHasNextPage(hasNextPage);
      setHasPrevPage(hasPrevPage);
      setEndCursor(endCursor);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-merriweather font-bold">BOOKS!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {totalBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
