import { Card, Col } from "react-bootstrap"
import { BsFillCartFill } from "react-icons/bs"
import { motion } from 'framer-motion'

export const abArr1 = "FRESH AND ORGANIC"
export const abUs = "Shop"


const fruit = [
    {
        main: "50% off   ",
        pic: "lemon.png",
        maintitle: "Lemon",
        subtitle: "per Kg/",
        price: "50$",

    },
    {
        main: "50% off   ",
        pic: "gra.jpg",
        maintitle: "Black Grapes",
        subtitle: "per Kg/",
        price: "60$",

    },
    {
        main: "50% off   ",
        pic: "ore.png",
        maintitle: "Orange",
        subtitle: "per Kg/",
        price: "70$",

    },

]

const fruitfun = (items) => {
    return (
        <>



            <Col sm={4}>

                <Card className="home-card-div zoom2 length" >

                    <motion.div animate={{ rotate: -50 }}>
                        <div className="motion-bck">
                            <div className="It-motion">{items.main}</div>
                        </div>
                    </motion.div>

                    <div className="img23">
                        <Card.Img variant="top" className="set2" src={items.pic} />
                    </div>
                    <Card.Body>
                        <Card.Title className="berry2">{items.maintitle}</Card.Title>
                        <Card.Text className="per2">

                            {items.subtitle}
                        </Card.Text>
                        <Card.Text className="subtitle">

                            {items.price}
                        </Card.Text>
                        <center>
                            <button className='add-btn2'><BsFillCartFill />  Add to cart</button>
                        </center>
                    </Card.Body>
                    <div className="section3"></div>
                </Card>
            </Col>


        </>

    )
}
export const mainfruit = fruit.map(fruitfun)




const fruit2 = [
    {
        main: "50% off   ",
        pic: "pro.jpg",
        maintitle: "Straberry",
        subtitle: "per Kg/",
        price: "50$",

    },
    {
        main: "50% off   ",
        pic: "pro2.jpg",
        maintitle: "Avocado",
        subtitle: "per Kg/",
        price: "60$",

    },
    {
        main: "50% off   ",
        pic: "pro3.jpg",
        maintitle: "Green Apple",
        subtitle: "per Kg/",
        price: "70$",

    },

]

const fruitfun2 = (items) => {
    return (
        <>



            <Col sm={4}>

                <Card className="home-card-div zoom2 length" >

                    <motion.div animate={{ rotate: -50 }}>
                        <div className="motion-bck">
                            <div className="It-motion">{items.main}</div>
                        </div>
                    </motion.div>

                    <div className="img23">
                        <Card.Img variant="top" className="set23" src={items.pic} />
                    </div>
                    <Card.Body>
                        <Card.Title className="berry2">{items.maintitle}</Card.Title>
                        <Card.Text className="per2">

                            {items.subtitle}
                        </Card.Text>
                        <Card.Text className="subtitle">

                            {items.price}
                        </Card.Text>
                        <center>
                            <button className='add-btn2'><BsFillCartFill />  Add to cart</button>
                        </center>
                    </Card.Body>
                    <div className="section3"></div>
                </Card>
            </Col>


        </>

    )
}
export const mainfruit2 = fruit2.map(fruitfun2)