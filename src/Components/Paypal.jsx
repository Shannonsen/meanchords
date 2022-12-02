import React, { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import shopServices from 'services/shop-services';

export default function Paypal() {
    const paypal = useRef()
    const navigate = useNavigate();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "MEANCHORDS DISCS",
                            amount: {
                                currency_code: "MXN",
                                value: Number(sessionStorage.getItem('total')).toFixed(2),
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order)
                console.log(order.status)
                if (order.status === 'COMPLETED') {
                    const total = Number(sessionStorage.getItem("total")).toFixed(2)
                    const delivery = sessionStorage.getItem("delivery")
                    const address = sessionStorage.getItem("address")
                    const iduser = sessionStorage.getItem("userID")
                    console.log(typeof(delivery))
                    try {
                        const consulta = await shopServices.postSale(total, delivery, address, iduser).then(
                            () => {
                                navigate('/sucessBuy');
                                window.location.reload();
                            }
                        );
                        console.log(JSON.parse(consulta));
                    } catch (error) {
                        console.log(error)
                    }
                }
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current);
    }, [navigate]);

    return (
        <div ref={paypal}><h2>Método de pago</h2></div>
    )
}
