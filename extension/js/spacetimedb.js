// SpaceTimeDB SDK for GDevelop
// Created by sixdev – moebius.games@gmail.com

const stdb = {
    socket: null,
    handlers: [],
    connected: false,
  
    Connect: function(url) {
      this.socket = new WebSocket(url);
      this.socket.onopen = () => {
        console.log("[STDB] Connected to", url);
        this.connected = true;
      };
      this.socket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handlers.forEach(cb => cb(data));
        } catch (e) {
          console.error("[STDB] JSON parse error:", e);
        }
      };
      this.socket.onerror = (err) => {
        console.error("[STDB] Socket error:", err);
      };
      this.socket.onclose = () => {
        console.log("[STDB] Connection closed.");
        this.connected = false;
      };
    },
  
    Subscribe: function(table) {
      this._send({ type: "subscribe", table });
    },
  
    Insert: function(table, jsonData) {
      const data = JSON.parse(jsonData);
      this._send({ type: "insert", table, data });
    },
  
    Update: function(table, id, jsonData) {
      const data = JSON.parse(jsonData);
      this._send({ type: "update", table, id, data });
    },
  
    Delete: function(table, id) {
      this._send({ type: "delete", table, id });
    },
  
    OnChange: function(callback) {
      this.handlers.push(callback);
    },
  
    _send: function(msg) {
      if (this.connected) {
        this.socket.send(JSON.stringify(msg));
      } else {
        console.warn("[STDB] Not connected.");
      }
    }
  };
  
  globalThis.stdb = stdb;
  