
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, name, brand, price, rating, type, description, photo } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const type = form.type.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const updateProduct = { name, brand, price, rating, type, description, photo }
        // console.log(newProduct)
        fetch(`https://electronics-shop-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                      
                }
            })

    }
    return (
        <>
            <Helmet>
                <title>UpdateProduct | Tech Point</title>
            </Helmet>
            <div className="bg-base-200 p-24">
                <h2 className="text-3xl font-extrabold text-center">Update a Product</h2>
                <form onSubmit={handleUpdateProduct}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
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

                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" defaultValue={rating} placeholder="Include (1-5)" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form  type and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <select
                                    className="input input-bordered w-full"
                                    name="type" defaultValue={type}
                                >
                                    <option value="phone">Phone</option>
                                    <option value="computer">Computer</option>
                                    <option value="headphone">Headphone</option>
                                    <option value="watch">Watch</option>
                                    <option value="Monitor">Monitor</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" defaultValue={description} placeholder="Short description" className="input input-bordered w-full" />
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

                                <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Update Product" className="btn btn-block capitalize font-semibold text-xl mx-4" />
                </form>
            </div>
        </>
    );
};
export default UpdateProduct;