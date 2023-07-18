import mailSvg from "../../assets/mail.svg"
import manSvg from "../../assets/man.svg";
import womanSvg from "../../assets/woman.svg";
import manAgeSvg from "../../assets/growing-up-man.svg";
import womanAgeSvg from "../../assets/growing-up-woman.svg";
import mapSvg from "../../assets/map.svg";
import phoneSvg from "../../assets/phone.svg";
import padlockSvg from "../../assets/padlock.svg";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const url = "https://randomuser.me/api/";
const User = () => {
      const [userData, setUserData] = useState();
      const [addDataUser, setAddDataUser] = useState([]);
     const [title , setTitle ] = useState("")
     const [dep, setDep] = useState("");

     const addUser = () => {
  

      const newUser = {
            id: userData?.email,
            name: userData?.name.first,
            email: userData?.email,
            cell: userData?.cell,
            age: userData?.dob?.age,
          };
          
          addDataUser.some((user) => user.id === newUser.id)
            ? alert("user is already exist in list")
            : setAddDataUser([...addDataUser, newUser]);



}
     const getUser = () => {
  
      fetch(url)
           .then((res) => res.json())
           .then((data) => setUserData(data.results[0]))
           .catch((err) => console.log(err));
         console.log(userData);
     
     
     }
     useEffect(() => {

      getUser()
    //   outputOver();
    
    }, [])
    
    const mouseOver = (id) => {
      setTitle(id)
      
      if(id === "name"){
      
            setDep(userData?.name?.first)
      }else if(id === "e-mail"){
            setDep(userData?.email)
      }else if(id === "age"){
            setDep(userData?.dob?.age)
      }else if(id === "street"){
            setDep(userData?.location?.street?.name)
      }
      else if(id === "phone"){
            setDep(userData?.phone)
      }
      else if(id === "password"){
            setDep(userData?.login?.password)
      }
      
      }
      


  return (
    <div>
      <div className="block bcg-orange">
        <img src={logo} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={userData?.picture?.large} alt="random user" className="user-img" />
          <h5 className="user-title">My {title} is</h5>
          <h2 className="user-value">{dep}</h2>
          <div className="values-list">
            <button id="name" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="name">
                  {
                        userData?.gender === "female" ? (<img src={womanSvg} alt="user" id="iconImg" />) : (<img src={manSvg} alt="user" id="iconImg" />)
                  }
            
            </button>
            <button id="e-mail" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="email">
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button id="age" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="age">
              <img src={womanAgeSvg} alt="age" id="iconImg" />
            </button>
            <button id="street" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="street">
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button id="phone" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="phone">
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button id="password" onMouseEnter={(e)=> mouseOver(e.target.id)} className="icon" data-label="password">
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button className="btn" type="button" onClick={getUser} >
              New user
            </button>
            <button className="btn" type="button"onClick={addUser} >
              Add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>

                  
   {addDataUser.map((item) => (
      <tr className="body-tr" key={item.id}>
        <td className="th">{item.name}</td>
        <td className="th">{item.email}</td>
        <td className="th">{item.cell}</td>
        <td className="th">{item.age}</td>
      </tr>
    ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default User