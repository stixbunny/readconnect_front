import react from 'react';
import Link from 'next/link';
import Book from '../components/book';
import fetchBooks from '../utils/fetchBooks';
import MoreBooks from '../components/moreBooks';

export default async function Books() {
  const { books, hasNextPage, hasPrevPage, endCursor } = await fetchBooks();

  return (
    <>
      <h1 className="font-merriweather font-bold">BOOKS!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
      <MoreBooks startCursor={endCursor} />
    </>
  );
}
