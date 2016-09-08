// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('re_frame.loggers');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Holds the current set of logging functions.
 * By default, re-frame uses the functions provided by js/console.
 * Use `set-loggers!` to change these defaults
 *   
 */
re_frame.loggers.loggers = (function (){var G__12283 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$log,console.log.bind(console),cljs.core.cst$kw$warn,console.warn.bind(console),cljs.core.cst$kw$error,console.error.bind(console),cljs.core.cst$kw$group,(cljs.core.truth_(console.group)?console.group.bind(console):console.log.bind(console)),cljs.core.cst$kw$groupEnd,(cljs.core.truth_(console.groupEnd)?console.groupEnd.bind(console):(function (){
return cljs.core.List.EMPTY;
}))], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12283) : cljs.core.atom.call(null,G__12283));
})();
re_frame.loggers.console = (function re_frame$loggers$console(var_args){
var args__7482__auto__ = [];
var len__7475__auto___12287 = arguments.length;
var i__7476__auto___12288 = (0);
while(true){
if((i__7476__auto___12288 < len__7475__auto___12287)){
args__7482__auto__.push((arguments[i__7476__auto___12288]));

var G__12289 = (i__7476__auto___12288 + (1));
i__7476__auto___12288 = G__12289;
continue;
} else {
}
break;
}

var argseq__7483__auto__ = ((((1) < args__7482__auto__.length))?(new cljs.core.IndexedSeq(args__7482__auto__.slice((1)),(0),null)):null);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7483__auto__);
});

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__12286 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.loggers.loggers) : cljs.core.deref.call(null,re_frame.loggers.loggers));
return (level.cljs$core$IFn$_invoke$arity$1 ? level.cljs$core$IFn$_invoke$arity$1(G__12286) : level.call(null,G__12286));
})(),args);
});

re_frame.loggers.console.cljs$lang$maxFixedArity = (1);

re_frame.loggers.console.cljs$lang$applyTo = (function (seq12284){
var G__12285 = cljs.core.first(seq12284);
var seq12284__$1 = cljs.core.next(seq12284);
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(G__12285,seq12284__$1);
});

/**
 * Change the set (or a subset) of logging functions used by re-frame.
 *   `new-loggers` should be a map with the same keys as `loggers` (above)
 */
re_frame.loggers.set_loggers_BANG_ = (function re_frame$loggers$set_loggers_BANG_(new_loggers){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.loggers,cljs.core.merge,new_loggers);
});
