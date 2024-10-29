
const Banner = () => {




    return (
        <div>
            {/* banner------------ */}
            <div className="my-10 mx-16 rounded-3xl" style={{
                backgroundImage: "url(https://t3.ftcdn.net/jpg/04/29/35/62/360_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg)", backgroundPosition: 'center', backgroundSize: 'cover',
            }}>
                <div
                    className=" min-h-60 text-white bg-[#1616165d] rounded-3xl py-20 md:px-20 px-4"
                >
                    <div className="text-center">

                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5  md:px-20 ">
                            Achieve your best self at K-gym! With world-class equipment, expert trainers, and a supportive community, we are here to help you reach your fitness goals. Whether you are just starting out or pushing your limits, our tailored programs and flexible memberships fit every lifestyle. Join us today and take the first step toward a healthier, stronger you!
                        </p>

                        {/* ----------Cart--------*- */}
                        <div>
                            <button className="btn btn-error px-20 text-xl font-bold my-10">Learn More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Banner;