"use client";

import { useRouter } from "next/navigation";
import Layouts from "../../components/layouts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllStocks } from "@/app/api";

const Orders = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  function getStocksOrder() {
    getAllStocks().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }
  useEffect(() => {
    getStocksOrder();
  }, []);
  return (
    <Layouts>
      <div className="container">
        <div>
          <h1>Oredered Items</h1>

          <div className="card">
            <h5>List of Ordered Items</h5>

            <div className="filter-table">
              <span>
                <label htmlFor="" className="mr-3">
                  Show
                </label>
                <select name="show" id="" className="mr-3">
                  <option value="10">10</option>
                  <option value="25">25</option>
                </select>
                entries
              </span>
              <span>
                <label htmlFor="" className="mr-3">
                  Search
                </label>
                <input type="text" className="search" />
              </span>
            </div>

            <table className="mt-4">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Requested Dates</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Willyam Dyanata</td>
                  <td>2023-09-10</td>
                  <td>Vacum Central</td>
                  <td>
                    <Link href="/items/orders/item">More Info</Link>
                  </td>
                </tr>
                <tr>
                  <td>Steven Setiadi</td>
                  <td>2023-09-10</td>
                  <td>Vacum Central</td>
                  <td>
                    <Link href="/items/orders/item">More Info</Link>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-2 pagination">
              <span>Showing 1 to 2 out of 2 entries</span>
              <span>
                <button type="button">Previous</button>
                <button type="button">Next</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default Orders;
