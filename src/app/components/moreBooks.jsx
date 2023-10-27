'use client';
import Book from './book';
import useMoreBooks from '@/app/utils/useMoreBooks';

export default function MoreBooks({ startCursor }) {
  const {
    moreBooks: moreBooks,
    loadMoreBooks: loadMoreBooks,
    areMoreBooksLoading: areMoreBooksLoading,
    hasNextPage: hasNextPage,
  } = useMoreBooks(startCursor);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {moreBooks.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>

      <button
        className="mx-auto p-1 px-3 rounded bg-sky-700 text-white hover:bg-sky-800 disabled:bg-gray-700"
        onClick={loadMoreBooks}
        disabled={areMoreBooksLoading}
      >
        Load More
      </button>
    </>
  );
}
