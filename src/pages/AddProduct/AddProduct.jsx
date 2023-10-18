
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
    }
    return (
        <div className="bg-[#5a5a1b] p-24">
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
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                        <select
                            className="input input-bordered w-full"
                             name="category"
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
    );
};
export default AddProduct;