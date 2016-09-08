// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reframeplay.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
if(typeof reframeplay.core.time_updater !== 'undefined'){
} else {
reframeplay.core.time_updater = (function (){var G__13334 = (function (){
var G__13336 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer,(new Date())], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13336) : re_frame.core.dispatch.call(null,G__13336));
});
var G__13335 = (1000);
return setInterval(G__13334,G__13335);
})();
}
reframeplay.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$timer,(new Date()),cljs.core.cst$kw$time_DASH_color,"#f88"], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (db,_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([db,reframeplay.core.initial_state], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$time_DASH_color,(function (){var G__13337 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_color], null);
return (re_frame.core.path.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.path.cljs$core$IFn$_invoke$arity$1(G__13337) : re_frame.core.path.call(null,G__13337));
})(),(function (time_color,p__13338){
var vec__13339 = p__13338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(1),null);
return value;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$timer,(function (db,p__13342){
var vec__13343 = p__13342;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13343,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13343,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$timer,value);
}));
var G__13346_13348 = cljs.core.cst$kw$timer;
var G__13347_13349 = ((function (G__13346_13348){
return (function (db,_){
return cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(db);
});})(G__13346_13348))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13346_13348,G__13347_13349) : re_frame.core.reg_sub.call(null,G__13346_13348,G__13347_13349));
var G__13350_13352 = cljs.core.cst$kw$time_DASH_color;
var G__13351_13353 = ((function (G__13350_13352){
return (function (db,_){
return cljs.core.cst$kw$time_DASH_color.cljs$core$IFn$_invoke$arity$1(db);
});})(G__13350_13352))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13350_13352,G__13351_13353) : re_frame.core.reg_sub.call(null,G__13350_13352,G__13351_13353));
reframeplay.core.greeting = (function reframeplay$core$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,message], null);
});
reframeplay.core.clock = (function reframeplay$core$clock(){
var time_color = (function (){var G__13356 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_color], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13356) : re_frame.core.subscribe.call(null,G__13356));
})();
var timer = (function (){var G__13357 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timer], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13357) : re_frame.core.subscribe.call(null,G__13357));
})();
return ((function (time_color,timer){
return (function reframeplay$core$clock_$_clock_render(){
var time_str = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(timer) : cljs.core.deref.call(null,timer)).toTimeString()," "));
var style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_color) : cljs.core.deref.call(null,time_color))], null)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$example_DASH_clock,style,time_str], null);
});
;})(time_color,timer))
});
reframeplay.core.color_input = (function reframeplay$core$color_input(){
var time_color = (function (){var G__13362 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_color], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13362) : re_frame.core.subscribe.call(null,G__13362));
})();
return ((function (time_color){
return (function reframeplay$core$color_input_$_color_input_render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$color_DASH_input,"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_color) : cljs.core.deref.call(null,time_color)),cljs.core.cst$kw$on_DASH_change,((function (time_color){
return (function (p1__13358_SHARP_){
var G__13364 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_color,p1__13358_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13364) : re_frame.core.dispatch.call(null,G__13364));
});})(time_color))
], null)], null)], null);
});
;})(time_color))
});
reframeplay.core.init = (function reframeplay$core$init(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeplay.core.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeplay.core.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeplay.core.color_input], null)], null);
});
reframeplay.core.run = (function reframeplay$core$run(){
var G__13366_13367 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__13366_13367) : re_frame.core.dispatch_sync.call(null,G__13366_13367));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reframeplay.core.init], null),document.getElementById("app"));
});
goog.exportSymbol('reframeplay.core.run', reframeplay.core.run);
