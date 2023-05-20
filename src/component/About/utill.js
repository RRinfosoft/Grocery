import { Card, Carousel, Col } from "react-bootstrap"

export const abArr1 = "WE SALE FRESH FRUITS"
export const abUs = "About Us"
export const abWhy = "Why Fruitkha"
export const img = "col.jpeg"




{/* second section */ }
const textColumn = [
    {
        pic: "home.png",
        maintitle: " Home Delivery",
        subtitle: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    {
        pic: "price2.png",
        maintitle: " Best Price",
        subtitle: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },

]
const textFun = (items) => {
    return (
        <>
            {/* <Col sm={6}> */}
            <div className="colImg">
                <img className="colImg2" src={items.pic} />
            </div>
            <p className='headings'>{items.maintitle}</p>
            <p className='heading-text'>{items.subtitle}</p>
            {/* </Col> */}

        </>

    )
}
export const maintext = textColumn.map(textFun)


{/* second section */ }
const textColumn2 = [
    {
        pic: "box.png",
        maintitle: "Best Price",
        subtitle: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },
    {
        pic: "load.png",
        maintitle: "Quick Refund",
        subtitle: "sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
    },

]

const textFun2 = (items) => {
    return (
        <>
            {/* <Col sm={6}> */}
            <div className="colImg">
                <img className="colImg2" src={items.pic} />
            </div>
            <p className='headings'>{items.maintitle}</p>
            <p className='heading-text'>{items.subtitle}</p>
            {/* </Col> */}

        </>

    )
}
export const maintext2 = textColumn2.map(textFun2)


{/* third section */ } {/* third section */ }
export const dec = "December sale is on!with big "
export const dis = "Discount..."
export const sal = "Sale!Upto"
export const fifty = "50% "
export const of = "off "
export const colImg2 = "stro.png"
export const colImg3 = "ore.png"
export const text = "totam rem aperiam, eaque ipsa quae ab illo.sit voluptatem accusantium dolore mque laudantium,"

//  team section team section

export const our = "Our"
export const our2 = "Team"
export const data = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio."
export const cardImg2 = "pix2.jpg"
export const cardImg3 = "pix3.jpg"
export const cardImg4 = "pix4.jpg"
export const cardtitle = "Jimmy Doe"
export const cardusb = "Farmer"


const card = [
    {
        pic: "pix2.jpg",
        maintitle: " Jimmy Doe",
        subtitle: "Farmer.",
    },
    {
        pic: "pix3.jpg",
        maintitle: "Weldoe joe",
        subtitle: "Farmer.",
    },
    {
        pic: "pix4.jpg",
        maintitle: " Cimon Joe",
        subtitle: "Farmer.",
    },
]
const cardfun = (items) => {
    return (
        <>


            <Col sm={4}>
                <Card >
                    <div className="cardImg">
                        <Card.Img variant="top" className="cardImg2" src={items.pic} />
                    </div>
                    <Card.Body>
                        <Card.Title className="maintitle">{items.maintitle}</Card.Title>
                        <Card.Text className="subtitle">

                            {items.subtitle}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </>

    )
}
export const mainCard = card.map(cardfun)









// const caro = [
//     {
//         pic: "pix2.jpg",
//         maintitle: " Jimmy Doe",
//         subtitle: "Farmer.",
//         lasttitle: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
//     },
//     {
//         pic: "pix3.jpg",
//         maintitle: "Weldoe joe",
//         subtitle: "Farmer.",
//         lasttitle: " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     },
//     {
//         pic: "pix4.jpg",
//         maintitle: " Cimon Joe",
//         subtitle: "Farmer.",
//         lasttitle: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
//     },
// ]
// const carofun = (items) => {
//     return (
//         <>


//             <Col sm={12}>
//             <Carousel>
//                 <Carousel.Item>
//                     <div className="caroImg">
//                         <img className="caroImg2" src={items.pic} />
//                     </div>
//                     <Carousel.Caption>
//                         <h3>={items.maintitle}</h3>
//                         <h6>{items.subtitle}</h6>
//                         <p>{items.lasttitle}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <div className="caroImg">
//                         <img className="caroImg2" src={items.pic} />
//                     </div>
//                     <Carousel.Caption>
//                         <h3>={items.maintitle}</h3>
//                         <h6>{items.subtitle}</h6>
//                         <p>{items.lasttitle}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item> <Carousel.Item>
//                     <div className="caroImg">
//                         <img className="caroImg2" src={items.pic} />
//                     </div>
//                     <Carousel.Caption>
//                         <h3>={items.maintitle}</h3>
//                         <h6>{items.subtitle}</h6>
//                         <p>{items.lasttitle}</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>

//             </Carousel>

//             </Col>


//         </>

//     )
// }
// export const maincaro = caro.map(carofun)


export const pic1="pic1.png"
export const maintitle1="saira hakim"
export const subtitle1="Local shop Owner"
export const lasttitle1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

export const pic2="pic2.png"
export const maintitle2="David Niph"
export const subtitle2="Local shop Owner"
export const lasttitle2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

export const pic3="pic3.png"
export const maintitle3="Jacod sikkim"
export const subtitle3="Local shop Owner"
export const lasttitle3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

