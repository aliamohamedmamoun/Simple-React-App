import React from "react";
import axios from "axios";
//import { thisTypeAnnotation } from '@babel/types';

class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.getCustomerDetails(this.props.val);
  }
  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }
  getCustomerDetails(id) {
    axios.get("assets/samplejson/customer" + id + ".json").then(res => {
      this.setState({ customerDetails: res });
    });
  }
  render() {
    if (!this.state.customerDetails) {
      return <p>Loading Data</p>;
    } else {
      return (
        <div className="customerdetails">
          <div class="panel panel-info">
            <div class="panel-heading">
              {this.state.customerDetails.data.name}
            </div>
            <div class="panel-body">
              <p>Name : {this.state.customerDetails.data.name}</p>
              <p>Email : {this.state.customerDetails.data.email}</p>
              <p>Phone : {this.state.customerDetails.data.phone}</p>
              <p>City : {this.state.customerDetails.data.city}</p>
              <p>State : {this.state.customerDetails.data.state}</p>
              <p>Country : {this.state.customerDetails.data.country}</p>
              <p>
                Organization : {this.state.customerDetails.data.organization}
              </p>
              <p>Job Profile : {this.state.customerDetails.data.jobProfile}</p>
              <p>
                Additional Info :{" "}
                {this.state.customerDetails.data.additionalInfo}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default CustomerDetails;
