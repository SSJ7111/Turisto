import React, {Fragment} from "react";

class Footer extends React.Component{
    render() {
        return (
            <Fragment>
                <div>
                    <div className="p-3 bg-dark text-white text-center mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h3>Copyright &copy; 2022, Tour!sto</h3>
                                    <p>All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Footer;
