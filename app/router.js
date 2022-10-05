import EmberRouter from '@ember/routing/router';
import config from 'dvla/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // English Routes
  this.route('index', { path: '/' });
  this.route('contact');
  this.route('about/index', { path: '/about' });
  this.route('whats-on');

  // Community Projects (EN) [Connect]
  this.route('connect/index', { path: '/connect/community' });
  this.route('connect/get-involved/index', { path: '/connect/get-involved' });

  // Events (EN) [Connect]
  this.route('connect/events/dvla-code-challenge-2022');
  this.route('connect/events/commerce-in-code-challenge-2022');
  this.route('connect/events/digital-inclusion-scheme');

  // Gallery (EN) [Connect]
  this.route('connect/gallery/index', { path: '/connect/gallery' });

  // Downloads (EN)
  this.route('downloads/index', { path: '/downloads' });
});
