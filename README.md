# Web Tools

Browser based tools for developers.

## Run in dev mode

```sh
npm run dev
```

View the result at http://localhost:3000/web-tools.

## Running a production build locally

Remove any previous build:
```sh
rm -rf doc-root
```

Build the project & put the build output in a folder structure that matches GitHub pages:
```sh
npm run build
mkdir doc-root
mv out doc-root/web-tools
```

Serve production build:
```sh
npx http-server doc-root
```

View the result at http://localhost:8080/web-tools/.
