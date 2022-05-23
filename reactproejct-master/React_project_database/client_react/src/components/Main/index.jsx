import { useState, } from "react";
import React from "react";
import axios from "axios";
import styles from "./styles.module.css";



const Newtrain = () => {
	const [data, setData] = useState({
		name:"",
		email:"",
		train: "",
		train_no: "",
		time: "",
		destination: "",
	});
	const [searchValue, setSearchValue] = useState("628a65e751cc5e674f0837eb");
	
	const [data1, setData1] = useState("");
	const [data2, setData2] = useState("");
	const [data3, setData3] = useState("");
	const [data4, setData4] = useState("");
	const [data5, setData5] = useState("");
	const [data6, setData6] = useState("");
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/ticketdata";
			const { data: res } = await axios.post(url, data);
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

function abc(){

	axios.get(`http://localhost:8080/api/ticketdata/find/${searchValue}`)
	  .then(res => {
		// handle success

		setData1(res.data.train)
		setData2(res.data.train_no)
		setData3(res.data.time)
		setData4(res.data.destination)
		setData5(res.data.name)
		setData6(res.data.email)


	  })
	  .catch(error=> {
		// handle error
		console.log(error);
	  })
  
	
	}
	const Main = () => {
		const handleLogout = () => {
			localStorage.removeItem("token");
			window.location.reload();
		};
	
		return (
			<div className={styles.main_container}>
				<nav className={styles.navbar}>
					<h1>fakebook</h1>
					<button className={styles.white_btn} onClick={handleLogout}>
						Logout
					</button>
				</nav>
			</div>
		);
	};
	
	return (

<>

		<Main/>
	

		
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Your name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Your email"
							name="email"
							onChange={handleChange}
							value={data.eamil}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="train name"
							name="train"
							onChange={handleChange}
							value={data.train}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="train no"
							name="train_no"
							onChange={handleChange}
							value={data.train_no}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="time"
							name="time"
							onChange={handleChange}
							value={data.time}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="detin"
							name="destination"
							onChange={handleChange}
							value={data.destination}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.white_btn}>
							Sign Up
						</button>					
						
					</form>


					<input
            type="search"
            placeholder="Enter your secrat id"
            autoFocus
            id="search"
            className={styles.input}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
						<div className={styles.main_container}>
					<h2 style={{display:"inline"}}> Name  :-</h2> {data1 && <h2 style={{display:"inline"}}>{data5}</h2>}
					<br/>
					<h2 style={{display:"inline"}}> email   :-</h2> {data2 && <h2 style={{display:"inline"}}>{data6}</h2>}
					<br/>
					<h2 style={{display:"inline"}}> Train   :-</h2>{data3 && <h2 style={{display:"inline"}}>{data1}</h2>}
					<br/>
					<h2 style={{display:"inline"}}>  Train no    :-</h2>{data4 && <h2 style={{display:"inline"}}>{data2}</h2>}
					<br/>
					<h2 style={{display:"inline"}}> Destination   :-</h2>{data3 && <h2 style={{display:"inline"}}>{data4}</h2>}
					<br/>
					<h2 style={{display:"inline"}}> Time   :-</h2>{data3 && <h2 style={{display:"inline"}}>{data3}</h2>}
					
			</div>
			<h1><button onClick={abc} className={styles.white_btn}>Get My Details</button></h1>
				</div>
			</div>
		</div>






		</>
	);
};









	
  





export default Newtrain;
