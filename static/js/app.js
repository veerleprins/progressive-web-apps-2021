// Check if service workers are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log(`Service Worker: Registered on: ${reg.scope}`))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
