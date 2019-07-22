const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

const search = instantsearch({
  indexName: 'instant_search',
  searchClient,
  routing: true,
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.stats({
    container: '#stats',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
</article>
`,
    },
  })
);

search.start();
