import { app } from "./app.js";

const PORT = process.env.PORT ?? 60006;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
