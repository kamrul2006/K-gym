import { useEffect, useState } from "react";
const Carts = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch('cart.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, [])

    // console.log(carts)

    return (
        <div className="md:grid grid-cols-3 items-center justify-between gap-4 ">



            {carts.map(cart =>
                <div key={cart.price_per_month} className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-4 md:mt-0"
                    style={{
                        backgroundImage: `url(${cart.image_url})`, backgroundPosition: 'center', backgroundSize: 'cover',
                    }}
                >
                    <h2 className="text-3xl  font-serif font-semibold text-gray-800 mb-4">{cart.tier}</h2>

                    {/* Cart Item */}
                    <div className="border-b border-gray-300 py-4">
                        <h1 className="text-lg font-bold">Features:</h1>
                        {cart.features.map((feature, i) => <h2 key={i} className="text-gray-500 text-sm text-left">✔ {feature}</h2>
                        )}

                        <div className="flex-grow">

                        </div>


                    </div>


                    {/* Cart Summary */}
                    <div className="mt-6">
                        <div className="flex justify-between py-2">
                            <span className="text-gray-700">Subtotal:</span>
                            <span className="font-semibold text-gray-800">$ {cart.price_per_month} /Month</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-gray-700">Tax:</span>
                            <span className="font-semibold text-gray-800">$ {parseFloat(cart.price_per_month)*10/100} /Month</span>
                        </div>
                        <div className="flex justify-between py-2 border-t border-gray-300 mt-2">
                            <span className="text-lg font-medium text-gray-800">Total:</span>
                            <span className="text-lg font-semibold text-gray-900">$ {parseFloat(cart.price_per_month) + parseFloat(parseFloat(cart.price_per_month)*10/100)} /Month</span>
                        </div>
                        <button className="w-full bg-green-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-green-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Carts;