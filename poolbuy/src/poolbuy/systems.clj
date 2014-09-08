
(ns poolbuy.systems
 (:require
  [com.stuartsierra.component :as component]
  (system.components
   [jetty :refer [new-web-server]]
   [repl-server :refer [new-repl-server]]
   ;[datomic :refer [new-datomic-db]]
   ;[mongo :refer [new-mongo-db]])
   ;[poolbuy.core :refer [handler]]
   ;[environ.core :refer [env]])
   )
 )

(defn dev-system []
  (component/system-map
   ;:datomic-db (new-datomic-db (env :db-url))
   ;:mongo-db (new-mongo-db)
   :web (new-web-server (env :http-port) handler)))

(defn prod-system []
  "Assembles and returns components for an application in production"
  []
    (component/system-map
     ;:datomic-db (new-datomic-db (env :db-url))
     ;:mongo-db (new-mongo-db (env :mongo-url))
     :web (new-web-server (env :http-port) handler)
     :repl-server (new-repl-server (env :repl-port))))
)
