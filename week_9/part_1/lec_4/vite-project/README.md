The children prop allows you to pass elements or components as props to other components.

app(
    return (
        <Card>
            some html , this is passed as children to the card component
        <Card/>
    )
)

Card({children}){
    return(
        some card html
        {children}

    )
}