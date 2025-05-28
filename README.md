# GDevelop SpaceTimeDB Extension

This is a GDevelop extension that enables easy integration with [SpaceTimeDB](https://spacetimedb.com) to build realtime multiplayer games with minimal effort.

## ✨ Features

- Easy connection to your SpaceTimeDB server
- Insert, update, delete rows in your multiplayer tables
- Real-time subscriptions
- Simple API compatible with GDevelop events

## 📦 Installation

1. Download the `extension/` folder from this repo.
2. In GDevelop:
   - Open your project
   - Go to `Extensions` → `Import Extension`
   - Select the `spacetimedb-extension.json` file

## 🚀 Basic Usage

```javascript
// Connect to SpaceTimeDB
stdb.Connect("wss://your-server.com");

// Subscribe to the "players" table
stdb.Subscribe("players");

// Insert your player data
stdb.Insert("players", JSON.stringify({
  id: "player_1",
  x: 120,
  y: 200
}));

// Listen to changes
stdb.OnChange((data) => {
  console.log("Change from DB:", data);
});

---

📫 Contact
Author: sixdev
Email: moebius.games@gmail.com

---

---

## 📄 `LICENSE`

```txt
MIT License


MIT License

Copyright (c) 2025 sixdev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
