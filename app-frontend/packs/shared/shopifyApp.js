const shopifyAppConfig = document.getElementById('shopify-app-init').dataset;

import createApp from '@shopify/app-bridge';

const apiKey = shopifyAppConfig.apiKey;
const host = shopifyAppConfig.shopOrigin;
const app = createApp({
    apiKey: apiKey,
    host: btoa(host)
});

export default app
