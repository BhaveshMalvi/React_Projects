# 1. CUSTOM REACT


###  INDEX.HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom react</title>
</head>
<body>
    <div id="root"></div>
    <script src="./customreact.js"></script>
</body>
</html>
```


### CustomReact.js
```jsx
function customRender(reactElement, container){
/*
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
domElement.setAttribute('href', reactElement.props.href)
domElement.setAttribute('target', reactElement.props.terget)


container.appendChild(domElement)
*/
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props) {
        if(prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        terget : "_blank"
    },
    children : "Click me to visit google"
}
const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer)
```