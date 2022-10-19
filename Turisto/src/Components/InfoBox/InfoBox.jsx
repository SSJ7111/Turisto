import React, {Fragment} from "react";

class InfoBox extends React.Component{
    render() {
        return (
            <Fragment>
                <div className="p-3 mt-4 bg-dark text-white text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <h5 className="display-4">Enjoy Your Holidays</h5>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, eius provident at, alias tempora voluptatibus quidem rem iusto vitae illum magni cum nihil, quaerat nisi expedita ratione quos. Possimus, saepe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default InfoBox;
