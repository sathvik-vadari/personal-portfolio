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

function startServer() {
  for (const port of [3000, 3001, 3002, 3003]) {
    try {
      return serve({ port, ...config });
    } catch (err) {
      if ((err as { code?: string }).code !== "EADDRINUSE") throw err;
    }
  }
  // All preferred ports busy — let the OS assign any free port.
  return serve({ port: 0, ...config });
}

const server = startServer();

console.log(`🚀 Server running at ${server.url}`);
