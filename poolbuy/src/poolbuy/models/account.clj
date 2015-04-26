(ns poolbuy.models.account
  "user account"
  (:require [clojure.java.jdbc :as sql])
  (:import net.crackstation.PasswordHash)
  (:import com.mchange.v2.c3p0.ComboPooledDataSource))

 (def db-spec (or (System/getenv "DATABASE_URL")
                  "postgresql://localhost:5432/poolbuy"))

 (defn pool
  [spec]
  (let [cpds (doto (ComboPooledDataSource.)
               (.setJdbcUrl (str "jdbc:" spec))
               ;; expire excess connections after 30 minutes of inactivity:
               (.setMaxIdleTimeExcessConnections (* 30 60))
               ;; expire connections after 3 hours of inactivity:
               (.setMaxIdleTime (* 3 60 60)))]
    {:datasource cpds}))

 (def pooled-db (delay (pool db-spec)))
 (defn db-connection [] @pooled-db)


 (defn all []
   (into [] (sql/query (db-connection) ["SELECT * FROM accounts ORDER BY id DESC"])))

 (defn by-name [username]
   (sql/query (db-connection) ["SELECT * FROM accounts WHERE username = ?", username]))

; (filter
;     #(= (% :id) 1)
;     (acc/all)
;   )

 (defn create [acc]
   (sql/insert! (db-connection)
            :accounts {:username (:username acc), :email (:email acc), :password (PasswordHash/createHash (:password acc))}))
