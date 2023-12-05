"use client";
import Layouts from "../../components/layouts";
import { getAllOrders, getAllStocks } from "../../api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "@/app/stores/action/addOrder";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [data, setData] = useState([]);

  function getStocks() {
    getAllOrders().then((res) => {
      var tempList = [];
      tempList = res.data.data;
      console.log("List Data => ", tempList);
      setData(tempList);
    });
  }
  useEffect(() => {
    getStocks();
  }, []);
  const distpatchCart = (id) => {
    router.push(`/items/orders/${id}`);
  };
  const toEditPage = (id) => {
    router.push(`/items/orders/confirm-admin`);
  };
  return (
    <Layouts>
      <div className="container">
        <div>
          <h1>Ordered Items</h1>

          <div className="card">
            <h5>List of items</h5>

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
                  <th>Requested Date</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.employee}</td>
                    <td>{item.requestDate}</td>
                    <td>{item.location}</td>

                    {localStorage.getItem("role") == "admin" ? (
                      <td onClick={() => toEditPage(item.id)}>
                        <span
                          className="badge badge-primary"
                          style={{ color: "white", cursor: "pointer" }}
                        >
                          More Info
                        </span>
                      </td>
                    ) : (
                      <td
                        onClick={() => {
                          distpatchCart(item.id),
                            dispatch(
                              addToOrder({
                                employee: item.employee,
                                activity: item.activity,
                                division: item.division,
                                machine: item.machine,
                                requestDate: item.requestDate,
                                // location: item.location,
                              })
                            );
                        }}
                      >
                        <span
                          className="badge badge-primary"
                          style={{ color: "white", cursor: "pointer" }}
                        >
                          Order Item
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
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

export default Page;
