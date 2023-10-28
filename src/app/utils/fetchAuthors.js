export default async function fetchAuthors(afterCursor = '', first = 20) {
  if (afterCursor) {
    afterCursor = `, after: "${afterCursor}"`;
  } else {
    afterCursor = '';
  }
  first = `first: "${first}"`;
  const api = process.env.NEXT_PUBLIC_GRAPHQL_API;
  const body = JSON.stringify({
    query: `query AllAuthors {
      allAuthors(${first}${afterCursor}) {
        edges {
            node {
                id
                name
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
  const queryAuthors = json.data.allAuthors;
  const hasNextPage = queryAuthors.pageInfo.hasNextPage;
  const hasPreviousPage = queryAuthors.pageInfo.hasPreviousPage;
  const endCursor = queryAuthors.pageInfo.endCursor;
  let authors = [];
  for (const thing of queryAuthors.edges) {
    authors.push(thing.node);
  }

  return { authors, hasNextPage, hasPreviousPage, endCursor };
}
