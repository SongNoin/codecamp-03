import { gql } from "@apollo/client";

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      price
    }
  }
`;
