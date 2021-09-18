import React, { useState, useEffect } from 'react'

import { Alert, Grid, Snackbar } from "@mui/material";
import Product from "./product/Product";
import { commerce } from "../../assets/Commerce.js";

// const products = [
//     {
//         id: 1,
//         name: "Toyota Corolla Fielder (Wagon)",
//         description: "Five-door station wagon version of the Toyota Corolla produced in 2001, alongside the Corolla Axio, the sedan version.",
//         price: "650,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BH928892_fe0d5f.jpg"
//         // eslint-disable-next-line no-sequences
//     }, {
//         id: 2,
//         name: "Nissan Note (Hatchback)",
//         description: " five-door supermini/subcompact hatchback produced in 2004 and marketed worldwide by Nissan. With three generations and still present, the second generation boasts a stylish exterior with a sleek design that looks more dynamic than the previous models.",
//         price: "550,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/04/BH814684_792d3a.jpg"
//     }, {
//         id: 3,
//         name: "Toyota Corolla Axio (Sedan)",
//         description: "Toyota Corolla Axio is a four-door sedan that was first introduced in 2006 as the sedan version of the Toyota Corolla",
//         price: "780,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BK172742_49559f.jpg"
//     }, {
//         id: 4,
//         name: "Mazda Demio (Hatchback)",
//         description: "Mazda Demio is a five-door hatchback produced and manufactured by Mazda in 1996. It is a good-looking car with a spacious cabin, enough room for head and legroom, reliable, and less expensive to maintain",
//         price: "550,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BK075471_33f0bf.jpg"
//     }, {
//         id: 5,
//         name: "Toyota Probox Van (Van)",
//         description: "  Toyota Probox is a five-door light commercial van produced since July 2002 by Toyota. It is equipped with two petrol engines.",
//         price: "500,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BH826985_586318.jpg"
//     }, {
//         id: 6,
//         name: "Toyota Vitz (Hatchback)",
//         description: "Toyota Vitz is a three and five-door subcompact hatchback produced from 1999 to 2019 by the Japanese automaker Toyota. In other international markets, it is known as the Toyota Yaris or the Toyota Echo",
//         price: "450,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BK129040_95f9d1.jpg"

//     }, {
//         id: 7,
//         name: "Toyota Hiace Van (Van)",
//         description: "The fifth-generation H200 series Toyota HiAce is equipped with two petrol engines and two diesel engines petrol engines: 2.0L 1TR-FE four-cylinder generating a power output and torque of 134 hp.",
//         price: "1,000,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BK061835_dec18e.jpg"
//     }, {
//         id: 8,
//         name: "Suzuki Swift (Hatchback)",
//         description: "Suzuki Swift is a three and five-door hatchback manufactured by Suzuki in 2004. It is one of the most popular and well-known cars in the market, and currently, in its third generation, it continues to give a pleasant driving experience to the customers.",
//         price: "450,000",
//         img: "https://blog.beforward.jp/wp-content/uploads/2021/07/BK188372_f8e0dd.jpg"
//     }
// ]

const Products = () => {
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [toast, setToast] = useState("")


    useEffect(() => {
        const fetchProducts = () => {
            commerce.products.list().then(res => {
                res && setProducts(res.data)
                console.log(res.data)
            }).catch(e => {
                setOpen(true);
                setToast({ type: "error", message: e.message });
            })
        };

        fetchProducts();

        return () => setProducts([]);
    }, [])

    return (
        <>
            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity={toast.type} sx={{ width: '100%' }}>
                    {toast.message}
                </Alert>
            </Snackbar>

            <Grid container justify="center" spacing={4} >
                {
                    products && products.map(prod =>
                        <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
                            <Product product={prod} />
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}

export default Products
