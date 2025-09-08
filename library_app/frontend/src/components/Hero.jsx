import React from 'react';

function Hero() {
    return (
        <div className={"container hero col-sm-11"}>
            <div className={"row h-100"}>
                <div className={"col-sm-6 hero-details"}>
                    <div className={"details"}>
                        <h2 className={"display-3 fw-normal"}>Welcome to the book center</h2>
                        <p className={"mb-3 mt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                            amet
                            architecto at
                            consequuntur dolores error ex id incidunt laboriosam minima nam nemo non, quo recusandae
                            repellat repellendus reprehenderit tempora veniam?</p>
                        <div>
                            <form action="" className="d-flex align-items-center">
                                <input className={"form-control w-75"} type="text" name="book"/>
                                <div className="col-sm-4 px-2">
                                    <button className={"btn bg-lime-outline"}>Search</button>
                                </div>
                            </form>
                        </div>
                        <button className={"btn bg-lime mt-4"}>Log in to get started</button>
                    </div>
                </div>
                <div className={"col-sm-6"}>
                    <img className={"img-fluid"} src="/hero.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Hero;