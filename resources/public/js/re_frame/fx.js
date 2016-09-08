// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13055){
var vec__13056 = p__13055;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13059_13069 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13060_13070 = ((function (G__13059_13069){
return (function (value){
var seq__13061 = cljs.core.seq(value);
var chunk__13062 = null;
var count__13063 = (0);
var i__13064 = (0);
while(true){
if((i__13064 < count__13063)){
var map__13065 = chunk__13062.cljs$core$IIndexed$_nth$arity$2(null,i__13064);
var map__13065__$1 = ((((!((map__13065 == null)))?((((map__13065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13065):map__13065);
var effect = map__13065__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13065__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13061,chunk__13062,count__13063,i__13064,map__13065,map__13065__$1,effect,ms,dispatch,G__13059_13069){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13061,chunk__13062,count__13063,i__13064,map__13065,map__13065__$1,effect,ms,dispatch,G__13059_13069))
,ms);
}

var G__13071 = seq__13061;
var G__13072 = chunk__13062;
var G__13073 = count__13063;
var G__13074 = (i__13064 + (1));
seq__13061 = G__13071;
chunk__13062 = G__13072;
count__13063 = G__13073;
i__13064 = G__13074;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13061);
if(temp__4657__auto__){
var seq__13061__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13061__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13061__$1);
var G__13075 = cljs.core.chunk_rest(seq__13061__$1);
var G__13076 = c__7215__auto__;
var G__13077 = cljs.core.count(c__7215__auto__);
var G__13078 = (0);
seq__13061 = G__13075;
chunk__13062 = G__13076;
count__13063 = G__13077;
i__13064 = G__13078;
continue;
} else {
var map__13067 = cljs.core.first(seq__13061__$1);
var map__13067__$1 = ((((!((map__13067 == null)))?((((map__13067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13067):map__13067);
var effect = map__13067__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13067__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13067__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13061,chunk__13062,count__13063,i__13064,map__13067,map__13067__$1,effect,ms,dispatch,seq__13061__$1,temp__4657__auto__,G__13059_13069){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13061,chunk__13062,count__13063,i__13064,map__13067,map__13067__$1,effect,ms,dispatch,seq__13061__$1,temp__4657__auto__,G__13059_13069))
,ms);
}

var G__13079 = cljs.core.next(seq__13061__$1);
var G__13080 = null;
var G__13081 = (0);
var G__13082 = (0);
seq__13061 = G__13079;
chunk__13062 = G__13080;
count__13063 = G__13081;
i__13064 = G__13082;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13059_13069))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13059_13069,G__13060_13070) : re_frame.fx.register.call(null,G__13059_13069,G__13060_13070));
var G__13083_13085 = cljs.core.cst$kw$dispatch;
var G__13084_13086 = ((function (G__13083_13085){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13083_13085))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13083_13085,G__13084_13086) : re_frame.fx.register.call(null,G__13083_13085,G__13084_13086));
var G__13087_13093 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13088_13094 = ((function (G__13087_13093){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13089 = cljs.core.seq(value);
var chunk__13090 = null;
var count__13091 = (0);
var i__13092 = (0);
while(true){
if((i__13092 < count__13091)){
var event = chunk__13090.cljs$core$IIndexed$_nth$arity$2(null,i__13092);
re_frame.router.dispatch(event);

var G__13095 = seq__13089;
var G__13096 = chunk__13090;
var G__13097 = count__13091;
var G__13098 = (i__13092 + (1));
seq__13089 = G__13095;
chunk__13090 = G__13096;
count__13091 = G__13097;
i__13092 = G__13098;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13089);
if(temp__4657__auto__){
var seq__13089__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13089__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13089__$1);
var G__13099 = cljs.core.chunk_rest(seq__13089__$1);
var G__13100 = c__7215__auto__;
var G__13101 = cljs.core.count(c__7215__auto__);
var G__13102 = (0);
seq__13089 = G__13099;
chunk__13090 = G__13100;
count__13091 = G__13101;
i__13092 = G__13102;
continue;
} else {
var event = cljs.core.first(seq__13089__$1);
re_frame.router.dispatch(event);

var G__13103 = cljs.core.next(seq__13089__$1);
var G__13104 = null;
var G__13105 = (0);
var G__13106 = (0);
seq__13089 = G__13103;
chunk__13090 = G__13104;
count__13091 = G__13105;
i__13092 = G__13106;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13087_13093))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13087_13093,G__13088_13094) : re_frame.fx.register.call(null,G__13087_13093,G__13088_13094));
var G__13107_13109 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13108_13110 = ((function (G__13107_13109){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13107_13109))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13107_13109,G__13108_13110) : re_frame.fx.register.call(null,G__13107_13109,G__13108_13110));
var G__13111_13113 = cljs.core.cst$kw$db;
var G__13112_13114 = ((function (G__13111_13113){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13111_13113))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13111_13113,G__13112_13114) : re_frame.fx.register.call(null,G__13111_13113,G__13112_13114));
