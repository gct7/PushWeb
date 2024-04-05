self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    
    let title = 'Push Student Arrivals';
    /**
     * Options for configuring the notification.
     * @typedef {Object} NotificationOptions
     * @property {string} body - The body text of the notification.
     * @property {string} icon - The URL of the icon to be displayed in the notification.
     * @property {string} badge - The URL of the badge to be displayed in the notification.
     */

    var options = {
        /**
         * The body text of the notification.
         * @type {string}
         */
        body: 'Yay it works.',
        
        /**
         * The URL of the icon to be displayed in the notification.
         * @type {string}
         */
        icon: './Images/11.png',
        
        /**
         * The URL of the badge to be displayed in the notification.
         * @type {string}
         */
        //badge: 'images/badge.png'

        vibrate : [100, 50, 100],
        data : {
            dateOfArrival : Date.now(),
            primaryKey : 1
        },
        actions : [
            {action : 'Absence', title : 'Check-in Details',
            icon : './Images/11.png'},
            {action : 'close', title : 'Close',
            icon : './Images/11.png'}
        ]   
    };
    
    event.waitUntil(self.registration.showNotification(title, options));
});