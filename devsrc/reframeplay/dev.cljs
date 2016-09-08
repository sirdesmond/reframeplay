(ns reframeplay.dev
  (:require [reframeplay.core :as play]
            [figwheel.client :as fw]))

(fw/start {:on-jsload play/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})
