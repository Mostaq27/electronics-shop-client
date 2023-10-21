

const Bannar = () => {
    return(
        <div className="hero min-h-[70vh]" style={{backgroundImage: 'url(https://media.istockphoto.com/id/853324096/photo/in-the-electronics-store-consultant-gives-professional-advice-to-a-young-woman-she-considers.jpg?s=1024x1024&w=is&k=20&c=EaEsytApOYtT5PfsfU4Csmib8pwU3ufKMBb4ohMkBtU=)'}}>
        <div className="hero-overlay bg-opacity-60 bg-neutral"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">Welcome to Tech-Point</h1>
            <p className="mb-5">Were dedicated to bringing you the latest and greatest in the <br />world of technology. Whether you're a tech enthusiast, a professional seeking top-of- the-line electronics , or someone looking for reliable everyday gadgets, you've come to the right place.</p>
            <button className="btn btn-primary">Explore More </button>
          </div>
        </div>
      </div>
    );
};
export default Bannar;