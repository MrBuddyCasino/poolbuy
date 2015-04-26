# poolbuy.io

When this is done, people will be able to pool their orders to buy stuff in shops. This is great e.g. for electronic components,
where there is often a substantial minimum order size. 

Target audience is the Arduino/Makerspace/RC crowd.

Technology
==========

Backend:
- Clojure using liberator/compojure/ring
- Postgres

Frontend:
- Bootstrap
- Mithril, a virtual DOM client-side MVC framework using functional principles (similar to React)
- JSX transforms the js template sources so you can use html tags

Build:
  * backend: Leiningen
  * frontend: Gulp, NPM
