import{l as N,m as O,o as q,q as A}from"./chunk-F2TXRC3Z.js";import{Ac as B,Cc as Q,Db as l,Dc as E,Eb as M,Fb as w,Gb as d,Ib as f,Jb as m,Ma as o,Nb as F,Ob as D,Q as _,Ub as j,W as v,Za as h,bb as T,db as b,eb as r,fa as g,ic as S,mb as i,pb as C,qb as $,vb as p,wb as u,xb as k,yb as I,yc as z,zb as x}from"./chunk-CNYK45LY.js";var R=["icon"],V=["*"];function H(e,c){if(e&1&&k(0,"span",4),e&2){let t=l(2);i("ngClass",t.icon)}}function G(e,c){if(e&1&&(I(0),r(1,H,1,1,"span",3),x()),e&2){let t=l();o(),i("ngIf",t.icon)}}function J(e,c){}function K(e,c){e&1&&r(0,J,0,0,"ng-template")}function L(e,c){if(e&1&&(p(0,"span",5),r(1,K,1,0,null,6),u()),e&2){let t=l();o(),i("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)}}var U=({dt:e})=>`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${e("tag.primary.background")};
    color: ${e("tag.primary.color")};
    font-size: ${e("tag.font.size")};
    font-weight: ${e("tag.font.weight")};
    padding: ${e("tag.padding")};
    border-radius: ${e("tag.border.radius")};
    gap: ${e("tag.gap")};
}

.p-tag-icon {
    font-size: ${e("tag.icon.size")};
    width: ${e("tag.icon.size")};
    height:${e("tag.icon.size")};
}

.p-tag-rounded {
    border-radius: ${e("tag.rounded.border.radius")};
}

.p-tag-success {
    background: ${e("tag.success.background")};
    color: ${e("tag.success.color")};
}

.p-tag-info {
    background: ${e("tag.info.background")};
    color: ${e("tag.info.color")};
}

.p-tag-warn {
    background: ${e("tag.warn.background")};
    color: ${e("tag.warn.color")};
}

.p-tag-danger {
    background: ${e("tag.danger.background")};
    color: ${e("tag.danger.color")};
}

.p-tag-secondary {
    background: ${e("tag.secondary.background")};
    color: ${e("tag.secondary.color")};
}

.p-tag-contrast {
    background: ${e("tag.contrast.background")};
    color: ${e("tag.contrast.color")};
}
`,W={root:({props:e})=>["p-tag p-component",{"p-tag-info":e.severity==="info","p-tag-success":e.severity==="success","p-tag-warn":e.severity==="warn","p-tag-danger":e.severity==="danger","p-tag-secondary":e.severity==="secondary","p-tag-contrast":e.severity==="contrast","p-tag-rounded":e.rounded}],icon:"p-tag-icon",label:"p-tag-label"},P=(()=>{class e extends q{name="tag";theme=U;classes=W;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var fe=(()=>{class e extends A{get style(){return this._style}set style(t){this._style=t,this.cd.markForCheck()}styleClass;severity;value;icon;rounded;iconTemplate;templates;_iconTemplate;_style;_componentStyle=v(P);ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break}})}containerClass(){let t="p-tag p-component";return this.severity&&(t+=` p-tag-${this.severity}`),this.rounded&&(t+=" p-tag-rounded"),this.styleClass&&(t+=` ${this.styleClass}`),t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=h({type:e,selectors:[["p-tag"]],contentQueries:function(a,n,y){if(a&1&&(d(y,R,4),d(y,N,4)),a&2){let s;f(s=m())&&(n.iconTemplate=s.first),f(s=m())&&(n.templates=s)}},hostVars:4,hostBindings:function(a,n){a&2&&(C(n.style),$(n.containerClass()))},inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:[2,"rounded","rounded",S]},features:[j([P]),b,T],ngContentSelectors:V,decls:5,vars:3,consts:[[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-label"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(a,n){a&1&&(M(),w(0),r(1,G,2,1,"ng-container",0)(2,L,2,1,"span",1),p(3,"span",2),F(4),u()),a&2&&(o(),i("ngIf",!n.iconTemplate&&!n._iconTemplate),o(),i("ngIf",n.iconTemplate||n._iconTemplate),o(2),D(n.value))},dependencies:[E,z,B,Q,O],encapsulation:2,changeDetection:0})}return e})();export{fe as a};
