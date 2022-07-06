import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function ListAppoinment(props) {
  const [list, setList] = useState([]);
  const Ehistory = useHistory();

  const dataIn = () => {
    const dataA = JSON.parse(localStorage.getItem("Apt"));

    if (dataA !== null) {
      setList(dataA);
    }
  };

  useEffect(() => {
    dataIn();
  }, []);

  const handleDelete = (id) => {
    const Delete = JSON.parse(localStorage.getItem("Apt"));

    const Fdata = Delete.filter((l) => l.id !== id);

    localStorage.setItem("Apt", JSON.stringify(Fdata));

    dataIn();
  };

  const handleEdit = () => {
    

    Ehistory.push("/appointment");
  }


  return (
    <main>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <div className="row">
              <div className="col-6">
                <NavLink to="/appointment">
                  <h2>BookAppoinment</h2>
                </NavLink>
              </div>
              <div className="col-6">
                <NavLink to="/listappoinment">
                  <h2>ListAppoinment</h2>
                </NavLink>
              </div>
            </div>
          </div>
          {list.map((p, i) => {
            return (
              <div>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{p.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {p.date}
                    </CardSubtitle>
                    <CardText>{p.department}</CardText>
                    <Button className="me-2 bg-gradient" onClick={() => handleEdit()}>Edit</Button>
                    <Button className="bg-danger" onClick={() => handleDelete(p.id)}>Delete</Button>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ListAppoinment;
