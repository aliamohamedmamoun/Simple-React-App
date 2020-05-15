import React from "react";
//import Panel from "./assets/Panel.js";
import Button from "react-bootstrap/Button"; //what is bootstrapp?
import axios from "axios";
import CustomerDetails from "./CustomerDetails";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCusomer: 1
    };
  }
  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json

  getCustomerData() {
    axios.get("./assets/samplejson/customerlist.json").then(response => {
      this.setState({ customerList: response });
    });
  }
  /*  return fetch('./assets/samplejson/customerlist.json')
        .then((response) => {
           console.log(response);
            this.setState({ customerList: response.data });
        }
            
        )
      };  */

  render() {
    if (!this.state.customerList) {
      return <p>Loading data</p>;
    } else {
      return (
        <div className="addmargin">
          <div className="col-md-3">
            {this.state.customerList.data.map(customer => (
              <div class="panel panel-info">
                <div class="panel-heading">{customer.name}</div>
                <div class="panel-body">
                  <p>{customer.email}</p>
                  <p>{customer.phone}</p>
                  <Button
                    bsStyle="info"
                    onClick={() =>
                      this.setState({
                        selectedCusomer: customer.id
                      })
                    }
                  >
                    Click to View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            <CustomerDetails val={this.state.selectedCusomer} />
          </div>
        </div>
      );
    }
  }
}
export default Customers;
