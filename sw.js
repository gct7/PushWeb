self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    
    const title = 'Push Codelab';
    /**
     * Options for configuring the notification.
     * @typedef {Object} NotificationOptions
     * @property {string} body - The body text of the notification.
     * @property {string} icon - The URL of the icon to be displayed in the notification.
     * @property {string} badge - The URL of the badge to be displayed in the notification.
     */

    const options = {
        /**
         * The body text of the notification.
         * @type {string}
         */
        body: 'Yay it works.',
        
        /**
         * The URL of the icon to be displayed in the notification.
         * @type {string}
         */
        icon: 'images/icon.png',
        
        /**
         * The URL of the badge to be displayed in the notification.
         * @type {string}
         */
        badge: 'images/badge.png'
    };
    
    event.waitUntil(self.registration.showNotification(title, options));
});