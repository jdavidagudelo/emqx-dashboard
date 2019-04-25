webpackJsonp([1],{JaHG:function(e,t,r){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[],a="",s=i()({},t,{});return n()(e).forEach(function(e){var n=u()(e,2),i=n[0],o=n[1];if("$resource"!==i){var c=o.title,l=o.format,f=o.enum,m=o.type,v=o.description,h=o.default;p.includes(l)&&(v={url:"http://"}[l]||v);var b={placeholder:"object"===m||v.length>12?"":v};b.placeholder&&(v=""),f&&(m="emq-select",b.field={options:f.map(function(e){return{value:e,label:e}})}),"object"===m&&(h={}),r.push({key:i,type:m,label:c||i,prop:i,defaultValue:h,$attrs:b,description:v}),t?s[t][i]=d(e):s[i]=d(e)}else a="string"}),{model:r,rules:s,resource:a}};var a=r("W3Iv"),n=r.n(a),s=r("bOdI"),i=r.n(s),o=r("fZjL"),c=r.n(o),l=r("d7EF"),u=r.n(l),p=["string","number","boolean","method","regexp","integer","float","array","object","enum","date","url","hex","email"];function d(e){var t=u()(e,2),r=t[0],a=t[1],n=a.title,s=a.type,i=a.format,o=a.required,l=a.enum,d={};return o&&(d.required=!0,d.message=(n||r)+" is required"),d.type=s,p.includes(i)&&(d.type=i),d.enum="enum"===s?l:void 0,c()(d).length>0?d:void 0}},dTZc:function(e,t){},eDC2:function(e,t,r){"use strict";var a=r("mvHQ"),n=r.n(a),s=r("d7EF"),i=r.n(s),o=r("W3Iv"),c=r.n(o),l=r("Xxa5"),u=r.n(l),p=r("exGp"),d=r.n(p),f=r("Dd8w"),m=r.n(f),v=r("fZjL"),h=r.n(v),b=r("pFYg"),_=r.n(b),y=r("JaHG"),$={name:"action-dialog",inheritAttrs:!1,components:{},props:{visible:{type:Boolean,required:!0},formData:{type:Object},currentActions:{type:Array,default:function(){return[]}},params:{type:Object,default:function(){return{for:"$messages"}}}},data:function(){return{record:{params:{}},rules:{action:{required:!0},params:{$resource:{required:!0,message:"Resource is required"}}},options:[],action:{},actionsList:[],paramsList:[]}},methods:{_isEmpty:function(e){return!e||(!(!Array.isArray(e)||0!==e.length)||("object"===(void 0===e?"undefined":_()(e))?0===h()(e).length:!!e))},close:function(){this.$refs.record&&(this.options={},this.action={},this.paramsList=[],this.$refs.record.resetFields())},handleAdd:function(){var e=this;this.$refs.record.validate(function(t){if(t){var r=e.record,a=r.params,s={name:r.action,params:m()({},a)},i=n()(s);e.currentActionsMap[i]?e.$message.error(e.$t("rule.action_exists")):(e.$emit("confirm",s),e.dialogVisible=!1)}})},handleActionChange:function(e){var t=this;if(this.paramsList=[],this.action=this.actionsList.find(function(t){return t.name===e}),this.action){var r=Object(y.a)(this.action.params),a=r.model,n=void 0===a?[]:a,s=r.rules,i=void 0===s?{}:s;return this.paramsList=n,this.rules.params=m()({},this.rules.params,i),n.forEach(function(e){var r=e.key,a=e.defaultValue;t.$set(t.record,"params."+r,a||void 0)}),this.loadResource()}},loadResource:function(){var e=this;if(this.action&&this.action.params&&this.action.params.$resource){var t=this.action.type;return this.$httpGet("/resources").then(function(r){var a=r.data;e.options=a.filter(function(e){return e.type===t}),e.$set(e.record,"resource",void 0)})}},loadActions:function(){var e=this;return this.$httpGet("/actions",this.params).then(function(t){e.actionsList=t.data})},renderForm:function(e){var t=this;return d()(u.a.mark(function r(){var a,n,s,i;return u.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(t.formData){r.next=2;break}return r.abrupt("return");case 2:return a=t.formData||e,n=a.name,s=a.params,i=void 0===s?{}:s,r.next=5,t.handleActionChange(n);case 5:t.fillData(i);case 6:case"end":return r.stop()}},r,t)}))()},fillData:function(e){var t=this;c()(e).forEach(function(e){var r=i()(e,2),a=r[0],n=r[1];t.$set(t.record,a,n)})},open:function(e){var t=this;return d()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.record.params={},e.next=3,t.loadActions();case 3:case"end":return e.stop()}},e,t)}))()}},created:function(){var e=this;return d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadActions();case 2:return t.next=4,e.renderForm();case 4:case"end":return t.stop()}},t,e)}))()},computed:{dialogVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},currentActionsMap:function(){var e={};return this.currentActions.forEach(function(t){var r=n()(t);e[r]=!0}),e}}},g={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",e._b({staticClass:"action-dialog",attrs:{width:"500px","append-to-body":"",visible:e.dialogVisible,title:e.$t("rule.actions")},on:{"update:visible":function(t){e.dialogVisible=t},open:e.open,close:e.close}},"el-dialog",e.$attrs,!1),[r("el-form",{ref:"record",staticClass:"el-form--public",attrs:{model:e.record,rules:e.rules}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"action",label:e.$t("rule.action")}},[r("el-select",{staticClass:"el-select--public",staticStyle:{width:"100%"},attrs:{"popper-class":"el-select--public"},on:{change:e.handleActionChange},model:{value:e.record.action,callback:function(t){e.$set(e.record,"action",t)},expression:"record.action"}},e._l(e.actionsList,function(t,a){return r("el-option",{key:a,attrs:{label:t.name,value:t.name}},[r("div",[r("span",[e._v(e._s(t.name))]),e._v(" "),r("p",[e._v(e._s(t.description))])])])}),1)],1)],1),e._v(" "),e.action.params&&e.action.params.$resource?r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"params.$resource",label:e.$t("rule.resource")}},[r("el-select",{staticClass:"el-select--public",staticStyle:{width:"100%"},attrs:{"popper-class":"el-select--public"},model:{value:e.record.params.$resource,callback:function(t){e.$set(e.record.params,"$resource",t)},expression:"record.params.$resource"}},e._l(e.options,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.id}})}),1)],1)],1):e._e(),e._v(" "),e._l(e.paramsList,function(t,a){return r("el-col",{key:a,attrs:{span:"object"===t.type?24:12}},[r("el-form-item",{attrs:{prop:"params."+t.prop}},[r("template",{slot:"label"},[e._v("\n            "+e._s(t.label)+"\n\n            "),t.description?r("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[e._v("\n              "+e._s(t.description)+"\n              "),r("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1),e._v(" "),"object"===t.type?r("data-table",{model:{value:e.record.params[t.key],callback:function(r){e.$set(e.record.params,t.key,r)},expression:"record.params[item.key]"}}):"emq-select"===t.type?r("emq-select",e._b({staticClass:"el-select--public",attrs:{"popper-class":"el-select--public"},model:{value:e.record.params[t.key],callback:function(r){e.$set(e.record.params,t.key,r)},expression:"record.params[item.key]"}},"emq-select",t.$attrs,!1)):r("el-input",e._b({model:{value:e.record.params[t.key],callback:function(r){e.$set(e.record.params,t.key,r)},expression:"record.params[item.key]"}},"el-input",t.$attrs,!1))],2)],1)})],2)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n      "+e._s(e.$t("rule.cancel"))+"\n    ")]),e._v(" "),r("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:e.handleAdd}},[e._v("\n      "+e._s(e.$t("rule.confirm"))+"\n    ")])],1)],1)},staticRenderFns:[]};var k={name:"rule-actions",components:{ActionDialog:r("VU/8")($,g,!1,function(e){r("dTZc")},null,null).exports},props:{record:{type:Object,required:!0},inDialog:{type:Boolean,default:!1},operations:{type:Array,default:function(){return["create","edit","delete"]}},params:{type:Object,default:function(){return{for:"$messages"}}}},data:function(){return{dialogVisible:!1}},filters:{jsonFormat:function(e){return n()(e,null,2)}},methods:{handleActionAdd:function(e){this.record.actions.push(e)},handleRemove:function(e){var t=e.$index;this.record.actions=this.record.actions.filter(function(e,r){return r!==t})}},created:function(){},computed:{has:function(){var e=[];return this.operations.forEach(function(t){e[t]=!0}),e}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rule-actions"},[r("el-table",{class:{"el-table--public":e.inDialog},attrs:{border:"",data:e.record.actions}},[r("el-table-column",{attrs:{prop:"name",label:e.$t("rule.type")}}),e._v(" "),r("el-table-column",{attrs:{prop:"params",label:e.$t("rule.value")},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return e._l(Object.entries(a.params),function(t,a){return r("div",{key:a,staticClass:"action-item"},[e._v("\n          "+e._s("$resource"===t[0]?e.$t("rule.rely_resource"):t[0])+": "+e._s(t[1])+"\n        ")])})}}])}),e._v(" "),e.has.delete||e.has.edit?r("el-table-column",{attrs:{label:e.$t("rule.oper")},scopedSlots:e._u([{key:"default",fn:function(t){return[e.has.delete?r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.handleRemove(t)}}},[e._v("\n          "+e._s(e.$t("rule.delete"))+"\n        ")]):e._e(),e._v(" "),e.has.edit?r("el-button",{attrs:{type:"text"}},[e._v(e._s(e.$t("rule.edit")))]):e._e()]}}],null,!1,2514070549)}):e._e()],1),e._v(" "),e.has.create?r("el-button",{staticStyle:{"margin-top":"24px","min-width":"80px"},attrs:{type:"success",plain:"",icon:"el-icon-plus",size:"small"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("\n    "+e._s(e.$t("rule.add"))+"\n  ")]):e._e(),e._v(" "),r("action-dialog",{attrs:{visible:e.dialogVisible,currentActions:e.record.actions,params:e.params},on:{"update:visible":function(t){e.dialogVisible=t},confirm:e.handleActionAdd}})],1)},staticRenderFns:[]};var A=r("VU/8")(k,x,!1,function(e){r("vnzP")},null,null);t.a=A.exports},vnzP:function(e,t){}});