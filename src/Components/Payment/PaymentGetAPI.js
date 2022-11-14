import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function PaymentGetAPI() {
  const PAYMENT_GetMapping_URL =
    "http://localhost:8082/Payment/showallpayments";

  const [getAPI, setGetAPI] = useState("");
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    try {
      const response = await axios.get(PAYMENT_GetMapping_URL);
      setGetAPI(response.data);
      console.log(response);
      alert("All records displayed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center">Payment Record</h1>
      <div className="grid" id="PaymentHead">
        <table>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Payment</th>
              <th scope="col">Discount</th>
              <th scope="col">Created Date</th>
              <th scope="col">Updated Date</th>
              <th scope="col">User Id</th>
              <th scope="col">Plan Id</th>
            </tr>
          </thead>

          {getAPI &&
            getAPI.map((getAPI) => (
              <tbody>
                <tr>
                  <th>{getAPI.id}</th>
                  <th>{getAPI.payment}</th>
                  <th>{getAPI.discount}</th>
                  <th>{getAPI.created_At}</th>
                  <th>{getAPI.updated_At}</th>
                  <th>{getAPI.userId}</th>
                  <th>{getAPI.planId}</th>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}

export default PaymentGetAPI;