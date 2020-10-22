"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Lint = require("tslint");
var ts = require("typescript");
var tsutils = require("tsutils");
// tslint:disable-next-line: typedef
function isUpperCase(str) {
    return str === str.toUpperCase();
}
// checks if the passed name is PascalCased
// tslint:disable-next-line: typedef
function isPascalCased(name) {
    return isUpperCase(name[0]) && !name.includes("_") && !name.includes("-");
}
function isFiltered(_a) {
    var statements = _a.statements;
    return statements[0];
}
// A class name with Rule must be exported by Rule files, and it must extend `Lint.Rules.AbstractRule`. 
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // This is the method every Rule must implement.
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new ClassNamePascalWalker(sourceFile, Rule.metadata.ruleName, void this.getOptions()));
    };
    // This provides configuration and information about what the Rule does and the settings to expect.
    Rule.metadata = {
        // The name of the Rule in kebab-case, this is what users will 
        // provided in tslint.json at the "rules" section to add this Rule to 
        // the project.
        ruleName: 'class-name-pascal',
        // Describes what the Rule does.
        description: "Enforces PascalCased class and interface names.",
        optionsDescription: "Not configurable.",
        options: null,
        type: "style",
        typescriptOnly: false
    };
    // This provides the text description to be displayed when the lint Rule is failed by the class.
    Rule.FAILURE_STRING = "null value should be checked before calling function";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ClassNamePascalWalker = /** @class */ (function (_super) {
    __extends(ClassNamePascalWalker, _super);
    function ClassNamePascalWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // tslint:disable-next-line: typedef
    ClassNamePascalWalker.prototype.walk = function (sourceFile) {
        var _this = this;
        var cb = function (node) {
            // if ((tsutils.isClassLikeDeclaration(node) && node.name !== undefined) ||
            //     tsutils.isInterfaceDeclaration(node)) {
            //     if (!isPascalCased(node.name.text)) {
            //         this.addFailureAtNode(node.name, );
            //     }
            // }
            if (!(tsutils.isDecorator(node)) && tsutils.isCallExpression(node)
                && !(tsutils.isArrowFunction(node))) {
                // const expr=tsutils.;
                if (node.expression.getFullText().includes('.toString')) {
                    var nodeText = node.getFullText();
                    var i = nodeText.indexOf('.toString()');
                    var caller = nodeText.substring(0, i);
                    if (node.parent.kind === ts.SyntaxKind.ConditionalExpression) {
                        var parentText = node.parent.getFullText();
                        var condition = tsutils.getPreviousToken(tsutils.getPreviousToken(node)).getFullText();
                        // tslint:disable-next-line: triple-equals
                        if (caller.trim() !== condition.trim()) {
                            _this.addFailureAtNode(node, Rule.FAILURE_STRING);
                        }
                    }
                    else {
                        _this.addFailureAtNode(node, Rule.FAILURE_STRING);
                    }
                    // this.addFailureAtNode(node, node.parent.kind.toString() + ts.SyntaxKind.BinaryExpression + ts.SyntaxKind.CallExpression + ts.SyntaxKind.ConditionalExpression);
                }
            }
            return ts.forEachChild(node, cb);
        };
        return ts.forEachChild(sourceFile, cb);
    };
    return ClassNamePascalWalker;
}(Lint.AbstractWalker));
