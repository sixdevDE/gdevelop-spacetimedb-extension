SpaceTimeDB Extension for GDevelop

Author: sixdevEmail: moebius.games@gmail.comLicense: MIT

✨ Overview

This extension lets you connect your GDevelop game to a SpaceTimeDB server using WebSocket. It includes realtime table syncing, event listening, insert/update/delete operations, and automatic reconnects.

Everything is contained in a single .json file you can import into GDevelop as a ready-to-use extension.

⚙ Features

Connect to a SpaceTimeDB server

Insert / update / delete table rows

Subscribe to tables for realtime updates

React to OnChange / OnError / OnOpen / OnClose events

Read last data, last error, table cache

Reconnect, ping/heartbeat, connection status tracking

Purely native: no external JS files needed

📁 Installation

Download or copy the spacetimedb-extension.json file.

Open your GDevelop project.

Go to Project Manager → Extensions.

Click "Import extension" and choose the JSON file.

Done!

📃 Usage

✉ Connect to your server

Use the Connect action with your WebSocket URL, e.g.:
ws://localhost:3000 or wss://yourserver.com.

✏️ Insert / Update / Delete

All data is handled as JSON strings.

{"playerId": "abc", "x": 10, "y": 20}

Use the actions:

Insert to table

Update row in table

Delete row in table

📊 Subscribe to a table

To receive live updates:

Use Subscribe to table with the name (e.g. players)

🔊 Event conditions:

OnChange – fired when any data changes

OnOpen – fired when WebSocket connects

OnClose – fired when WebSocket disconnects

OnError – fired on WebSocket or JSON error

Use these to trigger in-game events.

🤔 Expressions (read values):

LastData() – last full JSON message

TableData("players") – latest cached rows for a table

LastError() – last error string

ConnectionStatus() – string: "connected", "closed", etc.

TimeSinceLastMessage() – milliseconds since last message

🛡️ Security note

No authentication is included (yet). For production use, connect via HTTPS/WSS and secure your SpaceTimeDB reducers.

🎉 Credits

Created by sixdev
For help or to contribute, visit: github.com/sixdev/spacetimedb-gdevelop-sdk