




const ShopByBrandCard = ({card}) => {
    const {photo,brand} = card || {};
    // console.log(card)
    return(
        <div className="card w-96 glass">
        <figure className="h-52"><img src= {photo} alt="car!"/></figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
           
          <div className="card-actions justify-end">
            <button className="btn btn-primary"></button>
          </div>
        </div>
      </div>
    );
};
export default ShopByBrandCard;
