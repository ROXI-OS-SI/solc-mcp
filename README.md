# 🧠 solc-mcp

`solc-mcp` is the Solidity compiler module of **[ROXI OS](https://github.com/ROXI-OS-SI)**, the Reasoning-Oriented Execution Interface for onchain agents.

It lets an agent compile Solidity source with [solc-js](https://github.com/ethereum/solc-js) and get back the ABI and bytecode, ready to deploy through [`metamask-mcp`](https://github.com/ROXI-OS-SI/metamask-mcp) with your signature.

📖 Docs: [roxi-ten.vercel.app/docs/servers/solc-mcp](https://roxi-ten.vercel.app/docs/servers/solc-mcp)

---

## ✨ Features

- **Compile in conversation** — send Solidity source, receive each contract's ABI, bytecode and compiler version.
- **Useful errors** — compiler errors come back as Solidity's own messages, so the agent can fix the code and try again.
- **Fully local** — compiles with the bundled solc-js; no network access or API keys.
- **Model-agnostic** — works with Claude, GPT, or any client that speaks the Model Context Protocol (MCP).

## 🧱 How it fits

```
Agent → solc-mcp → solc-js → Compiled output → Signer
```

---

## 🚀 Quick start

Requires **Node.js 20+**.

Add it to your MCP client (for example Claude Desktop's `claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "solc": {
      "command": "npx",
      "args": ["-y", "@roxi-os/solc-mcp"]
    }
  }
}
```

### From source

```bash
git clone https://github.com/ROXI-OS-SI/solc-mcp.git
cd solc-mcp
pnpm install
pnpm build
```

Then point your client at the build:

```json
{
  "mcpServers": {
    "solc": {
      "command": "node",
      "args": ["/absolute/path/to/solc-mcp/build/index.js"]
    }
  }
}
```

---

## ⚙️ Tools

| Tool | Description |
| --- | --- |
| `compile-solidity` | Compile a Solidity file. Takes `fileName` (ending in `.sol`) and `content`. |

---

## ⚖️ License

MIT
