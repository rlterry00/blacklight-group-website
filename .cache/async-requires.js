// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-index-js": () => import("./../../src/pages/contact/index.js" /* webpackChunkName: "component---src-pages-contact-index-js" */),
  "component---src-pages-index-js": () => import("./../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-services-index-js": () => import("./../../src/pages/services/index.js" /* webpackChunkName: "component---src-pages-services-index-js" */),
  "component---src-pages-team-index-js": () => import("./../../src/pages/team/index.js" /* webpackChunkName: "component---src-pages-team-index-js" */),
  "component---src-pages-testimonials-index-js": () => import("./../../src/pages/testimonials/index.js" /* webpackChunkName: "component---src-pages-testimonials-index-js" */),
  "component---src-templates-service-js": () => import("./../../src/templates/service.js" /* webpackChunkName: "component---src-templates-service-js" */),
  "component---src-templates-team-js": () => import("./../../src/templates/team.js" /* webpackChunkName: "component---src-templates-team-js" */),
  "component---src-templates-testimonial-js": () => import("./../../src/templates/testimonial.js" /* webpackChunkName: "component---src-templates-testimonial-js" */)
}

