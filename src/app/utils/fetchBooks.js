export default async function fetchBooks() {
  const api = process.env.GRAPHQL_API;
  const response = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `query AllBooks {
        allBooks(first: 20) {
          edges {
              node {
                  publishedDate
                  id
                  title
                  img
                  shortDescription
                  authors {
                      edges {
                          node {
                              id
                              name
                          }
                      }
                  }
                  categories {
                      edges {
                          node {
                              id
                              name
                          }
                      }
                  }
              }
              cursor
          }
          pageInfo {
              hasNextPage
              hasPreviousPage
              endCursor
          }
      }
      }`,
    }),
    cache: 'no-store',
  });
  const json = await response.json();
  const books = json.data.allBooks;
  const hasNextPage = books.pageInfo.hasNextPage;
  const hasPreviousPage = books.pageInfo.hasPreviousPage;
  const endCursor = books.pageInfo.endCursor;
  let totalBooks = [];
  for (const thing of books.edges) {
    const authors = [];
    const categories = [];
    for (const node of thing.node.authors.edges) {
      authors.push(node.node);
    }
    for (const node of thing.node.categories.edges) {
      categories.push(node.node);
    }
    thing.node.authors = authors;
    thing.node.categories = categories;
    totalBooks.push(thing.node);
  }

  return totalBooks, hasNextPage, hasPreviousPage, endCursor;
}
