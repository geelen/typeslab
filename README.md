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

Also, you don't actually need to `npm install` to dev on this project. JSPM is all you need. Neato!

## Building

To build a minified, bundled version of the project, you will need to `npm install`, and then run `gulp build`. In your `dist` directory you have a static build. You can host that somewhere

# License

GNU Affero General Public License
