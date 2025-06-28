import React from 'react'

export default function Phone(props) {
    const { product, getProduct } = props;
    const handleDetail = () =>{
        getProduct(product);
    };
    return (


        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.hinhAnh} alt />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.tenSP}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.manHinh}</p>
               <button onClick={handleDetail} type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Detail</button>
            </div>
        </div>


    )
}
