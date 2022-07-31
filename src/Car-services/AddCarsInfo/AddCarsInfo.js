import React from "react";
import { useForm } from "react-hook-form";

const AddCarsInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    console.log(event);
    // const url = "http://localhost:8000/cars";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    // console.log(result);
    //   });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <input type="file" {...register("img")} />
        </div>
        <div>
          <input type="submit" value="Add service" />
        </div>
      </form>
    </div>
  );
};

export default AddCarsInfo;
