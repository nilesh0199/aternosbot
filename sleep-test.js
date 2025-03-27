// Test script to simulate a chat message with bot commands
import WebSocket from 'ws';

// Create WebSocket connection
const ws = new WebSocket('ws://localhost:5000/ws');

ws.on('open', function open() {
  console.log('Connected to WebSocket server');
  
  // Read command line arguments to determine which test to run
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  
  switch (command) {
    case 'sleep':
      testSleep();
      break;
    case 'follow':
      testFollow();
      break;
    case 'farm':
      testFarm();
      break;
    case 'leave':
      testLeave();
      break;
    case 'stay':
      testStay();
      break;
    case 'drop':
      testDrop();
      break;
    case 'help':
    default:
      console.log('Usage: node sleep-test.js [command]');
      console.log('Available commands: sleep, follow, farm, leave, stay, drop');
      ws.close();
      break;
  }
});

function testSleep() {
  console.log('Testing !sleep command...');
  
  // First simulate a manual sleep command from the client interface
  console.log('Sending sleep command via UI...');
  ws.send(JSON.stringify({
    type: 'sleep',
    data: {}
  }));
  
  // Then simulate a chat message with !sleep command
  setTimeout(() => {
    console.log('Simulating chat message with !sleep command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!sleep'
      }
    }));
  }, 2000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 4000);
}

function testFollow() {
  console.log('Testing !follow command...');
  
  // Then simulate a chat message with !follow command
  setTimeout(() => {
    console.log('Simulating chat message with !follow command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!follow TestPlayer'
      }
    }));
  }, 1000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 3000);
}

function testFarm() {
  console.log('Testing !farm command...');
  
  // Simulate a chat message with !farm command
  setTimeout(() => {
    console.log('Simulating chat message with !farm command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!farm carrot'
      }
    }));
  }, 1000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 3000);
}

function testLeave() {
  console.log('Testing !leave command...');
  
  // Simulate a chat message with !leave command
  setTimeout(() => {
    console.log('Simulating chat message with !leave command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!leave'
      }
    }));
  }, 1000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 3000);
}

function testStay() {
  console.log('Testing !stay command...');
  
  // Simulate a chat message with !stay command
  setTimeout(() => {
    console.log('Simulating chat message with !stay command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!stay'
      }
    }));
  }, 1000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 3000);
}

function testDrop() {
  console.log('Testing !drop command...');
  
  // Simulate a chat message with !drop command
  setTimeout(() => {
    console.log('Simulating chat message with !drop command...');
    ws.send(JSON.stringify({
      type: 'simulated_chat',
      data: {
        username: 'TestPlayer',
        message: '!drop dirt'
      }
    }));
  }, 1000);
  
  // Close the connection after some time
  setTimeout(() => {
    console.log('Test complete, closing connection');
    ws.close();
  }, 3000);
}

ws.on('message', function incoming(data) {
  const message = JSON.parse(data);
  console.log('Received:', message);
});

ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});

ws.on('close', function close() {
  console.log('WebSocket connection closed');
});