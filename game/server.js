// ============================================================
//  KNOCKOUT! LAN Server — Peer-to-peer on same network
//  Run: node server.js
//  Share the printed URL with your opponent!
// ============================================================
const http = require('http');
const fs = require('fs');
const path = require('path');
const { WebSocketServer } = require('ws');

const PORT = 3000;
const GAME_DIR = __dirname;

// MIME types for serving static files
const MIME = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.gif': 'image/gif', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
    '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
};

// Simple HTTP server to serve game files
const server = http.createServer((req, res) => {
    let filePath = path.join(GAME_DIR, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404); res.end('Not found');
        } else {
            res.writeHead(200, { 'Content-Type': mime });
            res.end(data);
        }
    });
});

// WebSocket server for real-time game sync
const wss = new WebSocketServer({ server });

let players = []; // max 2 players

wss.on('connection', (ws) => {
    if (players.length >= 2) {
        ws.send(JSON.stringify({ type: 'full' }));
        ws.close();
        return;
    }

    const playerId = players.length; // 0 = host, 1 = guest
    players.push(ws);
    console.log(`Player ${playerId + 1} connected! (${players.length}/2)`);

    ws.send(JSON.stringify({ type: 'welcome', id: playerId }));

    // If both players connected, start the match
    if (players.length === 2) {
        console.log('Both players connected — FIGHT!');
        players.forEach((p, i) => {
            p.send(JSON.stringify({ type: 'start', id: i }));
        });
    }

    ws.on('message', (data) => {
        // Relay message to the other player
        const other = players.find(p => p !== ws && p.readyState === 1);
        if (other) other.send(data.toString());
    });

    ws.on('close', () => {
        console.log(`Player ${playerId + 1} disconnected`);
        players = players.filter(p => p !== ws);
        // Notify remaining player
        players.forEach(p => {
            p.send(JSON.stringify({ type: 'disconnect' }));
        });
    });
});

// Get local network IP
function getLocalIP() {
    const nets = require('os').networkInterfaces();
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal) return net.address;
        }
    }
    return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
    const ip = getLocalIP();
    console.log('');
    console.log('  ╔══════════════════════════════════════════╗');
    console.log('  ║         KNOCKOUT! LAN SERVER             ║');
    console.log('  ╠══════════════════════════════════════════╣');
    console.log(`  ║  Share this URL with your opponent:      ║`);
    console.log(`  ║                                          ║`);
    console.log(`  ║  👉  http://${ip}:${PORT}`.padEnd(45) + '║');
    console.log(`  ║                                          ║`);
    console.log('  ║  Both players open the URL, then click   ║');
    console.log('  ║  "LAN PLAY" on the title screen.         ║');
    console.log('  ╚══════════════════════════════════════════╝');
    console.log('');
});
