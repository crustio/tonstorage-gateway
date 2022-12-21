module.exports = {
  app: {
    gatewayPrefix: '/itfs',
    authPrefix: '/auth',
    whitelistMode: false,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  tonstorage: {
    bin: '/root/storage-daemon-cli',
    host: '127.0.0.1:5555',
    database: '/var/ton-storage',
    timeout: 5000,
  },
  session: {
    cookie: {
      name: 'sid',
      password: 'cookiepassword',
      path: '/',
      isSecure: false, // change to true on prod
    },
    redirectTo: '/',
  },
  auth: {
    provider: 'github',
    password: 'authpassword',
    clientId: 'authcliendid',
    clientSecret: 'authclientsecret',
    isSecure: false, // change to true on prod
  },
  whitelist: [
    'ndatg',
  ],
};
