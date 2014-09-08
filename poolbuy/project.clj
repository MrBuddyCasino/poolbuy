(defproject poolbuy "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://poolbuy.io/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [
                 [org.clojure/clojure "1.5.1"]
                 [org.danielsz/system "0.1.0-SNAPSHOT"]
                 [liberator "0.12.1"]
                 [compojure "1.1.8"]
                 [ring/ring-core "1.3.1"]
                 ]
   :plugins [[lein-ring "0.8.11"]]

   :ring {:handler poolbuy.core/handler}
)