import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";
import Product from "./Product.postgres";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }

  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }

  type Return {
    _id: String
    message: String
    number: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Product {
    number: Int
    seller: String
    name: String
    detail: String
    price: Int
    _id: String
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]

    fetchProduct(productId: ID): Product
    fetchProducts: [Product]
  }

  type Mutation {
    # 주석입니다 createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return
    updateBoard: Return
    deleteBoard: Return

    createProduct(
      seller: String
      createProductInput: CreateProductInput
    ): Return

    updateProduct(
      productId: ID
      updateProductInput: UpdateProductInput!
    ): Return

    deleteProduct(productId: ID): Return
  }
`;

// 플레이그라운드에서 보이는 내용

const resolvers = {
  Query: {
    fetchBoard: async () => {
      // 데이터베이스에서 해당하는 데이터 꺼내서 브라우저에 던져주기

      const result = await Board.findOne({
        where: { number: 1, deletedAt: null },
      });
      // result?.age;
      // result?.title;
      // result?.writer;

      // return { writer: result?.writer, title: result?.title, age: result?.age };
      return result;
    },

    fetchBoards: async () => {
      const result = await Board.find({ where: { deletedAt: null } });
      return result;
    },

    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({
        where: { _id: args.productId, deletedAt: null },
      });
      return result;
    },

    fetchProducts: async (_: any, args: any) => {
      const result = await Product.find({
        where: { deletedAt: null },
      });
      return result;
    },
  },
  Mutation: {
    createBoard: async (_: any, args: any) => {
      // 데이터베이스 데이터 입력하기

      // const result = await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // }); // ctrl + i 를 누르면 자동으로 값들이 나옴

      const result = await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return { message: "성공했습니다.", number: result.identifiers[0].number };
    },

    updateBoard: async (_: any, args: any) => {
      await Board.update(
        { number: 3 },
        {
          writer: "영희",
        }
      ); // 앞 중괄호는 조건 뒷중괄호는 변경할 값
      return { message: "수정완료!!" };
    },

    deleteBoard: async () => {
      // await Board.delete({ number: 4 });
      await Board.update({ number: 5 }, { deletedAt: new Date() });
      return { message: "삭제완료!" };
    },

    createProduct: async (_: any, args: any) => {
      const result = await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });

      return {
        message: "상품이 등록되었습니다.",
        number: result.identifiers[0].number,
        _id: result.identifiers[0]._id,
      };
    },

    updateProduct: async (_: any, args: any) => {
      const result = await Product.update(
        {
          _id: args.productId,
        },
        {
          ...args.updateProductInput,
        }
      );
      return {
        message: " 상품이 수정되었습니다.",
        _id: args.productId,
      };
    },

    deleteProduct: async (_: any, args: any) => {
      await Product.update({ _id: args.productId }, { deletedAt: new Date() });
      return { message: "상품을 삭제했습니다.", _id: args.productId };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5006,
  host: "34.64.221.225",
  entities: [__dirname + "/*.postgres.ts"],
  logging: true,
  synchronize: true,
}).then(() => {
  // 연결성공시 실행
  console.log("접속완료!!!");
  server.listen({ port: 4000 });
});
// .catch ((error) => {})
