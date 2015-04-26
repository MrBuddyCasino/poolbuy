(ns poolbuy.models.migration
  (:require [clojure.java.jdbc :as sql]
            [poolbuy.models.account :as account]))

(defn migrated? []
  (-> (sql/query account/db-spec
                 [(str "select count(*) from information_schema.tables "
                       "where table_name='accounts'")])
      first :count pos?))

(defn migrate []
  (when (not (migrated?))
    (print "Creating database structure...") (flush)
    (sql/db-do-commands account/db-spec
                        (sql/create-table-ddl
                         :accounts
                         [:id :serial "PRIMARY KEY"]
                         [:email "varchar(104)" "NOT NULL UNIQUE"]
                         [:username :varchar "NOT NULL  UNIQUE"]
                         [:password :varchar "NOT NULL"]
                         [:created_at :timestamp
                          "NOT NULL" "DEFAULT CURRENT_TIMESTAMP"]))
    (println " done")))