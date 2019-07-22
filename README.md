# InstantSearch.js

To run the `App`, run:

```sh
yarn && yarn start
```

You can find the custom build of InstantSearch under [`lib/instantsearch.production.min.js`](lib/instantsearch.production.min.js). The build contains:

- [`searchBox`](https://www.algolia.com/doc/api-reference/widgets/search-box/js/) widget + connector
- [`hits`](https://www.algolia.com/doc/api-reference/widgets/hits/js/) widget + connector
- [`stats`](https://www.algolia.com/doc/api-reference/widgets/stats/js/) widget + connector

The connector are always present because the widgets are built internaly with the connectors.
