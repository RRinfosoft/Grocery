export const conArr1 = "GET 24/7 SUPPORT  "
export const con2 = "Contact us"
export const have="Have you any question?"
export const lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!"
export const map="Find Our Location"


const con = [
 {
    pic:"pp.png",
    main:"Shop Address",
    sub:"34/8, East Hukupara",
    para:"Gifirtok, Sadan Country Name",
 },
 {
    pic:"pp2.png",
    main:"Shop Hours",
    sub:"MON - FRIDAY: 8 to 9 PM",
    para:"SAT - SUN: 10 to 8 PM",
 },
 {
    pic:"pp3.png",
    main:"Contact",
    sub:"Phone: +00 111 222 3333",
    para:"Email: support@fruitkha.com",
 },

]

const confun = (items) => {
    return (
        <>
                <div className="item-pic">
                    <img   className="item-pic2" src={items.pic} />
                </div>
            <p className='headings2'>{items.main}</p>
            <p className='heading-text2'>{items.sub}</p>
            <p className='heading-text2'>{items.para}</p>
           

        </>

    )
}
export const mainCon = con.map(confun)