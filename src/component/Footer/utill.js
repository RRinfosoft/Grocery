export const ab="About Us"
export const ab2="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,"
export const get="Get in Touch"
export const get2="38/4,Lorem Ipsum amet sit apliy"
export const get3="support@fruitkha.com"
export const get4="+00 111 222 3333"
export const page="Pages"
export const subs="Subscribe"
export const subs2="Subscribe to our mailing list to get the latest updates."



const arrow=[
    {
        title:"Home"
    },
    {
        title:"About"
    },
    {
        title:"Shop"
    },
    {
        title:"News"
    },
    {
        title:"Contact"
    },
]

const arrowfun = (items) => {
    return (
        <>


           <p>{items.title}</p>


        </>

    )
}
export const mainArrow = arrow.map(arrowfun)