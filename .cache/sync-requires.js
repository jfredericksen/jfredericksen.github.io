// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/jackfredericksen/Desktop/jfredericksen.github.io/src/pages/index.js"))
}

