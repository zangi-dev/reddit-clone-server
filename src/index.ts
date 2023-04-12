import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  console.log("__dirname: ", __dirname);
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();

  // const fork = orm.em.fork();
  // ! this is not modifying the database, just an instance of the Post class
  // const post = orm.em.create(Post, { title: "my first post" });

  // ! this is modifying the database
  // await orm.em.persistAndFlush(post);

  // ! native instert need default value for createdAt and updatedAt
  // await fork.nativeInsert(Post, { title: "my second post" });

  // const posts = await fork.find(Post, {});
  console.log("Hello Worlds!");
};

main().catch((err) => {
  console.error(err);
});
