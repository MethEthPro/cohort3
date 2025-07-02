we try to give our page a fixed layout

something like

header

body -- this will change as we switcth between pages

footer

so for this we wrap our code inside another route
called Layout 

so all the routes that start with "/" are wrapped inside a layout

Render the Layout component whenever the path starts with /


Inside Layout, you must have an <Outlet /> — that's where the nested content (like Home, Neet, etc.) is injected


header
route html
footer