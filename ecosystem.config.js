module.exports = {
  apps: [{
    name: 'lumostree_api',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-13-57-123-236.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/whiteravensound.pem',
      ref: 'origin/master',
      repo: 'git@github.com:azimpradhan/lumostree_api.git',
      path: '/home/ec2-user/Sites/api.myinnerwork.com',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};