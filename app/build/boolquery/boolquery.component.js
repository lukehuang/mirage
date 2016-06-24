System.register(["@angular/core", "../singlequery/singlequery.component", '../editable/editable.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, singlequery_component_1, editable_component_1;
    var BoolqueryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (singlequery_component_1_1) {
                singlequery_component_1 = singlequery_component_1_1;
            },
            function (editable_component_1_1) {
                editable_component_1 = editable_component_1_1;
            }],
        execute: function() {
            BoolqueryComponent = (function () {
                function BoolqueryComponent() {
                    this.queryList = this.queryList;
                    this.removeArray = [];
                    this.query = this.query;
                }
                BoolqueryComponent.prototype.ngOnInit = function () {
                    this.exeBuild();
                };
                BoolqueryComponent.prototype.addSubQuery = function (id) {
                    this.addBoolQuery(id);
                };
                BoolqueryComponent.prototype.removeInQuery = function (id) {
                    var resulQueries = this.result.resultQuery.result;
                    this.removeArray.push(id);
                    var removeFlag = true;
                    resulQueries.forEach(function (v, i) {
                        if (v.parent_id == id) {
                            this.removeInQuery(v.id);
                            removeFlag = false;
                        }
                    }.bind(this));
                    if (removeFlag) {
                        this.removeArray.forEach(function (remove_q) {
                            resulQueries.forEach(function (v, i) {
                                if (v.id == remove_q) {
                                    resulQueries.splice(i, 1);
                                }
                            }.bind(this));
                        }.bind(this));
                    }
                    this.buildQuery();
                };
                BoolqueryComponent.prototype.exeBuild = function () {
                    var _this = this;
                    setTimeout(function () { return _this.buildQuery(); }, 300);
                };
                BoolqueryComponent.prototype.booleanChange = function (boolVal) {
                    this.query.boolparam = boolVal;
                    this.exeBuild();
                };
                BoolqueryComponent.prototype.show_hidden_btns = function (event) {
                    $('.bool_query').removeClass('show_hidden');
                    $(event.currentTarget).addClass('show_hidden');
                    event.stopPropagation();
                };
                BoolqueryComponent.prototype.hide_hidden_btns = function () {
                    $('.bool_query').removeClass('show_hidden');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BoolqueryComponent.prototype, "mapping", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BoolqueryComponent.prototype, "types", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BoolqueryComponent.prototype, "selectedTypes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BoolqueryComponent.prototype, "result", void 0);
                BoolqueryComponent = __decorate([
                    core_1.Component({
                        selector: 'bool-query',
                        templateUrl: './app/build/boolquery/boolquery.component.html',
                        inputs: ['mapping', 'types', 'selectedTypes', 'result', 'config', 'query', 'queryList', 'addQuery', 'removeQuery', 'addBoolQuery', 'queryFormat', 'buildQuery', 'buildInsideQuery', 'buildSubQuery', 'createQuery', 'setQueryFormat', 'editorHookHelp', 'urlShare'],
                        directives: [BoolqueryComponent, singlequery_component_1.SinglequeryComponent, editable_component_1.EditableComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BoolqueryComponent);
                return BoolqueryComponent;
            }());
            exports_1("BoolqueryComponent", BoolqueryComponent);
        }
    }
});
//# sourceMappingURL=boolquery.component.js.map