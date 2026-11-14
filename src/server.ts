import { server } from "./app";

const port = Number(process.env.PORT ?? 3000);
server.listen(port, () => console.log(`listening on ${port}`));