
(ns poolbuy.core
  (:require
    [liberator.core :refer [resource defresource]]
    [ring.middleware.params :refer [wrap-params]]
    [compojure.core :refer [defroutes ANY GET POST PUT DELETE]]
    [compojure.route :as route]
    [compojure.handler :as handler]
    [ring.middleware.json :refer [wrap-json-body wrap-json-params wrap-json-response]]
    [ring.util.response :refer [resource-response response]]
    [ring.adapter.jetty :refer [run-jetty]]
    [poolbuy.models.account :as acc]
    [poolbuy.models.migration :as migration]
   )
)


(defresource hello-world []
  :available-media-types ["text/plain"]
  :handle-ok "We can use a function.")


(defresource db-test []
  :available-media-types ["application/javascript"]
  :handle-ok "We can use a function.")

(defresource accounts []
  :available-media-types ["application/javascript"]
  :handle-ok (fn [_] (acc/all)))

(defresource account []
  :available-media-types ["text/plain", "application/javascript"]
  :handle-ok (fn [_] (acc/all)))

;wrap-json-response


(defroutes app-routes
  (GET  "/" [] (resource-response "index.html" ))
  (ANY "/hello-world" [] (hello-world))
  (GET "/account" [] (response [{:name "Widget 1"} {:name "Widget 2"}]))
  (GET "/accounts" [] (response (acc/all)))
  (POST "/account" {account :params} (response (acc/create account)))
;  (route/resources "/")
  (route/not-found "Not Found"))




(def handler
  (-> (handler/api app-routes)
      (wrap-json-body)
      (wrap-json-params)
      (wrap-json-response [:pretty true])))

(defn -main []
  (migration/migrate)
  (run-jetty handler {:port 8080 :join? false})
)
