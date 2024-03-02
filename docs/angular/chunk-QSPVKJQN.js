import{a as x,b as w,c as S,d as I,f as A,g as k,k as D}from"./chunk-3HVZMBDV.js";import{Aa as a,Ea as v,Ga as d,Ha as b,Ia as p,Ja as O,Ka as P,Oa as f,T as g,X as _,Y as C,fb as y,ib as T,oa as l,ra as h,va as m,ya as M,za as s}from"./chunk-LTBXVXDY.js";function N(o,n){if(o&1){let u=v();s(0,"li",1)(1,"span"),p(2),a(),s(3,"div")(4,"button",2),d("click",function(){let t=_(u).$implicit,r=b();return C(r.edit.emit(t))}),p(5," Edit "),a(),s(6,"button",3),d("click",function(){let t=_(u).index,r=b();return C(r.delete.emit(t))}),p(7," Delete "),a()()()}if(o&2){let u=n.$implicit;l(2),O(u.value)}}var E=(()=>{let n=class n{constructor(){this.items=[],this.edit=new h,this.delete=new h}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g({type:n,selectors:[["app-todo-list"]],inputs:{items:"items"},outputs:{edit:"edit",delete:"delete"},standalone:!0,features:[f],decls:1,vars:1,consts:[["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"editBtn",3,"click"],[1,"deleteBtn",3,"click"]],template:function(e,t){e&1&&M(0,N,8,1,"li",0),e&2&&m("ngForOf",t.items)},dependencies:[T,y],styles:[".item[_ngcontent-%COMP%]{margin-top:10px;display:flex;justify-content:space-between;align-items:center}.item[_ngcontent-%COMP%]   .editBtn[_ngcontent-%COMP%]{background-color:green}.item[_ngcontent-%COMP%]   .deleteBtn[_ngcontent-%COMP%]{background-color:red;margin-left:10px}button[_ngcontent-%COMP%]{color:#fff;padding:.5rem .75rem;border-radius:6px;transform:scale(1);transition:all .33s;border:none}button[_ngcontent-%COMP%]:hover{transform:scale(1.1);transition:all .33s}button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;transform:scale(1);background-color:gray}"],changeDetection:0});let o=n;return o})();var K=(()=>{let n=class n{constructor(){this.value="",this.items=[]}edit({id:i,value:e}){this.value=e,this.editInfo={id:i,value:e}}delete(i){this.editInfo?.id===this.items[i].id&&(this.value="",this.editInfo=null),this.items=this.items.filter((e,t)=>t!==i)}cancel(){this.value="",this.editInfo=null}submit(){this.editInfo?this.updateItem(this.value):this.addItem(this.value),this.value=""}addItem(i){this.items=this.items.concat({value:i,id:new Date().getTime()})}updateItem(i){let e=[...this.items],t=e.find(r=>r.id===this.editInfo?.id);t&&(t.value=i),this.items=e,this.editInfo=null}};n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=g({type:n,selectors:[["app-todo-app"]],standalone:!0,features:[f],decls:8,vars:5,consts:[[1,"App"],["novalidate","",3,"ngSubmit"],["name","newTodoTitle","type","text","placeholder","Enter your todo",3,"ngModel","ngModelChange"],["type","submit",3,"disabled"],["type","reset",3,"disabled","click"],[3,"items","edit","delete"]],template:function(e,t){e&1&&(s(0,"div",0)(1,"form",1),d("ngSubmit",function(){return t.submit()}),s(2,"input",2),d("ngModelChange",function(c){return t.value=c}),a(),s(3,"button",3),p(4),a(),s(5,"button",4),d("click",function(){return t.cancel()}),p(6," Cancel "),a()(),s(7,"app-todo-list",5),d("edit",function(c){return t.edit(c)})("delete",function(c){return t.delete(c)}),a()()),e&2&&(l(2),m("ngModel",t.value),l(1),m("disabled",!t.value),l(1),P(" ",t.editInfo?"Update":"Submit"," "),l(1),m("disabled",!(t.value||t.editInfo)),l(2),m("items",t.items))},dependencies:[D,k,x,w,S,A,I,E],styles:[".App[_ngcontent-%COMP%]{margin:auto}.App[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;padding:.5rem .75rem;border-radius:6px;transform:scale(1);transition:all .33s;border:none}.App[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{transform:scale(1.1);transition:all .33s}.App[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed;transform:scale(1);background-color:gray}.App[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin-top:10px;width:100%}.App[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:80%;border-radius:6px;padding:.5rem}.App[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px;background-color:#00f;margin-right:.5rem}@media screen and (min-width: 768px){.App[_ngcontent-%COMP%]{width:50%}}"],changeDetection:0});let o=n;return o})();export{K as TodoAppComponent};