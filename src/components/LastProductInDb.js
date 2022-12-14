import React from 'react';

function LastProductInDb() {
  // const [detail, setDetail] = React.useState()
  const [lastProduct, setLastProduct] = React.useState([])

  React.useEffect (()=>{
      //Consulta de productos
      //let lastProductUrl = "http://localhost:3030/api/products/last"
      let lastProductUrl = 'https://fwines-sp8-api-grupo7.herokuapp.com/api/products/last'
      fetch (lastProductUrl)
        .then(response => response.json())
        .then(data =>{
            setLastProduct(data.product)
        })
  },[])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h3>{lastProduct.name}</h3>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              //src={lastProduct.image}
              //src={`https://grupo2-sprint8-api.herokuapp.com/images/products/${lastProduct?.Images?.[0].path}`}
              src={`https://fwines-sp8-api-grupo7.herokuapp.com/${lastProduct?.urlImage}`}
              alt="Last Product"
            />
            <p>{lastProduct.description}</p>
            <div className="minor-details">
              <p>Bodega: {lastProduct?.Bodega?.nameBodega}</p>  
              <p>Precio: ${lastProduct?.price}</p>
              {lastProduct.discount > 0 && <p>{lastProduct.discount*100}% OFF</p>}
            </div>
          </div>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View product detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;