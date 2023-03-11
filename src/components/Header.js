import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col">
                        <div className="container">
                            <div className="row px-3 py-2  text-white">
                                <div className="col-6">
                                    <p className="mb-0">Free Shipping Over $100 & Free Returns</p>
                                </div>
                                <div className="col-6">
                                    <p className="text-end mb-0">Hotline: <a href="tel:+92 0000000000"
                                        className="text-white text-decoration-none">+92 123 4567890</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* main Nav  start*/}
                <div className="row bg-dark text-white py-2 align-items-center">
                    <div className="col-2">
                        <h2>M.J Brand</h2>
                    </div>
                    <div className="col-5 px-1">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-primary text-white" id="basic-addon2">
                                <BsSearch />
                            </span>

                        </div>
                        <div className="col-5"></div>
                    </div>
                    <div className="col-5 px-5">
                        <div className="header-uper-links
                            d-flex align-items-center justify-content-between">
                            <div>
                                <Link>
                                    <img src="images/compare.svg" alt="compare" />
                                </Link>
                                <p>Compare <br /> Products</p>
                            </div>
                            <div>
                                <Link>
                                    <img src="images/wishlist.svg" alt="whishlist" />
                                </Link>
                                <p>Favourite <br /> Whishlist</p>
                            </div>
                            <div>
                                <Link>
                                    <img src="images/user.svg" alt="user" />
                                </Link>
                                <p>Login <br /> My Account</p>
                            </div>
                            <div>
                                <Link className="d-flex align-items-center">
                                    <img src="images/cart.svg" alt="cart" />
                                    <div className=" cart d-flex flex-column">
                                        <span className="badge bg-white text-primary">0</span>
                                        <p className="mt-1 text-warning">$500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* bottom nav */}
                <div className="row  bg-primary">
                    <div className="col-12">
                        <div className="row menu-bottom d-flex align-items-center">
                            <div className="col-2 dropdown-style py-2">
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle w-100  dropdownBtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOP CATEGORIES
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-10">
                                <div className="menu-links">
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/'>Our Store</NavLink>
                                    <NavLink to='/'>Blog</NavLink>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;
