var push = require('web-push');

let vapidKeys = {
    publicKey: 'BA-5O0pWXQoyg4yMrAC98lQxy4z3U1FgMabaroSeavutWCRBQjswswQ06WqPd_O1PwkKctDea9oMonowNEeIpsY',
    privateKey: '3EsAhi57aVt7vDXQGobbW8spdQYX2HM4QHfFyV5JLSg'
  }

//console.log(vapidKeys);

push.setVapidDetails('mailto:min.hua.wang@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let subscription = {
    endpoint: "https://fcm.googleapis.com/fcm/send/dS7nZbyozHI:APA91bFnizgUeUYSBdNwnnWhtJNYVAYkKKuv3ZxujS3hAnYIyg7jjERJMzfRq3JQNwiOk1bz36BImpTEWxDWUYRFZljiq6_Vf62Hym-7i7iHIW3DNSJ-LSS_I6Vn1eJNe-GvEdUvVFC-",   
    expirationTime: null,
    keys: {
        p256dh: "BIhAE6zWZrpn_Ivlq51FpxNnCVtw4J5hJLP7VzyxPR3pYnhU7MJ73B8udGvzZjpCofoPZiuEH_0hjm9Q4Pw_3Ag",
        auth: "M9KJWYTH9gh4rkXHBMAlnw"
    }};
push.sendNotification(subscription, 'OptView Student Check-in message');

