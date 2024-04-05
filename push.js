var push = require('web-push');

let vapidKeys = {
    publicKey: 'BA-5O0pWXQoyg4yMrAC98lQxy4z3U1FgMabaroSeavutWCRBQjswswQ06WqPd_O1PwkKctDea9oMonowNEeIpsY',
    privateKey: '3EsAhi57aVt7vDXQGobbW8spdQYX2HM4QHfFyV5JLSg'
  }

//console.log(vapidKeys);

push.setVapidDetails('mailto:min.hua.wang@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let subscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/c4g3JQH9ZqY:APA91bG6Wg9q7vLgZ2wP4J4lT9Uz1Oyf9G7v3wQc3hKwU6F9lq6Z4v6b2b1X9j8Z2z4WVzv3j7w5Q4w6z5Y9fD0W5h2Q0Q",   
    expirationTime: null,
    keys: {
        p256dh: "BOLv6WU8V",
        auth
    }};
push.sendNotification(subscription, 'test message');

