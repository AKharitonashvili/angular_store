import{a as z,d as J}from"./chunk-DAENXDRT.js";import{a as B,k as K}from"./chunk-HQIDXECN.js";import{d as N,e as G}from"./chunk-3UQGAUGZ.js";import{c as L}from"./chunk-AQFHPPLW.js";import{c as Q,g as U,h as W}from"./chunk-LDQ34O2K.js";import{m as q,y as H,z as R}from"./chunk-EENBXHUI.js";import{$a as c,Bb as T,Cb as v,Db as p,Gb as s,Hb as _,Ib as x,Kb as k,Lb as $,Mb as O,Nb as j,a as g,ab as y,b as h,jb as I,oa as A,oc as V,pb as u,qc as M,rb as b,rc as D,t as S,u as w,ub as m,vb as F,wb as P,xb as E,ya as f,yb as r,za as C,zb as a}from"./chunk-SFY7KE4I.js";var Y=t=>({"!opacity-100":t});function Z(t,n){t&1&&(r(0,"span",9)(1,"del"),s(2),a()()),t&2&&(c(2),x("$",n,""))}function tt(t,n){if(t&1){let o=T();r(0,"button",16),v("click",function(){let i=f(o).$index,l=p(4);return C(l.changeSelectedOption(i))}),s(1),a()}if(t&2){let o=n.$implicit,e=n.$index,i=p(4);b("ngClass",$(2,Y,i.selectedOption()===e)),c(),x(" ",o," ")}}function et(t,n){if(t&1&&(r(0,"section",10),P(1,tt,2,4,"button",15,F),a()),t&2){let o=p();c(),E(o.options)}}function it(t,n){if(t&1&&(r(0,"div",17)(1,"mat-icon"),s(2),a(),r(3,"div",18)(4,"p",19),s(5),a(),r(6,"p",20),s(7),a()()()),t&2){let o=n.$implicit;c(2),_(o.icon),c(3),_(o.name),c(2),_(o.value)}}function ot(t,n){if(t&1&&(r(0,"section",11),P(1,it,8,3,"div",17,F),a()),t&2){let o=p();c(),E(o.parameters)}}function nt(t,n){if(t&1){let o=T();r(0,"app-favorite-icon",1),v("favoriteClick",function(i){let l=f(o),d=p(2);return C(d.toggleFavorite(i,l))}),a(),r(1,"div",2)(2,"div",3)(3,"mat-icon"),s(4,"image_not_supported"),a()(),r(5,"div",4)(6,"button",5)(7,"mat-icon"),s(8,"image_not_supported"),a()(),r(9,"button",5)(10,"mat-icon"),s(11,"image_not_supported"),a()(),r(12,"button",5)(13,"mat-icon"),s(14,"image_not_supported"),a()(),r(15,"button",5)(16,"mat-icon"),s(17,"image_not_supported"),a()()()(),r(18,"div",6)(19,"h1",7),s(20),a(),r(21,"p",8),s(22),u(23,Z,3,1,"span",9),a(),u(24,et,3,0,"section",10)(25,ot,3,0,"section",11),r(26,"section")(27,"div",12),s(28),a()(),r(29,"section",13)(30,"button",14),v("click",function(){let i=f(o),l=p(),d=p();return C(d.handleCart(i,l.isInCart))}),s(31),a()()()}if(t&2){let o,e=n,i=p();b("isFavorite",i.isFavorite),c(20),_(e.header),c(2),x(" $",e.price," "),c(),m(23,(o=e.oldPrice)?23:-1,o),c(),m(24,e.options?24:-1),c(),m(25,e.parameters?25:-1),c(3),_(e.details),c(3),x(" ",i.isInCart?"Remove From Cart":"Add To Cart"," ")}}function rt(t,n){if(t&1&&(r(0,"section",0),u(1,nt,32,8),a()),t&2){let o;c(),m(1,(o=n.product)?1:-1,o)}}var wt=(()=>{let n=class n{constructor(e,i){this.store=e,this.route=i,this.productId=I(this.route.snapshot.paramMap.get("id")??""),this.vm$=w([this.store.select(z).pipe(S(l=>l?.find(d=>d.id===this.productId()))),this.store.select(Q(this.productId())),this.store.select(L(this.productId()))]).pipe(S(([l,d,X])=>({product:l,isInCart:d,isFavorite:X}))),this.selectedOption=I(0),this.store.dispatch(K())}changeSelectedOption(e){this.selectedOption.set(e)}toggleFavorite(e,i){e?this.store.dispatch(G({id:i.id})):this.store.dispatch(N({product:h(g({},i),{selectedOption:i.options?.[0],quantity:1})}))}handleCart(e,i){i?this.store.dispatch(W({id:e.id})):this.store.dispatch(U({product:h(g({},e),{quantity:1,selectedOption:e.options?.[this.selectedOption()]})}))}};n.\u0275fac=function(i){return new(i||n)(y(q),y(B))},n.\u0275cmp=A({type:n,selectors:[["app-product-card"]],standalone:!0,features:[k],decls:2,vars:3,consts:[[1,"flex","flex-col","gap-14"],[1,"w-full",3,"favoriteClick","isFavorite"],[1,"flex","flex-col","items-center","justify-center","gap-7"],[1,"flex","h-[22.5rem]","w-[16.25rem]","items-center","justify-center","bg-optional-2"],[1,"grid","grid-cols-4","gap-4"],[1,"flex","size-16","items-center","justify-center","bg-optional-2"],[1,"flex","flex-col","gap-6"],[1,"text-3xl","font-bold"],[1,"text-2xl"],[1,"mx-4","text-optional-3"],[1,"grid","grid-cols-4","gap-2","text-center"],[1,"grid","grid-cols-2","gap-2"],[1,"text-sm","text-optional"],[1,"flex","flex-col","gap-4"],["aria-label","add-to-cart",1,"w-full","rounded-md","border","border-primary","p-4","hover:bg-primary","hover:text-white",3,"click"],[1,"rounded-md","border","border-primary","p-4","text-sm","opacity-50",3,"ngClass"],[1,"rounded-md","border","border-primary","p-4","text-sm","opacity-50",3,"click","ngClass"],[1,"flex","items-center","justify-center","gap-2","rounded-md","bg-light-1","p-4","text-xs"],[1,"flex","flex-1","flex-col","leading-4"],[1,"text-optional-3"],[1,"font-semibold","text-primary-3"]],template:function(i,l){if(i&1&&(u(0,rt,2,1,"section",0),O(1,"async")),i&2){let d;m(0,(d=j(1,1,l.vm$))?0:-1,d)}},dependencies:[D,V,M,R,H,J],changeDetection:0});let t=n;return t})();export{wt as ProductComponent};