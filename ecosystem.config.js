module.exports = {
  apps: [
    {
      name: 'FC-Client',
      script: './bin/www',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        PORT: 3002,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 3002,
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      key: '~/.ssh/orangenamu.pem',
      user: 'ec2-user',
      host: 'ec2-52-79-160-63.ap-northeast-2.compute.amazonaws.com',
      ref: 'origin/master',
      repo: 'git@github.com:Parkseokje/FC-Client.git',
      path: '/home/ec2-user/FC-mobile',
      'pre-deploy': 'git reset --hard',
      'post-deploy': 'pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
};
