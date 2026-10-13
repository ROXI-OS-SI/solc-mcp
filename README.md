# 🧠 solc-mcp

[![npm](https://img.shields.io/npm/v/@roxi-os/solc-mcp?label=npm&color=c5f24a)](https://www.npmjs.com/package/@roxi-os/solc-mcp)
[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![docs](https://img.shields.io/badge/docs-roxi--os.si-black)](https://roxi-os.si/docs/servers/solc-mcp)

**The compiler module of [ROXI OS](https://roxi-os.si)**, the Reasoning-Oriented Execution Interface.

`solc-mcp` lets an AI agent compile Solidity with [solc-js](https://github.com/ethereum/solc-js) and get back each contract's ABI and bytecode, ready to deploy through [`metamask-mcp`](https://github.com/ROXI-OS-SI/metamask-mcp) with your signature.

---

## ✨ Features

- **Compile in conversation:** send Solidity source, get ABI, bytecode and compiler version for every contract in the file.
- **Useful errors:** compile failures return Solidity's own messages, so the agent can fix the code and retry.
- **Fully local:** compiles on your machine; source code is never uploaded.
- **No setup:** no API keys, no wallet.
- **Model-agnostic:** works with Claude, GPT, or any client that supports MCP servers over stdio.

---

## 🚀 Quick start

Requires **Node.js 20+** and an MCP client such as Claude Desktop.

Add the server to your client's config (`claude_desktop_config.json`):

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

Restart the client, then try:

```
Write and compile a simple Greeter contract.
Compile this contract and fix any errors: …
```

To deploy what you compile, add [`metamask-mcp`](https://github.com/ROXI-OS-SI/metamask-mcp) too. Walkthrough: [Compile and deploy](https://roxi-os.si/docs/guides/deploy-contract).

---

## ⚙️ Tools

| Tool | Inputs | Description |
| --- | --- | --- |
| `compile-solidity` | `fileName` (ends in `.sol`), `content` | Compile one Solidity file and return every contract in it. |

**Output**

```json
[
  {
    "contractName": "Greeter",
    "abi": [ … ],
    "bytecode": "6080604052…",
    "compilerVersion": "0.8.x+commit…"
  }
]
```

On failure, the tool returns the compiler's errors, for example:

```
ParserError: Expected type name --> Bad.sol:1:52
```

---

## 📝 Good to know

- Compiles **one file** at a time. Imports of other files (such as OpenZeppelin) aren't resolved, so inline what the contract needs.
- Uses the **bundled solc-js** version, so the contract's `pragma` must allow it (`^0.8.0` works).
- Deploy the output with `deploy-contract` on `metamask-mcp`; the new address is in the receipt's `contractAddress`.

Reference: [solc-mcp docs](https://roxi-os.si/docs/servers/solc-mcp).

---

## 🛠️ Build from source

```bash
git clone https://github.com/ROXI-OS-SI/solc-mcp.git
cd solc-mcp
pnpm install
pnpm build        # on Windows: npx tsc
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

## 🧩 Part of ROXI OS

| Server | Purpose |
| --- | --- |
| [metamask-mcp](https://github.com/ROXI-OS-SI/metamask-mcp) | Wallet connection and signing |
| [chainlist-mcp](https://github.com/ROXI-OS-SI/chainlist-mcp) | Chain metadata and RPC endpoints |
| [erc20-mcp](https://github.com/ROXI-OS-SI/erc20-mcp) | ERC-20 transfers, approvals and reads |
| **solc-mcp** | Solidity compilation |

📖 [Documentation](https://roxi-os.si/docs) · 📦 [npm](https://www.npmjs.com/org/roxi-os)

## ⚖️ License

MIT
