import * as Lint from "tslint"
import * as ts from "typescript"
import * as tsutils from "tsutils"

// tslint:disable-next-line: typedef
function isUpperCase(str) {
    return str === str.toUpperCase();
}

// checks if the passed name is PascalCased
// tslint:disable-next-line: typedef
function isPascalCased(name) {
    return isUpperCase(name[0]) && !name.includes("_") && !name.includes("-");
}
function isFiltered({ statements }: ts.Block): any {
    return statements[0];

}

// A class name with Rule must be exported by Rule files, and it must extend `Lint.Rules.AbstractRule`. 
export class Rule extends Lint.Rules.AbstractRule {

    // This provides configuration and information about what the Rule does and the settings to expect.
    public static metadata: Lint.IRuleMetadata = {

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
    }

    // This provides the text description to be displayed when the lint Rule is failed by the class.
    public static FAILURE_STRING = "null value should be checked before calling function";

    // This is the method every Rule must implement.
    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new ClassNamePascalWalker(sourceFile, Rule.metadata.ruleName, void this.getOptions()))
    }
}

class ClassNamePascalWalker extends Lint.AbstractWalker {
    // tslint:disable-next-line: typedef
    public walk(sourceFile: ts.SourceFile) {

        const cb = (node: ts.Node): void => {
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
                    const nodeText = node.getFullText();
                    const i = nodeText.indexOf('.toString()');
                    const caller = nodeText.substring(0, i);
                    if (node.parent.kind === ts.SyntaxKind.ConditionalExpression) {
                        const parentText = node.parent.getFullText();
                        const condition = tsutils.getPreviousToken(tsutils.getPreviousToken(node)).getFullText();
                        // tslint:disable-next-line: triple-equals
                        if (caller.trim() !== condition.trim()) {
                            this.addFailureAtNode(node, Rule.FAILURE_STRING);
                        }
                    } else {
                        this.addFailureAtNode(node, Rule.FAILURE_STRING);
                    }
                    // this.addFailureAtNode(node, node.parent.kind.toString() + ts.SyntaxKind.BinaryExpression + ts.SyntaxKind.CallExpression + ts.SyntaxKind.ConditionalExpression);
                }
            }
            return ts.forEachChild(node, cb);


        };

        return ts.forEachChild(sourceFile, cb);
    }
}
