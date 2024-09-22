export const GET_WINES = `query Query {
  wines {
    appellation
    bestAfter
    bestBefore
    biologic
    color
    domain
    id
    name
    price
    quantity
    region
    year
    country {
      flag
      id
      name
      updatedAt
    }
  }
}
`;
