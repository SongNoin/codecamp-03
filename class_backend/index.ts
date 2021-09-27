import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.postgres";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    age: Int
  }

  type Return {
    message: String
    number: Int
  }

  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoard: Board
    fetchBoards: [Board]
  }

  type Mutation {
    # 주석입니다 createBoard(writer: String, title: String, age: Int): Return
    createBoard(createBoardInput: CreateBoardInput): Return

    updateBoard: Return
    deleteBoard: Return
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
