
import { Response } from "next/dist/compiled/@edge-runtime/primitives";

/**
Hook permettant d'effectuer des requêtes GraphQL
@param query Le nom de la requête
@param variables Les variables pour la requête (optionnel)
 */
export const graphqlFetch = async (
  query: string,
  variables?: Record<string, any>
): Promise<any> => {
  const url: string | undefined = process.env.NEXT_PUBLIC_GRAPHQL_URL;

  if (!url) {
    throw new Error(
      "GraphQL endpoint URL is not defined in environment variables."
    );
  }

  const response: Response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const result = await response.json();

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data;
};
