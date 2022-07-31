import React from "react";
import { useForm } from "react-hook-form";
import "../../CssPage/CssPage.css"
const AddServices = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "http://localhost:8000/cars";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="addServices_area">
      <form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <div>
          <input
            type="text"  placeholder="Enter Your Name"
            {...register("name", { required: true, maxLength: 50 })}
          />
        </div>
        <div>
          <input placeholder="Enter Description"  type="text" {...register("description")} />
        </div>
        <div>
          <input  placeholder="Amount"  type="number" {...register("price")} />
        </div>
        <div>
          <input type="text" placeholder="Photo URL" {...register("img")} />
    
        </div>
        <div>
          <input type="submit" value="Add service" />
        </div>
      </form>
    </div>
  );
};

export default AddServices;
