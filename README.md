jQuery External Links
=====================

Detects external links and performs common actions

Usage
-----

```
$('a').externalLinks();
```

By default, the plugin adds the following attributes to all external links;
- target="_blank"
- class="external"
- title="Opens new window"

Settings
--------

```
$('a').externalLinks({
  "internalDomain": window.location.host,
  "setTargetBlank": true,
  "addClass": true,
  "class": 'external',
  "setTitle": true,
  "title": 'Opens new window'
});
```
