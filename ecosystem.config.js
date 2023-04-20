module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/root/statieCounter',
      script: 'npm',
      args: 'run develop',
    },
    {
      name: 'webhook',
      cwd: '/root/statieCounter',
      script: 'webhook.js'
    },
  ],
};
 