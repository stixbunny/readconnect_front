// import fetchBooks from '@/app/utils/fetchBooks';

// export async function generateStaticParams() {
//   const { books: books } = await fetchBooks("", 500);

//   return books.map((book) => ({
//     id: book.id,
//   }));
// }

export default function Book({ params }) {
  const { book } = params;
  return <div>This is a book</div>;
}
