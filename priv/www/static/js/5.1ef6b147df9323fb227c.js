webpackJsonp([5],{"7NNH":function(e,t){},"q+s5":function(e,t){},xPbZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),r=s.n(i),o=s("JaHG"),n={name:"resource-dialog",inheritAttrs:!1,props:{visible:{type:Boolean,required:!0}},data:function(){return{paramsList:[],resourceRules:{},resourceTypes:[],record:{name:"",type:"",config:{},description:""}}},methods:{close:function(){this.$refs.record&&this.$refs.record.resetFields()},handleCreate:function(){var e=this;this.$refs.record.validate(function(t){t&&e.$httpPost("/resources",e.record).then(function(t){e.$message.success(e.$t("rule.create_success")),e.dialogVisible=!1,e.$emit("confirm",t.data)})})},handleTypeChange:function(e){this.paramsList=[],this.resourceRules={};var t=this.resourceTypes.find(function(t){return t.name===e});if(t){var s=Object(o.a)(t.params,"config"),i=s.model,r=s.rules;this.resourceRules=r,this.paramsList=i,this.initRecord()}},initRecord:function(){var e=this;0===this.paramsList.length?this.$set(this.record,"config",void 0):this.record.config||this.$set(this.record,"config",{}),this.paramsList.forEach(function(t){e.$set(e.record.config,t.key,t.defaultValue)}),setTimeout(function(){e.$refs.record.clearValidate()},30)},loadResourceTypes:function(){var e=this;this.$httpGet("/resource_types").then(function(t){e.resourceTypes=t.data,e.handleTypeChange(e.record.type),setTimeout(function(){e.$refs.record.clearValidate()},30)})}},created:function(){},computed:{dialogVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},rules:function(){return r()({name:{required:!0},type:{required:!0}},this.resourceRules)}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",e._b({staticClass:"resource-dialog",attrs:{width:"700px",visible:e.dialogVisible,title:e.$t("rule.resource_mgmt")},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close,open:e.loadResourceTypes}},"el-dialog",e.$attrs,!1),[s("el-form",{ref:"record",staticClass:"el-form--public",attrs:{model:e.record,rules:e.rules}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"name",label:e.$t("rule.name")}},[s("el-input",{model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"type",label:e.$t("rule.resource_type")}},[s("el-select",{staticClass:"el-select--public",staticStyle:{width:"100%"},attrs:{"popper-class":"el-select--public"},on:{change:e.handleTypeChange},model:{value:e.record.type,callback:function(t){e.$set(e.record,"type",t)},expression:"record.type"}},e._l(e.resourceTypes,function(e,t){return s("el-option",{key:t,attrs:{label:e.name,value:e.name}})}),1)],1)],1),e._v(" "),e._l(e.paramsList,function(t,i){return s("el-col",{key:i,attrs:{span:"object"===t.type?24:12}},[s("el-form-item",{attrs:{prop:"config."+t.prop}},[s("template",{slot:"label"},[e._v("\n            "+e._s(t.label)+"\n\n            "),t.description?s("el-popover",{attrs:{placement:"right",width:"200",trigger:"hover"}},[e._v("\n              "+e._s(t.description)+"\n              "),s("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})]):e._e()],1),e._v(" "),"object"===t.type?s("data-table",{model:{value:e.record.config[t.key],callback:function(s){e.$set(e.record.config,t.key,s)},expression:"record.config[item.key]"}}):"emq-select"===t.type?s("emq-select",e._b({staticClass:"el-select--public",attrs:{"popper-class":"el-select--public"},model:{value:e.record.config[t.key],callback:function(s){e.$set(e.record.config,t.key,s)},expression:"record.config[item.key]"}},"emq-select",t.$attrs,!1)):s("el-input",e._b({model:{value:e.record.config[t.key],callback:function(s){e.$set(e.record.config,t.key,s)},expression:"record.config[item.key]"}},"el-input",t.$attrs,!1))],2)],1)}),e._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{prop:"description",label:e.$t("rule.description")}},[s("el-input",{model:{value:e.record.description,callback:function(t){e.$set(e.record,"description",t)},expression:"record.description"}})],1)],1)],2)],1),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"cache-btn",attrs:{type:"text"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("\n      "+e._s(e.$t("rule.cancel"))+"\n    ")]),e._v(" "),s("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:e.handleCreate}},[e._v("\n      "+e._s(e.$t("rule.create"))+"\n    ")])],1)],1)},staticRenderFns:[]};var a={name:"resources-view",components:{ResourceDialog:s("VU/8")(n,l,!1,function(e){s("7NNH")},null,null).exports},props:{},data:function(){return{dialogVisible:!1,viewDialogVisible:!1,tableData:[],res:{}}},methods:{handleDelete:function(e){var t=this;this.$confirm(this.$t("rule.confirm_stop_delete"),"Notice",{confirmButtonClass:"confirm-btn",confirmButtonText:this.$t("oper.confirm"),cancelButtonClass:"cache-btn el-button--text",cancelButtonText:this.$t("oper.cancel"),type:"warning"}).then(function(){t.$httpDelete("/resources/"+e.id).then(function(){t.$message.success(t.$t("rule.delete_success")),t.loadData()})}).catch()},viewResource:function(e){this.res=r()({},e),this.viewDialogVisible=!0},handleOperation:function(){this.dialogVisible=!0},loadData:function(){var e=this;this.$httpGet("/resources").then(function(t){e.tableData=t.data})}},created:function(){this.loadData()}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"resources-view"},[s("div",{staticClass:"page-title"},[e._v("\n    "+e._s(e.$t("rule.resource_title"))+"\n    "),s("el-button",{staticClass:"confirm-btn",staticStyle:{float:"right"},attrs:{round:"",plain:"",type:"success",icon:"el-icon-plus",size:"medium",disable:e.$store.state.loading},on:{click:e.handleOperation}},[e._v("\n      "+e._s(e.$t("rule.create"))+"\n    ")])],1),e._v(" "),s("el-table",{attrs:{border:"",data:e.tableData}},[s("el-table-column",{attrs:{prop:"name",label:e.$t("rule.resource_name")}}),e._v(" "),s("el-table-column",{attrs:{prop:"type",label:e.$t("rule.resource_type")}}),e._v(" "),s("el-table-column",{attrs:{prop:"description",label:e.$t("rule.description")}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("rule.oper")},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[s("el-button",{attrs:{plain:"",type:"success",size:"mini"},on:{click:function(t){return e.viewResource(i)}}},[e._v("\n          "+e._s(e.$t("rule.view"))+"\n        ")]),e._v(" "),s("el-button",{attrs:{plain:"",size:"mini",type:"warning"},on:{click:function(t){return e.handleDelete(i)}}},[e._v("\n          "+e._s(e.$t("rule.delete"))+"\n        ")])]}}])})],1),e._v(" "),s("resource-dialog",{ref:"resourceDialog",attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},confirm:e.loadData}}),e._v(" "),s("el-dialog",{attrs:{title:e.$t("rule.resource_details"),visible:e.viewDialogVisible},on:{"update:visible":function(t){e.viewDialogVisible=t}}},[s("div",{staticClass:"dialog-preview"},[s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[e._v("\n          "+e._s(e.$t("rule.resource_name"))+"\n        ")]),e._v(" "),s("div",{staticClass:"option-value"},[e._v(e._s(e.res.name))])]),e._v(" "),s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[e._v("\n          "+e._s(e.$t("rule.resource_type"))+"\n        ")]),e._v(" "),s("div",{staticClass:"option-value"},[e._v(e._s(e.res.type))])]),e._v(" "),s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[e._v("\n          "+e._s(e.$t("rule.description"))+"\n        ")]),e._v(" "),s("div",{staticClass:"option-value"},[e._v(e._s(e.res.description))])]),e._v(" "),e.res.config&&Object.keys(e.res.config).length>0?s("div",{staticClass:"option-item"},[s("div",{staticClass:"option-title"},[e._v("\n          "+e._s(e.$t("rule.config_info"))+"\n        ")]),e._v(" "),s("div",{staticClass:"option-all"},e._l(Object.entries(e.res.config),function(t,i){return s("div",{key:i,staticClass:"option-item"},["object"!=typeof t[1]||Array.isArray(t[1])?[s("div",{staticClass:"option-title"},[e._v("\n                "+e._s(t[0])+"\n              ")]),e._v(" "),s("div",{staticClass:"option-value"},[e._v("\n                "+e._s(t[1])+"\n              ")])]:[s("div",{staticClass:"option-title"},[e._v("\n                "+e._s(t[0])+"\n              ")]),e._v(" "),s("div",{staticClass:"option-value"},[t[1]&&0!==Object.keys(t[1]).length?s("data-table",{staticStyle:{"margin-top":"0"},attrs:{disabled:""},model:{value:t[1],callback:function(s){e.$set(t,1,s)},expression:"item[1]"}}):s("span",[e._v("\n                  N/A\n                ")])],1)]],2)}),0)]):e._e()]),e._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{staticClass:"confirm-btn",attrs:{type:"success"},on:{click:function(t){e.viewDialogVisible=!1}}},[e._v("\n        "+e._s(e.$t("rule.confirm"))+"\n      ")])],1)])],1)},staticRenderFns:[]};var u=s("VU/8")(a,c,!1,function(e){s("q+s5")},null,null);t.default=u.exports}});