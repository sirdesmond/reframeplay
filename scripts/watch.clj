(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'reframeplay.core
   :output-to "out/reframeplay.js"
   :output-dir "out"})
