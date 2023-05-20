import { Card, Col } from "react-bootstrap"
import { AiFillCalendar } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"

export const abArr1 = "ORGANIC INFORMATION"
export const abUs = "News Article"




const card = [
    {
        pic: "stra2nd.jpg",
        maintitle: "You will vainly look for fruit on it in autumn.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
    {
        pic: "stra3rd.jpg",
        maintitle: "A man's worth has its season, like tomato.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
    {
        pic: "stra4th.jpg",
        maintitle: " Good thoughts bear good fresh juicy fruit.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
]
const cardfun = (items) => {
    return (
        <>


            <Col sm={4}>
                <Card >
                    <div className="cardImg2">
                        <Card.Img variant="top" className="cardImg3" src={items.pic} />
                    </div>
                    <Card.Body>
                        <Card.Title className="maintitle2">{items.maintitle}</Card.Title>
                        <div>
                            <p className="lastT">
                                <span className="calen"><FaUserAlt /></span>
                                {items.lastT}
                                <span className="calen"><AiFillCalendar />
                                </span>
                                <span className="calen">{items.lastT2}</span>
                            </p>
                        </div>
                        <Card.Text className="subtitle2">
                            {items.subtitle}
                        </Card.Text>
                        <p  className="red">{items.red}</p>
                    </Card.Body>
                </Card>
            </Col>


        </>

    )
}
export const mainCard = card.map(cardfun)



const card2 = [
    {
        pic: "img.jpeg",
        maintitle: "Fall in love with the fresh orange.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
    {
        pic: "img3.jpeg",
        maintitle: "Why the berries always look delecious",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
    {
        pic: "img4.jpeg",
        maintitle: "Love for fruits are genuine of John Doe.",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laborum autem, dolores inventore, beatae nam..",
        lastT: "Admin",
        lastT2: " 27 December, 2019",
        red:"Read More >>",
    },
]
const cardfun2 = (items) => {
    return (
        <>


            <Col sm={4}>
                <Card className="shadow" >
                    <div className="cardImg2">
                        <Card.Img variant="top" className="cardImg3" src={items.pic} />
                    </div>
                    <Card.Body>
                        <Card.Title className="maintitle2">{items.maintitle}</Card.Title>
                        <div>
                            <p className="lastT">
                                <span className="calen"><FaUserAlt /></span>
                                {items.lastT}
                                <span className="calen"><AiFillCalendar />
                                </span>
                                <span className="calen">{items.lastT2}</span>
                            </p>
                        </div>
                        <Card.Text className="subtitle2">
                            {items.subtitle}
                        </Card.Text>
                        <p  className="red">{items.red}</p>
                    </Card.Body>
                </Card>
            </Col>


        </>

    )
}
export const mainCard2 = card2.map(cardfun2)



export const carousel="slide.png"
export const carousel2="slide2.png"
export const carousel3="slide3.png"
export const carousel4="slide4.png"
// export const carousel5="slide5.png"