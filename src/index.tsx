import { serve } from "bun";
import index from "./index.html";

const config = {
  routes: {
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
};

let server;
try {
  server = serve({ port: 3000, ...config });
} catch {
  server = serve({ port: 3001, ...config });
}

console.log(`🚀 Server running at ${server.url}`);
