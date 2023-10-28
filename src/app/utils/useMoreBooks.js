import React, { useEffect, useState } from 'react';
import fetchBooks from './fetchBooks';

export default function useMoreBooks(startCursor) {
  const [moreBooks, setMoreBooks] = useState([]);
  const [endCursor, setEndCursor] = useState(startCursor);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [areMoreBooksLoading, setAreMoreBooksLoading] = useState(true);

  useEffect(() => {
    loadMoreBooks();
  }, []);

  async function setBooks() {
    const {
      books: books,
      hasNextPage: nextPage,
      endCursor: cursor,
    } = await fetchBooks(endCursor);
    setMoreBooks(moreBooks.concat(books));
    setHasNextPage(nextPage);
    setEndCursor(cursor);
  }

  async function loadMoreBooks() {
    setAreMoreBooksLoading(true);
    await setBooks();
    setAreMoreBooksLoading(false);
  }

  return { moreBooks, loadMoreBooks, areMoreBooksLoading, hasNextPage };
}
