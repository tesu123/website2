import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import { app } from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
