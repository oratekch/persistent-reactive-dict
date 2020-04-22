Package.describe({
  name: "oratekch:persistent-reactive-dict",
  version: "0.1.2",
  summary: "PersistentReactiveDict implements persistence for a ReactiveDict"
});

Package.onUse(function (api, where) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('underscore');
  api.use('jquery');
  api.use('session');
  api.use('amplify@1.0.0');
  api.use('tracker');
  api.use('ejson');
  api.use('reactive-dict', 'client');
  api.addFiles('persistent-reactive-dict.js', 'client');

  api.export('PersistentReactiveDict', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('underscore');
  api.use('oratekch:persistent-reactive-dict');

  // more tests are need, but multiple sessions/reloads are required, just sanity for now
  api.addFiles('tests.js', 'client');
});
