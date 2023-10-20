# Mega Project

# Appwrite Documentation : https://appwrite.io/docs/references/cloud/client-web/account

#
## introduce Which are use :
- ### App Write: Backend Services.
- ### TinyMCE React Component : Text Editor.
- ### HTML-React-Parser : HTML can`t direct rendring on web page. 
- ### React Hook Form : Handle I/P Forms.
- ### Create-React-App.dev/ Vitejs.dev : Environment Vriable.

## Termnal Add Dependencys:
- ### redux-toolkit : npm install @reduxjs/toolkit
- ### react-redux : npm install react-redux
- ### react-router-dom : npm i react-router-dom
- ### appwrite : npm i appwrite
- ### tinymce/tinymce-react : npm i @tinymce/tinymce-react
- ### html-react-parser : npm i html-react-parser
- ### react-hook-form : npm i react-hook-form

#
### step 1: understand Environment variables:
- jo ki  project k root me hone chahiye like a README.md File. as called a project ka home directory.
- .env NOTE: .(DOT) its most important
- if you are push project on GitHub then Remember do not push a .env file. to add Gitignore file.
- jab bhi ham (.env) file me koi update karte he tab maximum case me project ko dobara run karna padta he.

### step 1: understand Vender Lokin :
- jab kal apki app ka authontication nikal na chahe tab bhi app ki application chalti rahni chahiye....
- introduced class Concept.  Make a services...

#
#
# step 2: appwrite multiple services are available like a Database, authentiation, upload/ download that are all discuss....
- > ###  vendor lock-in : situation where the cost of switching to a different vendor is so high that the customer is essentially stuck with the original vendor.

- > ### jAB APP KA AUTHENTICATION NIKAL NA PADE ISS BAR TO BHI APP AKI APPLICATION CHAL PAI AURR KOI PROBLEM NAHI AAA PAI.

- > ### concept introduce are services this is  make a using   class . vhan se method export karte he un method ke ander kya hota he usee usko nahi fark padta . jab ki app appwirite/ firebase / my custom data se bat karu isss se bai application se matt=lab nahi hota he.
 
```js
import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const account = new Account(client);

const promise = account.create('[USER_ID]', 'email@example.com', '');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

```
#
# introduced Higher Component : React componet.

# forward ref hook : 
# introduce more hook advance like a forwordRef Hook : ham 1 login form bana rhe he . usme input field alag he vohi same input filed usename, password, sab jagah use kareenge or yhan login page hee par uski state ka access ho mu j yahan chahiye to us k liye refrence dena padega vahn kam ata he rect ka hook forward refrence.

# introduce react hook form . react hook form in production : component/Login.jsx 
# introduce real time editor. Adding Form and slug values

# Introduce core errrors. debugging.


