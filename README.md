# Minecraft AFK Bot

A sophisticated Minecraft AFK bot engineered to automate server interactions and maintain seamless server uptime on Aternos servers with advanced connection management.

## Key Features

- **Automated Server Interaction**: The bot automatically responds to in-game commands from any player, including following (!follow), detecting and using beds (!sleep), temporarily leaving/rejoining the server (!leave), and farming (!farm, !stay).

- **Advanced Movement**: Complex movement capabilities including sprinting, jumping, swimming while avoiding drowning, and friendly chat interaction.

- **Self-Preservation**: The bot eats when health is low and alerts players when attacked.

- **Farming Functionality**: The bot can craft farming tools, plant seeds and carrots, harvest crops, and store excess in nearby chests.

- **Web Interface**: A responsive web interface provides remote monitoring and control of the bot.

- **Automatic Reconnection**: The bot attempts to reconnect every 30 seconds if the server is offline and joins immediately when available.

## In-Game Commands

| Command | Description |
|---------|-------------|
| `!help` | Shows all available commands and their descriptions |
| `!follow <player>` | Makes the bot follow the specified player |
| `!stopfollow` | Stops the bot from following a player |
| `!sleep` | Makes the bot find and sleep in a nearby bed |
| `!leave` | Makes the bot leave and rejoin the server after a delay |
| `!farm` | Makes the bot start farming nearby crops |
| `!stay` | Makes the bot stop farming and stand still |

## Accessing the Web Interface

### Interface Options

The application offers multiple interface options to suit different devices and connectivity situations:

1. **Smart Landing Page** (`/landing`): Automatically detects your device type and connectivity, then redirects you to the most appropriate interface.
2. **Main Interface** (`/`): Full-featured desktop interface with advanced controls and monitoring.
3. **Mobile Interface** (`/mobile`): Streamlined interface optimized for smartphone and tablet screens.
4. **Simple Interface** (`/simple`): Basic HTML interface with minimal JavaScript for maximum compatibility.
5. **Direct Access** (`/direct`): Comprehensive page with embedded application, status monitoring, and multiple access options.
6. **Troubleshoot** (`/troubleshoot`): Interactive diagnostics to check connectivity and troubleshoot access issues.

### Troubleshooting DNS Resolution Issues

If you encounter a "This site can't be reached" error with a DNS_PROBE_POSSIBLE message when trying to access the web interface, you might be experiencing DNS resolution issues within the Replit environment.

To work around these issues, try accessing these special pages:

1. **Smart Landing Page**: Navigate to `/landing` for automatic device detection and interface selection.
2. **Mobile Interface**: Navigate to `/mobile` for a lightweight interface optimized for phones and tablets.
3. **Simple Interface**: Navigate to `/simple` for a minimal interface with basic functionality.
4. **Direct Access Page**: Navigate to `/direct` for a comprehensive page with multiple access options.
5. **Troubleshoot Page**: Navigate to `/troubleshoot` to diagnose connectivity issues.
6. **Info Page**: Navigate to `/info` to access a special page with application status.
7. **Health Check**: The `/health` endpoint can be used to check if the application is running properly.

Example URLs:
- Smart Landing: `https://your-replit-url.replit.app/landing`
- Mobile Interface: `https://your-replit-url.replit.app/mobile`
- Simple Interface: `https://your-replit-url.replit.app/simple`
- Direct Access: `https://your-replit-url.replit.app/direct`
- Troubleshoot: `https://your-replit-url.replit.app/troubleshoot`
- Info Page: `https://your-replit-url.replit.app/info`
- Health Check: `https://your-replit-url.replit.app/health`

### Alternative Access Methods

If you're using Replit and still can't access the application, try these methods:

1. **Use the Webview Tab**: Click on the "Webview" tab in the Replit interface to access the application directly within the Replit environment.
2. **Direct IP Access**: Try accessing the app using the raw IP address provided in the console logs.
3. **Use HTTP Instead of HTTPS**: If accessing via HTTPS isn't working, try the HTTP version of the URL.
4. **Copy URL to Browser**: Copy the URL from the console logs and paste it directly into your browser.

## Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `npm run dev`.
4. Access the web interface at `http://localhost:5000` or your Replit URL.

## Configuration

The bot can be configured through the web interface or by modifying the default settings in the configuration section. Default server connection details:

- Server: imdurreloaded.aternos.me:40670
- Username: AFK444
- Minecraft Version: 1.21.4

## Technical Overview

- **Backend**: Node.js with Express
- **Frontend**: React with Tailwind CSS
- **Bot Engine**: Mineflayer with pathfinding
- **Communication**: WebSockets for real-time updates

## License

This project is licensed under the MIT License.