import test from 'node:test';
import assert from 'node:assert/strict';

import { createApp } from '../src/index.js';

function request(server, path) {
  const address = server.address();
  const port = typeof address === 'object' && address ? address.port : 3000;
  return fetch(`http://127.0.0.1:${port}${path}`);
}

async function withServer(run) {
  const server = createApp();
  await new Promise((resolve) => server.listen(0, resolve));
  try {
    await run(server);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
}

test('GET / serves the game index page', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/');
    const body = await response.text();
    assert.equal(response.status, 200);
    assert.match(body, /Wolfmoon/i);
    assert.match(body, /<canvas/);
  });
});

test('GET /src/browser.js serves JavaScript', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/src/browser.js');
    const body = await response.text();
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /javascript/);
    assert.match(body, /runDemo/);
  });
});

test('GET /styles/main.css serves the stylesheet', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/styles/main.css');
    const body = await response.text();
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /text\/css/);
    assert.match(body, /canvas/);
  });
});

test('GET /missing-file returns 404', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/missing-file.js');
    assert.equal(response.status, 404);
  });
});

test('GET /assets/h serves the catalog blob', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/assets/h');
    const body = await response.arrayBuffer();
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /octet-stream/);
    assert.equal(body.byteLength, 734);
  });
});

test('GET /assets/ad.png serves a sprite image', async () => {
  await withServer(async (server) => {
    const response = await request(server, '/assets/ad.png');
    const body = await response.arrayBuffer();
    assert.equal(response.status, 200);
    assert.match(response.headers.get('content-type'), /image\/png/);
    assert.ok(body.byteLength > 0);
  });
});
