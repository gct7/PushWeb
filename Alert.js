// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    // Register a service worker
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
            
            // Request permission for push notifications
            return registration.pushManager.getSubscription()
                .then(function(subscription) {
                    if (subscription) {
                        return subscription;
                    }
                    
                    return registration.pushManager.subscribe({
                        userVisibleOnly: true,
                        applicationServerKey: urlBase64ToUint8Array('YOUR_PUBLIC_KEY')
                    });
                });
        })
        .then(function(subscription) {
            console.log('Push subscription:', subscription);
            
            // Send the subscription details to your server
            // You can use AJAX or fetch API to make a POST request
            fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(subscription)
            })
            .then(function(response) {
                console.log('Subscription sent to server:', response);
            })
            .catch(function(error) {
                console.error('Error sending subscription to server:', error);
            });
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Helper function to convert base64 string to Uint8Array
function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    
    return outputArray;
}