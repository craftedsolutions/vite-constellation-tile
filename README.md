# Constellation POC

## Creating a Tile
We have a folder called "simple-vite" that is the boilerplate project that is used to jump start other tiles. It has several configurations in it that are required to get an app to run. Please only copy the folder. Do not modify it unless you know *exactly* what you are doing

## Styling
You'll need to upload a tile.less file. In there, you can make modifications to the styles that you wish your tile to have. In addition, you can leverage style variables that are inherent to the credit union. These colors are defined in the "UI Configuration" portion of the credit union's portal. In our development portal, enter the context of your test credit union, go to "Configure Container" and click on "UI Configuration". Near the bottom of the page you'll find all of the variables that are injected into the tile.

When the tile is run, CDP automatically adds a link tag to your `<head>` to the compiled stylesheet. There is no need to add the link yourself.

[https://developer.cdp.wiki/en/Tiles/Theming](https://developer.cdp.wiki/en/Tiles/Theming)

## Troubleshooting

### Tile won't display
`
<style>
  body {
    display: flex;
  }
</style>
`

### index.html won't upload
Make sure that DOCTYPE is all upper case:
`
<!DOCTYPE html>
`

### Can't see tile logs
Open the console and under the tab for "Console" there is a dropdown that allows you to pick what container object you want to recieve logs from. As you hover over the different containers, you will see them get highlighted in the UI. Select the top most container that only contains your tile. In most cases this will look like a GUID