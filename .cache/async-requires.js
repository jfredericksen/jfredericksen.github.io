// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/jackfredericksen/Desktop/jfredericksen.github.io/.cache/data.json")

