import React from "react";

const ListProduct = ({ products, addToCart }) => {
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Harga Produk</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                         {products.map((product) => (
                             <tr key={product.id} className="border-table">
                                 <td> {product.name} </td>
                                 <td> Rp {product.price.toLocaleString()} </td>
                                 <td><button onClick={() => addToCart(product)} className="btn-add">&nbsp;Tambah&nbsp;</button> </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProduct;