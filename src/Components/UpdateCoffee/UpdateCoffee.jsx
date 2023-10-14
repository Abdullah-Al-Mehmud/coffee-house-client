import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, taste, photo, supplier, category, details } =
    coffee;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(updatedCoffee);
    // send coffee data to backend
    fetch(`http://localhost:3000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "Coffee Updated SuccessFully !!", "success");
        }
        form.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] text-center py-10 px-24">
      <h1 className="text-4xl font-semibold text-[#374151]">Update Coffee</h1>
      <div>
        {/* name and quantity */}
        <form onSubmit={handleUpdate} className="mt-10">
          <div className="md:flex  gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Coffee Name"
                className="input input-bordered w-full "
                name="name"
                defaultValue={name}
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full "
                name="quantity"
                defaultValue={quantity}
              />
            </div>
          </div>
          {/* supplier and taste */}

          <div className="md:flex mt-4 gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Supplier"
                className="input input-bordered w-full"
                name="supplier"
                defaultValue={supplier}
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Taste"
                className="input input-bordered w-full"
                name="taste"
                defaultValue={taste}
              />
            </div>
          </div>

          {/* category and details */}

          <div className="md:flex mt-4 gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Category"
                className="input input-bordered w-full"
                name="category"
                defaultValue={category}
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Details"
                className="input input-bordered w-full"
                name="details"
                defaultValue={details}
              />
            </div>
          </div>

          {/* Photo url */}

          <div className="md:flex mt-4  gap-10 ">
            <div className="md:w-full">
              <input
                type="text"
                placeholder="Enter Your Photo URL"
                className="input input-bordered w-full"
                name="photo"
                defaultValue={photo}
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Update Coffee"
              className="btn bg-[#D2B48C] text-[#331A15] text-lg font-bold btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
