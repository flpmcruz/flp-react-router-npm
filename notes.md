## This project:

# Create a React Router Dom

# Create a i18n custom hook

# Create a customHook to useQueryParams

# Prepare to compile and publish to NPM

```
npm i -D @swc/cli @swc/core
```

- Create .swcrc configFile in the root with this configuration

```
{
  "$schema": "https://json.schemastore.org/swcrc",
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "jsx": true,
      "dynamicImport": false,
      "privateMethod": false,
      "functionBind": false,
      "exportDefaultFrom": false,
      "exportNamespaceFrom": false,
      "decorators": false,
      "decoratorsBeforeExport": false,
      "topLevelAwait": false,
      "importMeta": false
    },
    "transform": {
      "react": {
        "runtime": "automatic"
      }
    },
    "target": "es2020",
    "loose": true,
    "externalHelpers": false,
    // Requires v1.2.50 or upper and requires target to be es2016 or upper.
    "keepClassNames": false
  },
  "minify": true
}

```

- Paste script

```
swc ./src/*.jsx -d lib
```
