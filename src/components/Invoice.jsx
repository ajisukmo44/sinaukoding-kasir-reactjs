import React from "react";

const Invoice = ({ cart }) => {
    const total = cart.reduce((sum, item) => sum + item.ttl_price, 0);
    const date = new Date().toLocaleString();

    return (
        <div style={{ border: "1px dashed black", marginTop: "10px", padding: "8px" }}>
            <h3>Nota Pembayaran</h3>
            <h6>[ Kasir 1 - Aji Sukmo ]</h6>
            <h6>{date}</h6>
            <table style={{ border: "1px #eeeeee solid", marginLeft: '10px' }}>
                    <thead>
                        <tr>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Total Harga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                             <tr key={item.id} className="border-table">
                                <td> {item.name} </td> 
                                 <td> Rp {item.price.toLocaleString()}{" "} </td>
                                 <td> {item.qty} </td>
                                 <td> Rp {item.ttl_price.toLocaleString()}{" "} </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
            <p><strong>Total : Rp{total.toLocaleString()}</strong></p>
            <p>Terima kasih telah berbelanja! <br /> <span>-- Toko Cat X -- </span></p>
        </div>
    );
};

export default Invoice;