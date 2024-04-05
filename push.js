var push = require('web-push');

let vapidKeys = {
    publicKey: 'BA-5O0pWXQoyg4yMrAC98lQxy4z3U1FgMabaroSeavutWCRBQjswswQ06WqPd_O1PwkKctDea9oMonowNEeIpsY',
    privateKey: '3EsAhi57aVt7vDXQGobbW8spdQYX2HM4QHfFyV5JLSg'
  }

//console.log(vapidKeys);

push.setVapidDetails('mailto:min.hua.wang@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

push.sendNotification(subscription, 'test message');

