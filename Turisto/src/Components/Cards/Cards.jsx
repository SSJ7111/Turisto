import React, {Fragment} from "react";
import Card1 from '../../Assets/imgs/Card-1.webp';
import Card2 from '../../Assets/imgs/Card-2.jpg';
import Card3 from '../../Assets/imgs/Card-3.jpg';
import Card4 from '../../Assets/imgs/Card-4.jpg';

class Cards extends React.Component{
    render() {
        return (
            <Fragment>
                <div>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Card1} alt="" className="img-fluid" />
                                    <div className="card-body">
                                        <h4 className="card-title">Japan</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta vitae unde laborum obcaecati maxime fuga alias quam magnam. Quos!</p>
                                        <button className="btn btn-dark btn-sm">Book Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Card2} alt="" className="img-fluid" />
                                    <div className="card-body">
                                        <h4 className="card-title">Switzerland</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta vitae unde laborum obcaecati maxime fuga alias quam magnam. Quos!</p>
                                        <button className="btn btn-dark btn-sm">Book Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Card3} alt="" className="img-fluid" />
                                    <div className="card-body">
                                        <h4 className="card-title">Hungary</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta vitae unde laborum obcaecati maxime fuga alias quam magnam. Quos!</p>
                                        <button className="btn btn-dark btn-sm">Book Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src={Card4} alt="" className="img-fluid" />
                                    <div className="card-body">
                                        <h4 className="card-title">Italy</h4>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dicta vitae unde laborum obcaecati maxime fuga alias quam magnam. Quos!</p>
                                        <button className="btn btn-dark btn-sm">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Cards;
