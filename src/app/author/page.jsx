// import fetchAuthors from '@/app/utils/fetchAuthors';

// export async function generateStaticParams() {
//   const { authors: authors } = await fetchAuthors("", 500);

//   return authors.map((author) => ({
//     id: author.id,
//   }));
// }

export default function Book({ params }) {
  const { book } = params;
  return <div>This is a book</div>;
}