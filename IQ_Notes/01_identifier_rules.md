# JavaScript Identifier Rules

JavaScript identifiers are names used for variables, functions, classes, and other user-defined objects. The following rules apply:

| Rule | Description | Example |
|---|---|---|
| Start with a letter, `$`, or `_` | Identifiers cannot start with a digit | `myVar`, `_count`, `$price` |
| May contain letters, digits, `$`, or `_` | After the first character, digits are allowed | `item1`, `name_2`, `$total3` |
| Case-sensitive | `count`, `Count`, and `COUNT` are distinct | `let value = 5; let Value = 6;` |
| Cannot be a reserved keyword | Keywords like `var`, `let`, `class`, `function` are invalid identifiers | Invalid: `let let = 1;` |
| No spaces or punctuation | Identifiers cannot include spaces, hyphens, or punctuation characters | Invalid: `my var`, `my-var` |
| Unicode letters allowed | Identifiers can use Unicode letter characters, including emoji in modern JS | `let café = 1; let π = 3.14;` |
| Cannot use reserved words in strict mode | Some words are reserved only in strict mode, such as `implements` and `package` | Avoid reserved strict mode words in modern code |
| Must be unique within scope | Identifiers in the same scope cannot redeclare each other | `let a = 1; let a = 2;` is invalid |

## Best Practices

- Use descriptive names: `totalCount`, `userName`, `isVisible`
- Prefer `camelCase` for variables and functions
- Use `PascalCase` for classes and constructor functions
- Avoid single-letter names except in loops or short-lived values
- Keep identifiers readable and meaningful
