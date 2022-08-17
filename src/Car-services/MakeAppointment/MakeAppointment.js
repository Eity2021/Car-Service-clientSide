import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useDetailsPage from "../useDetailsPage/useDetailsPage";
import makeAppoint from "../images/makeAppoint.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 import { useAuthState } from 'react-firebase-hooks/auth';
 import auth from './../../firebase.init';
import { toast } from "react-toastify";
const MakeAppointment = () => {
   const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [detailsCars,setDetailsCars] = useDetailsPage(serviceId);
//  console.log(detailsCars._id)
//  console.log(detailsCars.name)
  const [date, setDate] = useState(new Date());
  
  console.log(date)

  const handleAppointment = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    // console.log(FirstName);
    const lastName = event.target.lastName.value;
    // console.log(lastName);
    const email = event.target.email.value;
    // console.log(email)
    const phone = event.target.phone.value;
    // console.log(phone)
    const carName = event.target.carName.value;
    // console.log(carName);
    const carModel = event.target.carModel.value;
    // console.log(carModel);
    const carYear = event.target.carYear.value;
    // console.log(carYear);
    const slot = event.target.timeSlot.value;
    // console.log(slot);
    const description = event.target.description.value;
    //  console.log(description);
    // console.log(date);

    const applicant = {
      Id: detailsCars?._id,
      name: detailsCars?.name,
      userName:user.displayName,
      firstName,
      lastName,
      email,
      phone,
      carName,
      carModel,
      carYear,
      slot,
      date,
      description,
    };
    fetch("http://localhost:7000/applicant", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicant),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          toast(`Servicing is on this day ${date} at ${slot}`);
        } else {
          toast.error(
            `Already book  this day ${date} at ${slot}`
          );
        }
        // console.log(data);
     
     
      });
  };
  return (
    <div>
      <div>
        <img className="makeImg" src={makeAppoint} alt="makeAppoint" />
        <div className="overlay"></div>
      </div>
      <Form className="appoint" onSubmit={handleAppointment}>
        <div>
          <h1 className="makeHeading">PERSONAL INFORMATION</h1>
          <div className="line"></div>
        </div>
        <div className="form-input">
          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control type="text" name="lastName" placeholder="Last name" />
          </Form.Group>
        </div>

        <div className="form-input">
          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control type="email" name="email" placeholder="Email" />
          </Form.Group>

          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control type="number" name="phone" placeholder="Phone" />
          </Form.Group>
        </div>

        <div>
          <h1 className="makeHeading">VEHICLE INFORMATION</h1>
          <div className="line"></div>
        </div>
        <div className="form-input">
          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <select placeholder="Car Name" name="carName">
              <option value="CarName" selected>
                {" "}
                Car Name
              </option>
              {detailsCars?.carName?.map((carList) => (
                <option value={carList}>{carList}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <select placeholder="Model" name="carModel">
              <option value="model" selected>
                Model
              </option>
              {detailsCars?.carModel?.map((model) => (
                <option value={model}>{model}</option>
              ))}
            </select>
          </Form.Group>
          <Form.Group
            className="mb-3 makeInput"
            controlId="exampleForm.ControlInput1"
          >
            <select placeholder="Year" name="carYear">
              <option value="year" selected>
                Year
              </option>
              {detailsCars?.carYear?.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </Form.Group>
        </div>

        <div>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <div>
              <h1 className="makeHeading">
                {" "}
                PLEASE TELL US YOUR REASON FOR SCHEDULING AN APPOINTMENT
              </h1>
              <div className="line"></div>
            </div>

            <Form.Control name="description" as="textarea" rows={3} />
          </Form.Group>
        </div>

        <div>
          <Form.Group
            className="mb-3 "
            controlId="exampleForm.ControlTextarea1"
          >
            <div>
              <h1 className="makeHeading"> CHOOSE DATE AND TIME</h1>
              <div className="line"></div>
            </div>
            <div className="day-month">
              <div>
                <DatePicker
                
                  className="datePicker"
                  selected={date}
                  onChange={(date) => setDate(date)}
                 
                />
              </div>
              <div>
                <select name="timeSlot" className="selected">
                  <option selected>HH:MM</option>
                  {detailsCars?.slots?.map((slot) => (
                    <option value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>
          </Form.Group>
        </div>
        <div className="make_button">
          <input className="submit_button" type="submit" value="submit" />
        </div>
      </Form>
    </div>
  );
};

export default MakeAppointment;
