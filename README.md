🚀 SpaceTimeDB Extension for GDevelop
Author: sixdev
Email: moebius.games@gmail.com
License: MIT

✨ Overview
This GDevelop extension enables full real-time multiplayer and persistent game state using a SpaceTimeDB server via WebSocket.

🔄 Sync live data between players

🧠 Insert / update / delete entries in tables

🎯 React to server changes via events

⚡ Built-in heartbeat & error handling

📦 All logic is inside a single .json file – no external JS required

⚙ Features
✅ Connect to SpaceTimeDB servers (ws/wss)
✅ Insert, update, delete JSON rows in tables
✅ Subscribe to tables and receive realtime updates
✅ Trigger events: OnChange, OnOpen, OnClose, OnError
✅ Expression access: last data, cached tables, error, status
✅ Automatic heartbeat (ping), reconnect, and timing helpers
✅ 100% native and portable – just import the .json into GDevelop

📁 Installation
Download or copy the spacetimedb-extension.json file

Open your GDevelop project

Go to Project Manager → Extensions

Click Import extension and select the file

✅ Done!

📃 Usage
✉️ Connect to your SpaceTimeDB server
Use the Connect action with your WebSocket server URL:

arduino
Kopieren
ws://localhost:3000  
wss://yourserver.com
✏️ Insert / Update / Delete rows
All data is handled via JSON strings. Example:

json
Kopieren
{"playerId": "abc", "x": 10, "y": 20}
Available actions:

Insert into table

Update table entry with ID

Delete entry from table

📡 Subscribe to a table
Use:

pgsql
Kopieren
Subscribe to table "players"
This enables automatic live updates from that table.

🔊 Event Conditions
These trigger GDevelop events when something happens:

Event	Description
OnChange	Any message received (parsed & cached)
OnOpen	WebSocket connection established
OnClose	WebSocket connection closed
OnError	JSON error or socket error occurred

📊 Expressions
Expression	Returns
LastData()	Full last JSON message (string)
TableData("players")	Cached content of a table (JSON string)
LastError()	Last error string
ConnectionStatus()	"connected", "connecting", etc.
TimeSinceLastMessage()	Milliseconds since last server reply

🛡️ Security Notes
This extension does not include login/authentication yet.
For production use:

Use wss:// and HTTPS

Implement authentication and role validation in your SpaceTimeDB reducers

Sanitize incoming JSON server-side

🎉 Credits
Created by sixdev
GitHub: sixdev/spacetimedb-gdevelop-sdk
Contact: moebius.games@gmail.com