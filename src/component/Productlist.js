import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Details_Data } from './Data';
import { Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

function Productlist() {
    const [count, setCount] = useState(1)
    let { productname } = useParams();
    console.log(productname);
    const [productdetails, setProductdetails] = useState({})
    useEffect(() => {

        let a = Details_Data.filter((e) => (e.Head).replaceAll(' ', '_') === productname)
        console.log(a[0])
        setProductdetails(a[0])
    }, [])


    return (
        <>
            <section className='p-listt'>
                <div className='detaillist listt'>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={7} className='pp-img'>
                            <div>
                                <div className='product-img'>
                                    <img src={productdetails && productdetails.image}></img>
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6} md={5}>
                            <div className='product-card'>
                                <div className='stocklist'>
                                    <h6 className={`${productdetails && productdetails.stock === 'in stock' ? 'lightgreen' : 'lightred'}`}>{productdetails && productdetails.stock}</h6>
                                </div>
                                <div className="sale">
                                    <h6 className='salehead'>{productdetails && productdetails.Sold}</h6>
                                </div>
                                <h3 className='headtitle'>{productdetails && productdetails.Head}</h3>
                                <div className='stars' style={{ color: 'rgb(250, 175, 0)' }}>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarHalfIcon />
                                </div>
                                <div className='price'>
                                    <h6>{productdetails && productdetails.Price}</h6>
                                </div>
                                <div className='colors'>

                                </div>
                                <div className='quantity'>
                                    <div className='addsub'>
                                        <div class="qt">
                                            <h6>Quantity</h6>
                                        </div>
                                        <div className='q-flex'>
                                            <span className='q-sub' onClick={() => setCount(count - 1)}>-</span>
                                            <span className='q-text'>{count}</span>
                                            <span className='q-add' onClick={() => setCount(count + 1)}>+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='twobtn'>
                                    <Link to={'/checkout'}>
                                        <Button variant="contained" className="addcart"><ShoppingCartIcon />Add to Cart</Button></Link>
                                    <Button variant="contained" className="buynow">Buy Now</Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div >
            </section >
        </>
    )
}

export default Productlist