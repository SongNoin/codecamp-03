import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 1. refreshToken으로 새로운 accessToken 재발급 받기
export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLCLient = new GraphQLClient(
      "https://backend03.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLCLient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.log(error.masage);
  }
}
