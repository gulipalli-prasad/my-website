export async function fetchGraphQL(query, variables = {}) {
  const response = await fetch("/content/cq:graphql/my-website/endpoint.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  return response.json();
}
