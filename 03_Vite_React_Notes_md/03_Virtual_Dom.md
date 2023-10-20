# 3. VIRTUAL DOM
- LINK : https://www.geeksforgeeks.org/reactjs-virtual-dom/
### What is Virtual DOM?
- > React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. 

- > Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM. 
How does virtual DOM actually make things faster?
When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.

### Reconciliation

- >The reconciliation process makes React work faster. Reconciliation is the process through which React updates the Browser DOM.  (1) Virtual DOM (2) Differentiation Algorithm.

Important concepts behind the working of the ReconciliatFiberion process are:
### Fiber
- React Fiber is a concept of ReactJS that is used to render a system faster and smoother. React is one of the popular JavaScript library used to create a responsive user interface. React makes coding simple as compared to other frameworks. After certain changes who is the next element to render the system called reconciler. This algorithm helps to compare two DOM trees and diff them. React fiber helps to do it better.

<img src="images_md/image.png" width="500px">