
(ns poolbuy.core
  (:require [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [compojure.core :refer [defroutes ANY]]))


(defresource hello-world []
  :available-media-types ["text/plain"]
  :handle-ok "We can use a function.")


(defresource db-test []
  :available-media-types ["application/javascript"]
  :handle-ok "We can use a function.")


(defroutes app
  (ANY "/" [] (resource))
  (ANY "/hello-world" [] (hello-world)))


(def handler
  (-> app
      wrap-params))



















(comment

(ns poolbuy.core)
  (:gen-class)
  (:require [reloaded.repl :refer [system init start stop go reset]]
            [poolbuy.systems :refer [prod-system]]

            [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [compojure.core :refer [defroutes ANY]])


(defn -main
  []
  "Start the application"
  (reloaded.repl/set-init! prod-system)
  (go))


(ns poolbuy.web
  (:use [liberator.core :only [defresource]]))

(defresource hello-world
  :available-media-types ["text/plain"]
  :handle-ok "Hello, world!")


(defroutes app
  (ANY "/" [] (resource))
  )

(def handler
  (-> app
      wrap-params))

)