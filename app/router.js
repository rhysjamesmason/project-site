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

  // Blog (EN) [Connect]
  this.route('blog/index', { path: '/connect' });
  this.route('blog/posts/post', { path: '/connect/:post_id' });

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

  // Welsh Routes
  this.route('welsh/index', { path: '/welsh' });
  this.route('welsh/contact');
  this.route('welsh/about/index', { path: '/welsh/about' });
  this.route('welsh/whats-on');

  // Blog (Welsh) [Connect]
  this.route('welsh/blog/index', { path: '/welsh/connect' });
  this.route('welsh/blog/posts/post', { path: '/welsh/connect/:post_id' });

  // Community Projects (Welsh) [Connect]
  this.route('welsh/connect/index', { path: '/welsh/connect/community' });
  this.route('welsh/connect/get-involved/index', {
    path: '/welsh/connect/get-involved',
  });

  // Events (Welsh) [Connect]
  this.route('welsh/connect/events/dvla-code-challenge-2022');
  this.route('welsh/connect/events/commerce-in-code-challenge-2022');
  this.route('welsh/connect/events/digital-inclusion-scheme');

  // Gallery (Welsh) [Connect]
  this.route('welsh/connect/gallery/index', { path: '/welsh/connect/gallery' });

  // Downloads (Welsh)
  this.route('welsh/downloads/index', { path: '/welsh/downloads' });
});
