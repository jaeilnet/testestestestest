import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/scops", (req, res) => {
    return req(
      ctx.json([
        { name: "Chocholate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
];
