import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card items-center card-side bg-base-100 shadow-xl px-10 py-5">
      <figure className="">
        <img className=" " src={photo} alt="Movie" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold">
          Name : <span className="text-gray-400">{name}</span>{" "}
        </h2>
        <h2 className="card-title font-bold">
          Quantity : <span className="text-gray-400">{quantity}</span>{" "}
        </h2>
        <h2 className="card-title font-bold">
          Taste : <span className="text-gray-400">{taste}</span>
        </h2>
      </div>
      <div>
        <div className="btn-group btn-group-vertical gap-3">
          <button className="btn bg-green-500 text-white">View</button>
          <Link to={`/updateCoffee/${_id}`}>
            <button className="btn bg-yellow-500 text-white">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object.isRequired,
  coffees: PropTypes.object.isRequired,
  setCoffees: PropTypes.array.isRequired,
};

export default CoffeeCard;
