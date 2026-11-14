/* Service Worker של אתר הסטטוס: מקבל פושים מהשרת ומציג התראה גם כשהאתר סגור. */
const ICON = 'https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/image-removebg-preview%20(2).png';
const HOME = 'https://xnet2.github.io/status/';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  e.waitUntil(self.registration.showNotification(d.title || 'xnet פרוייקטים ועדכונים', {
    body: d.body || 'עדכון חדש בערוץ',
    icon: d.icon || ICON,
    badge: ICON,
    tag: d.tag || 'xnet-status',
    data: { url: d.url || HOME },
    dir: 'rtl',
    lang: 'he',
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || HOME;
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = wins.find(w => w.url.startsWith(HOME));
    if (open) return open.focus();
    return self.clients.openWindow(url);
  })());
});
