"use strict";(self["webpackChunklivraria_wda_web"]=self["webpackChunklivraria_wda_web"]||[]).push([[498],{2389:function(e,a,t){var i=t(1006);a["Z"]={buscarTodos:()=>i.Z.get("/editoras"),inserir:e=>i.Z.post("/editoras",e),alterar:(e,a)=>i.Z.put(`/editoras/${e}`,a),deletar:e=>i.Z["delete"](`/editoras/${e}`)}},160:function(e,a,t){t.r(a),t.d(a,{default:function(){return H}});var i=t(3396);const r={class:"main-container"};function l(e,a,t,l,o,n){const d=(0,i.up)("Editora");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(d)])}const o=e=>((0,i.dD)("data-v-59c136e9"),e=e(),(0,i.Cn)(),e),n={class:"table-content"},d={class:"table-header-header"},s=o((()=>(0,i._)("h2",{class:"table-tile"},"Editoras",-1))),c=(0,i.Uk)(" Ações "),u=(0,i.Uk)("Editar"),m=(0,i.Uk)("Deletar ");function p(e,a,t,r,l,o){const p=(0,i.up)("Modal"),h=(0,i.up)("el-input"),y=(0,i.up)("el-table-column"),w=(0,i.up)("el-button"),v=(0,i.up)("el-table");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(p,{class:"modal",onClose:r.toggleModal,onModalFunc:o.modalFunc,modalActive:r.modalActive,modalType:l.modalType,editoraAlterar:l.editoraAlterar},null,8,["onClose","onModalFunc","modalActive","modalType","editoraAlterar"]),(0,i._)("div",n,[(0,i._)("div",d,[s,(0,i._)("button",{class:"table-newitem-btn",onClick:a[0]||(a[0]=e=>(r.toggleModal(),o.changeModalType("inserir"))),type:"button"},"Novo"),(0,i.Wm)(h,{class:"table-search-input",modelValue:this.search,"onUpdate:modelValue":a[1]||(a[1]=e=>this.search=e),onKeydown:o.searchItem,placeholder:"Digite para pesquisar"},null,8,["modelValue","onKeydown"])]),(0,i.Wm)(v,{data:l.filterTableData,style:{width:"600px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{prop:"id",label:"ID",width:"80"}),(0,i.Wm)(y,{prop:"name",label:"Nome",width:"150"}),(0,i.Wm)(y,{prop:"city",label:"Cidade",width:"120"}),(0,i.Wm)(y,{width:"180",align:"center"},{header:(0,i.w5)((()=>[c])),default:(0,i.w5)((e=>[(0,i.Wm)(w,{onClick:a=>o.changeModalType("alterar",e.row)},{default:(0,i.w5)((()=>[u])),_:2},1032,["onClick"]),(0,i.Wm)(w,{type:"danger",onClick:a=>o.handleDelete(e.row)},{default:(0,i.w5)((()=>[m])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])])])}t(6699);var h=t(2389),y=t(9242);const w=e=>((0,i.dD)("data-v-31dd91ac"),e=e(),(0,i.Cn)(),e),v={class:"modal-wrapper"},g=w((()=>(0,i._)("h2",null,"Cadastrar editora",-1))),b={class:"input-container"},f=w((()=>(0,i._)("label",{for:"name-input"},"Nome da Editora:",-1))),k={class:"input-box"},_={class:"input-container"},A=w((()=>(0,i._)("label",{for:"city-input"},"Cidade da Editora:",-1))),T={class:"input-box"},C={class:"input-container"};function D(e,a,t,r,l,o){const n=(0,i.up)("BookshelfIcon"),d=(0,i.up)("MapMarkerIcon");return(0,i.wg)(),(0,i.j4)(y.uT,{name:"modal-animation"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("div",v,[(0,i.wy)((0,i._)("form",{id:"user-form",onSubmit:a[6]||(a[6]=e=>o.enviarFormulario(e))},[g,(0,i._)("div",b,[f,(0,i._)("div",k,["inserir"==t.modalType?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:"text",name:"name",id:"name-input","onUpdate:modelValue":a[0]||(a[0]=e=>l.editora.name=e)},null,512)),[[y.nr,l.editora.name]]):(0,i.kq)("",!0),"alterar"==t.modalType?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:"text",name:"name",id:"name-input","onUpdate:modelValue":a[1]||(a[1]=e=>t.editoraAlterar.name=e)},null,512)),[[y.nr,t.editoraAlterar.name]]):(0,i.kq)("",!0),(0,i.Wm)(n)])]),(0,i._)("div",_,[A,(0,i._)("div",T,["inserir"==t.modalType?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:0,type:"text",name:"city",id:"city-input","onUpdate:modelValue":a[2]||(a[2]=e=>l.editora.city=e)},null,512)),[[y.nr,l.editora.city]]):(0,i.kq)("",!0),"alterar"==t.modalType?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,type:"text",name:"city",id:"city-input","onUpdate:modelValue":a[3]||(a[3]=e=>t.editoraAlterar.city=e)},null,512)),[[y.nr,t.editoraAlterar.city]]):(0,i.kq)("",!0),(0,i.Wm)(d)])]),(0,i._)("div",C,[(0,i._)("input",{onClick:a[4]||(a[4]=e=>r.close()),class:"submit-btn",type:"button",value:"Fechar"}),(0,i._)("input",{onClick:a[5]||(a[5]=e=>o.changeModalConfig(t.modalType)),class:"cancel-btn",type:"submit",value:"Salvar"})])],544),[[y.F8,t.modalActive]])],512),[[y.F8,t.modalActive]])])),_:1})}var M=t(1986),Z=t(7139);const F=["aria-hidden","aria-label"],W=["fill","width","height"],I={d:"M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"},x={key:0};function U(e,a,t,r,l,o){return(0,i.wg)(),(0,i.iD)("span",(0,i.dG)({"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon map-marker-icon",role:"img"},e.$attrs,{onClick:a[0]||(a[0]=a=>e.$emit("click",a))}),[((0,i.wg)(),(0,i.iD)("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[(0,i._)("path",I,[t.title?((0,i.wg)(),(0,i.iD)("title",x,(0,Z.zw)(t.title),1)):(0,i.kq)("",!0)])],8,W))],16,F)}var E={name:"MapMarkerIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},V=t(89);const q=(0,V.Z)(E,[["render",U]]);var $=q,z={name:"Modal",components:{BookshelfIcon:M.Z,MapMarkerIcon:$},props:["modalActive","modalType","editoraAlterar"],setup(e,{emit:a}){const t=()=>{a("close")};return{close:t}},data(){return{editora:{id:"",name:"",city:""},editoraParaAlterar:this.editoraAlterar}},methods:{enviarFormulario(e){e.preventDefault(),this.close()},changeModalConfig(e){this.editoraParaAlterar=this.editoraAlterar,"inserir"==this.modalType&&this.$emit("modalFunc",this.modalType,this.editora),"alterar"==this.modalType&&this.$emit("modalFunc",this.modalType,this.editoraParaAlterar),this.editora={}}}};const N=(0,V.Z)(z,[["render",D],["__scopeId","data-v-31dd91ac"]]);var S=N,B=t(4870),P={name:"Editora",components:{Modal:S},setup(){const e=(0,B.iH)(!1),a=()=>{e.value=!e.value};return{modalActive:e,toggleModal:a}},data(){return{modalType:"",filterTableData:[],search:"",editoras:[],editoraAlterar:{}}},methods:{changeModalType(e,a){"inserir"==e&&(this.modalType="inserir"),"alterar"==e&&(this.editoraAlterar=a,this.modalType="alterar",this.toggleModal())},modalFunc(e,a){console.log(a),console.log(e),"inserir"==e&&this.inserir(a),"alterar"==e&&this.alterar(a)},handleDelete(e){this.deletar(e.id)},searchItem(){this.filterTableData=(0,i.Fl)((()=>this.editoras.filter((e=>!this.search||e.name.toLowerCase().includes(this.search.toLowerCase())))))},async buscarTodos(){await h.Z.buscarTodos().then((e=>{this.editoras=e.data.result}))},async inserir(e){await h.Z.inserir(e).then((e=>{this.reloadData()}))},async alterar(e){await h.Z.alterar(e.id,e).then((e=>{this.reloadData()}))},async deletar(e){await h.Z.deletar(e).then((e=>{this.reloadData()}))},reloadData(){setTimeout((()=>{this.buscarTodos()}),1e3)}},mounted(){this.buscarTodos(),this.searchItem()}};const K=(0,V.Z)(P,[["render",p],["__scopeId","data-v-59c136e9"]]);var L=K,j={components:{Editora:L}};const G=(0,V.Z)(j,[["render",l]]);var H=G}}]);
//# sourceMappingURL=editora.c2effdf8.js.map