import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newProduct = { name, brand, price, rating, type, description, photo }
        console.log(newProduct)

        fetch("https://electronics-shop-server.vercel.app/product",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(result=>result.json())
        .then(data=> {
            if(data.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'product added successfully.!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  form.reset();
            }
            // console.log(data)
        })
        
    }
    return (
        <>
         <Helmet>
                <title>AddProduct | Tech Point</title>
            </Helmet>
        <div className="bg-base-200 p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Include (1-5)" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <select
                                className="input input-bordered w-full"
                                name="type"
                            >
                                <option value="phone">Phone</option>
                                <option value="computer">Computer</option>
                                <option value="headphone">Headphone</option>
                                <option value="watch">Watch</option>
                                <option value="monitor">Monitor</option>
                                <option value="laptop">Laptop</option>
                                <option value="camera">Camera</option>
                                <option value="speaker">Speaker</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Short description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full mx-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block capitalize font-semibold text-xl mx-4" />
            </form>
        </div>
        </>
    );
};
export default AddProduct;