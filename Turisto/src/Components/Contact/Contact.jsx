import React, {Fragment} from "react";

class Contact extends React.Component{
    render() {
        return (
            <Fragment>
               <div className="p-3">
                   <div className="container mt-4">
                       <div className="row">
                           <div className="col-md-5">
                                <div className="card">
                                    <div className="card-body">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.999272541627!2d78.36776457868982!3d17.447753158677997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1646215441246!5m2!1sen!2sin" width="400" height="315" allowfullscreen="" loading="lazy" frameborder="0" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="card">
                                    <div className="card-header bg-dark text-white">
                                        <h4>Contact Us</h4>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="numer" className="form-control" placeholder="Mobile Number" />
                                            </div>
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Query" />
                                            </div>
                                            <div>
                                                <input type="submit" className="btn btn-dark btn-sm" value="submit"/>
                                            </div>
                                        </form>
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
export default Contact;

