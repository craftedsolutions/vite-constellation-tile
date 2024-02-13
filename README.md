# CDP React Tile Example

## Installation and Running Locally
Using the command `npm i && npm run dev` will run the tile locally.

### Mocking
Locally we mock the container from `mock/mock_container.js` and pull it in via `container.ts`. Place your mocked call in `mock_container.js` (along with any return data) and they will be injected into your local development environment.

[https://developer.cdp.wiki/en/Tiles/ContainerAPI](https://developer.cdp.wiki/en/Tiles/ContainerAPI)

## Styling
There is a `tile.local.css` located in the public directory for local styling. Upon upload, CDP will inject those same variables into the `tile.less`, compile it and link the output via `tile.css` at run time. You can see changes in the colors for your credit union by manipulating the values in the "UI Configuration" portion of the credit union's portal. 

[https://developer.cdp.wiki/en/Tiles/Theming](https://developer.cdp.wiki/en/Tiles/Theming)

> [!TIP]
> In your development portal, enter the context of your test credit union, go to "Configure Container" and click on "UI Configuration". Near the bottom of the page you'll find all of the variables that are injected into the tile. 

## Deployment
Running `npm run build` will populate the `dist` directory with all needed files. After the build runs, upload all files into the CDP project portal. 

> [!TIP]
> In this particular example, the mocked calls all require authentication, so ensure you add it to the authenticated group of your credit union

