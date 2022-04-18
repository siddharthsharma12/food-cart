// Image gallery project start======================================================>
import React , {useState} from "react";
import Menu from "./Menu"
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const GallaryReact = () => {
    const [items,setItems] = useState(Menu);
    const filterItem = (cat) => {
        const updatedItems = Menu.filter((currElem)=>{
            return currElem.catagoury === cat;

        });
        setItems (updatedItems);

    }

    return (
        <>
        <h1 className = "mt-2 text-center main-heading">Order your Favourite Dish</h1>
        <hr/>
       <div className = "menu-tabs container">
           <div className = "menu-tab d-flex ">
            <button className = "btn btn-warning" onClick = {() => filterItem("breakfast")}>Breakfast</button>
            <button className = "btn btn-warning" onClick = {() => filterItem("evening")}>Evening</button>
            <button className = "btn btn-warning" onClick = {() => filterItem("lunch")}>Lunch</button>
            <button className = "btn btn-warning" onClick = {() => filterItem("dinner")}>Dinner</button>
            <button className = "btn btn-warning" onClick = {() => setItems(Menu)}>All</button>
            </div>

       </div>
       {/* main item section start -----------------------------------------------------*/}
       <div className="menu-items container-fluid mt-3">
       <div className="row">
       <div className="col-11 mx-auto">
       <div className="row my-5">

       {
           items.map((elem) => {
               const {id,image,name,catagoury,price,description} = elem;
               return (
                   <>
                   <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
               <div className="row item-inside">
               {/* for images */}
                   <div className="col-12 col-md-12 col-lg-4 img-div">
                        <img src= {image} alt="menuimg" className = "img-fluid" />
                   </div>
                   {/* menu description start*/}
                   <div className="col-12 col-md-12 col-lg-8">
                      <div className="main-title pt-2 pb-3">
                      <h2>Burger</h2>
                      <p>{description}</p>
                      <div className="menu-price-book">
                          <div className="price-book-device d-flex">
                          <h3> Price: {price}</h3>
                          <a href = "#"> <button className = "bt ">OrderNow</button></a>

                          </div>
                          <p>Lorem ipsum dolor sit amet Lorem, ipsum </p>

                      </div>

                      </div>

                   </div>
                   {/* menu description ends*/}
               </div>
           </div>
             {/* item 1 ends */}
                   </>
               )
           })
       };
       </div>

</div>
 </div>

</div>


{/* main item section start -----------------------------------------------------*/}

      
        </>
    )
}

export default GallaryReact;




// Image gallery project ends======================================================>


