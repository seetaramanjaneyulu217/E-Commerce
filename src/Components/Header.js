import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const item = useSelector(state => state.item)
    const size = useSelector(state => state.size)

    const searchHandler = (e) => {
        dispatch({type: 'searchtext',payload:e.target.value})
    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown" id='itemsli'>
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'120%',color:'white'}}>
                            {item === '' ? "Item" : item}
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'hoodies'})}>Hoodies</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'t-shirts'})}>T-Shirts</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'casuals'})}>Casuals</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'jackets'})}>Jackets</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'jeans'})}>Jeans</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'coat'})}>Coats</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown" id='sizeli'>
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:'120%',color:'white'}}>
                            {size === '' ? "Size" : size}
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type: 'small'})}>small</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'Medium'})}>Medium</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type: 'L'})}>Large</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type:'XL'})}>XL</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() =>  dispatch({type: 'XXL'})}>XXL</NavLink></li>

                        </ul>
                    </li>

                    <div style={{display:'flex',fontSize:'120%',marginTop:'2%',marginLeft:'20%',cursor:'pointer'}}>
                        <i class="fa fa-thin fa-arrows-rotate fa-lg" style={{marginTop:'19%'}} ></i>
                        <li style={{marginLeft:'7%'}} onClick={() => dispatch({type: 'reset'})}>
                            Reset
                        </li>
                    </div>
                </ul>

                <form role="search">
                    <input className="form-control me-2" type="search" placeholder="Search by item name" aria-label="Search" onChange={searchHandler}/>
                </form>

                <button className="btn btn-outline-success" type="button" style={{marginLeft:'3%',backgroundColor:'black',color:'white'}} onClick={() => navigate('cartitems')}>Add To Cart</button>
            </div>
        </div>
    </nav>
  )
}

export default Header