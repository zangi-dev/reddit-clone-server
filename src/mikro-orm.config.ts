import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    // pattern: /^[\w-]+\d+\.[tj]s$/,
    glob: "/^[w-]+d+.[tj]s$/",
  },
  entities: [Post],
  dbName: "reddit-clone",
  type: "postgresql",
  user: "postgres",
  password: "mysecretpassword",
  debug: !__prod__,
} satisfies Parameters<typeof MikroORM.init>[0];
