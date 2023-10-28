export default async function fetchBooks(afterCursor = '', first = 20) {
  if (afterCursor.length > 0) {
    afterCursor = `, after: "${afterCursor}"`;
  }
  if (first > 100) {
    first = '';
  } else {
    first = `first: ${first}`;
  }
  let params = "";
  if(afterCursor != "" || first != 0) {
    params = `(${first}${afterCursor})`
  }
  const api = process.env.NEXT_PUBLIC_GRAPHQL_API;
  const body = JSON.stringify({
    query: `query AllBooks {
      allBooks${params} {
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
  });
  const response = await fetch(api, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
    cache: 'no-store',
  });
  const json = await response.json();
  const queryBooks = json.data.allBooks;
  const hasNextPage = queryBooks.pageInfo.hasNextPage;
  const hasPreviousPage = queryBooks.pageInfo.hasPreviousPage;
  const endCursor = queryBooks.pageInfo.endCursor;
  let books = [];
  for (const thing of queryBooks.edges) {
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
    books.push(thing.node);
  }

  return { books, hasNextPage, hasPreviousPage, endCursor };
}
