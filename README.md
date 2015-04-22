# [TypeSlab](http://typeslab.com/)
> simple, shareable typographic posters

Some good examples at <a target="_blank" href="https://twitter.com/typeslab">https://twitter.com/typeslab</a>

## Developing

To build this project yourself, do the following:

```
npm install -g jspm jspm-server
jspm install
jspm-server src
```

Then http://localhost:8080 should open and you should have a live-reloading hot-swapping dev server!

**Note: only `.amcss` and `.jsx` files are hot-loaded, the rest requires a full browser reload. With JSPM that can take several seconds.**

Also, you don't actually need to `npm install` anything dev on this project **i.e. gulp isn't used for development**. JSPM is all you need to get hacking, changing fonts & colour schemes and sending screenshots & PRs. Neato!

## Building

To build a minified, bundled version of the project, you will need to `npm install`, and then run `gulp build`. In your `dist` directory you have a static build.

# Related Projects

All under development, all by me, and all super early. So send me issues and PRs!

- [jspm-server](https://github.com/geelen/jspm-server) - live-reloading dev server for JSPM. If the plugin supports live-reloading, it will try to hot-swap files in. If not, it'll reload the page.
- [plugin-postcss](https://github.com/geelen/plugin-postcss) - live-reloading PostCSS plugin generator. Used for the [amcss.js](https://github.com/geelen/typeslab/blob/master/src/amcss.js) plugin here in this project.
- [postcss-traits](https://github.com/geelen/postcss-traits) key part of AMCSS workflow in PostCSS.
- [hot-reloading JSX plugin](https://github.com/geelen/typeslab/blob/master/src/jsx.js) (not broken out yet) - brittle as all hell. Needs a single default export using ES6 classes for all JSX files, but if that's the case it'll use [react-hot-api](https://github.com/gaearon/react-hot-api) and swap them in.

# License

GNU Affero General Public License
