import React from "react";
import { Link } from "react-router-dom";
// import {usecontext} from "react";
// import {Context} from "../store/appContext.js"

export const Navbar = () => {
	// function prueba(){
	// 	console.log(context)
	// }
	// const {prueba} = useContext(context)
	return (
		<form>
			<h1>Add a new contact</h1>
  <div className="mb-3">
    <label for="fullName" className="form-label">Full Name</label>
    <input type="email" className="form-control" id="fullName" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="phone" className="form-label">Phone</label>
    <input type="number" className="form-control" id="phone" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label for="Adress" className="form-label">Adress</label>
    <input type="" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Save</button>
</form>

	);
};
