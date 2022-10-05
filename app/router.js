import EmberRouter from '@ember/routing/router';
import config from 'dvla/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  // English Routes
  this.route('index', { path: '/' });
  this.route('contact/index', { path: '/contact' });
  this.route('whats-on');

  // Events (EN)
  this.route('events/dvla-code-challenge-2022');
  this.route('events/commerce-in-code-challenge-2022');
  this.route('events/digital-inclusion-scheme');

  // Welsh Routes
  this.route('welsh/index', { path: '/cy' });
});
