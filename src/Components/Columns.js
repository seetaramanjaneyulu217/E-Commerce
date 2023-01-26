import CartInput from "./CartInput";

const columns = [
   {
      name: "Image",
      selector: row => {
        return(
          <img src={row.image} height="200px" width="150px" alt="clothes" />
        )
      }
   },
   {
      name: "Name",
      selector: row => row.name + " ( " + row.size + " )"
   },
   {
      name: "Color",
      selector: row => row.colour
   },
   {
      name: "Stock",
      selector: (row) => {
        if(row.stock === 'instock') {
          return (
            <div style={{color:'green',display:'flex'}}>
              <i className="fa fa-light fa-face-grin-beam fa-lg" style={{marginTop:'14%',marginLeft:'1%'}}></i>
              <h6 style={{marginLeft:'.5%'}}>In Stock</h6>
            </div>
          )
        }
        else {
          return (
            <div style={{color:'red',display:'flex'}}>
              <i className="fa fa-regular fa-face-frown fa-lg" style={{marginTop:'10%',marginLeft:'1%' }}></i>
              <h6>Out of Stock</h6>
            </div>
          )
        }
      }
   },
   {
      name: "Price",
      selector: row => `$${row.price}`
   },
   {
      name: "Buy",
      selector: (row) => {
          if(row.stock === 'instock') {
              return(
                <CartInput row={row} />
              )
          }

          else {
            return (
              <div style={{fontSize:'110%'}}>
                <input type='number' disabled={true} placeholder="Enter the quantity"></input>
                <i className="fa fa-solid fa-cart-shopping fa-lg"></i>
                <input type='checkbox' disabled={true}></input>
              </div>
            )
          }
          
      }
      
   }
];


export default columns