import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      photo,
      details,
    };
    console.log(newCoffee);
    // send coffee data to backend
    fetch("http://localhost:3000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Good job!", "Coffee Added SuccessFully !!", "success");
        }
        form.reset();
      });
  };
  return (
    <div className="bg-[#F4F3F0] text-center py-10 px-24">
      <h1 className="text-4xl font-semibold text-[#374151]">Add New Coffee</h1>
      <div>
        {/* name and quantity */}
        <form onSubmit={handleAddCoffee} className="mt-10">
          <div className="md:flex  gap-5 ">
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Coffee Name"
                className="input input-bordered w-full "
                name="name"
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full "
                name="quantity"
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
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Taste"
                className="input input-bordered w-full"
                name="taste"
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
              />
            </div>
            <div className="md:w-1/2">
              <input
                type="text"
                placeholder="Enter Your Details"
                className="input input-bordered w-full"
                name="details"
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
              />
            </div>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Add Coffee"
              className="btn bg-[#D2B48C] text-[#331A15] text-lg font-bold btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
