import { abc } from "https://deno.sh/abc/mod.ts";

const app = abc();

app
  .get("/home", c => {
    return "How was your day?";
  })
  .start("0.0.0.0:3000");

console.log("start server")