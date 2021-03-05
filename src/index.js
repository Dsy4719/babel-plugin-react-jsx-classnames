import { addDefault } from '@babel/helper-module-imports';

export default function ({ types: t }) {
  return {
    visitor: {
      JSXAttribute(path, state) {
        if (
          t.isJSXIdentifier(path.node.name, { name: 'className' }) &&
          t.isJSXExpressionContainer(path.node.value) &&
          !t.isStringLiteral(path.node.value.expression) &&
          !t.isMemberExpression(path.node.value.expression)
        ) {
          path.node.value = t.jsxExpressionContainer(
            t.callExpression(
              addDefault(path, 'classnames', { nameHint: 'classNames' }),
              [path.node.value.expression]
            )
          );
        }
      },
    }
  };
}
