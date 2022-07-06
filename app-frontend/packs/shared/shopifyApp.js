const shopifyAppConfig = document.getElementById('shopify-app-init').dataset;

import createApp from '@shopify/app-bridge';

const apiKey = 'cdac68a141d5dda2d89e972f10c1e98a';
const host = 'test-store-658.myshopify.com';
const app = createApp({
    apiKey: apiKey,
    host: btoa(host)
});

export default app
