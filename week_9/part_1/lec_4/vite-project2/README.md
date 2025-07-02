When rendering lists, each item should have a unique key prop for React to track changes efficiently.

Earlier, React code was written using `Class based` components. Slowly functional components were introduced and today they are the ones you’ll se everywhere.

Ref - https://github.com/processing/p5.js-web-editor/issues/2358

Class components are  classes that extend `React.Component`, while functional components are simpler and can use Hooks.





ERROR BOUNDARY - 

Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.

Error boundaries only exist in class based components


suppose we have a linkedin type page , and we faced some error
in fetching messages , so we dont want our entire oage
to go down
we only want the messages section to fallback to some
error handling to display somehting like error occured
and a refresh messages option



FRAGMENTS-

In React, a component can return a single parent element, but it can contain multiple children within that single parent
