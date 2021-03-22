// Check if service workers are supported:
if ("serviceWorker" in navigator) {
  const registerServiceWorker = async () => {
    try {
      const sw = navigator.serviceWorker;
      const registration = await sw.register("/service-worker.js");
      console.log(`Service Worker Registered ${registration}`);
    } catch (err) {
      console.error(`Service Worker registration Failed: ${err}`);
    }
  };
  registerServiceWorker();
}
