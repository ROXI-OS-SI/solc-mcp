import { FastMCP } from "fastmcp";
import { registerCompileSolidityTools } from "./tools/index.js";

const server = new FastMCP({
  name: "ROXI solc-mcp",
  version: "1.0.0",
});

registerCompileSolidityTools(server);


async function main() {
  try {
    await server.start({
      transportType: "stdio",
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

main();
