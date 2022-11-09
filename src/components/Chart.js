import ChartRow from './ChartRow';
import React from 'react';

function Chart (){

    const [products, setProducts] = React.useState([])

    React.useEffect (()=>{
        // Consulta de productos
        //let url = "https://grupo2-sprint8-api.herokuapp.com/api/products"
        let url = 'http://localhost:3030/api/products';
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            setProducts(data.respuesta.products)
        })
    },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Bodega</th>
                                <th>Varietal</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;