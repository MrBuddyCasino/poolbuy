(comment
(ns user
  (:require [reloaded.repl :refer [system init start stop go reset]]
            [poolbuy.systems :refer [dev-system]])
  )

(reloaded.repl/set-init! dev-system)
	)


(comment
(use 'poolbuy.core)
(in-ns 'poolbuy.core)
(def jetty (run-jetty handler {:port 8080 :join? false}))
(require 'poolbuy.core :reload)
)