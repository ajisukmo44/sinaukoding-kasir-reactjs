import React from "react";

const Cart = ({ cart, removeFromCart }) => {
    const total = cart.reduce((sum, item) => sum + item.ttl_price, 0);

    return (
        <div className="cart">
            <h3>Keranjang Belanja</h3>
            <div className="chart-list" style={{ marginLeft: "20px" }}>
            <table>
                    <thead>
                        <tr>
                            <th>Nama </th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Total Harga</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    {cart.length !== 0 && <tbody>
                        {cart.map((item, index) => (
                            <tr key={item.id} className="border-table">
                                <td> {item.name} </td>
                                <td> Rp {item.price.toLocaleString()}{" "} </td>
                                <td> {item.qty} </td>
                                <td> Rp {item.ttl_price.toLocaleString()}{" "} </td>
                                <td> <button onClick={() => removeFromCart(index)} className="btn-danger">&nbsp;Hapus&nbsp;</button> </td>
                            </tr>
                        ))}
                    </tbody>
                    }
                    {cart.length === 0 && <tbody>
                        <tr className="border-table">
                            <td colSpan={5}> <p>Tidak ada data</p></td>
                        </tr>
                    </tbody>
                    }
            </table>
            </div>
            {cart.length !== 0 && <div className="ttl-price">
                <span>Total Harga : Rp. {total.toLocaleString()}</span>
            </div>
            }
        </div>
    );
};

export default Cart;