import "./user.css"
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@mui/icons-material"
import { useParams } from 'react-router-dom'
import React from "react"
import { userRows } from "../../tempData";

export default function User() {
    const { userId } = useParams();
    const [data, setData] = React.useState(
        userRows || []
    );

    const [user, setUser] = React.useState({
        id: 1,
        username: "Jon Snow",
        avatar: "https://thronesapi.com/assets/images/jon-snow.jpg",
        email: "jon@gmail.com",
        status: "active",
        transaction: "$120.00",
        lastName: 'Snow', 
        firstName: 'Jon',
    })

    React.useEffect(() => {
        for (let i = 0; i < data.length; i++){
            if(data[i].id === parseInt(userId))
            {
                setUser({
                    ...data[i]
                })
            }
        }
    }, [])


  return (
    <div className="user">
        <div className="user-titleContainer">
            <h1 className="user-title">Edit User {userId}</h1>
            <button className="user-addButton">Create</button>
        </div>
        <div className='user-container'>
            <div className='user-show'>
                <div className="user-showTop">
                    <img
                    src={user.avatar}
                    alt=""
                    className="user-showImg"
                    />
                    <div className="user-showTopTitle">
                        <span className="user-showUsername">{user.firstName} {user.lastName}</span>
                        <span className="user-showUserTitle">Software Engineer</span>
                    </div>
                </div>
                <div className="user-showBottom">
                    <span className="user-showTitle">Account Details</span>
                    <div className="user-showInfo">
                        <PermIdentity  />
                        <span className="user-showInfoTitle">annabeck99</span>
                    </div>
                    <div className="user-showInfo">
                        <CalendarToday  />
                        <span className="user-showInfoTitle">10.12.1999</span>
                    </div>
                    <span className="user-showTitle">Contact Details</span>
                    <div className="user-showInfo">
                        <PhoneAndroid  />
                        <span className="user-showInfoTitle">+1 123 456 67</span>
                    </div>
                    <div className="user-showInfo">
                        <MailOutline  />
                        <span className="user-showInfoTitle">{user.email}</span>
                    </div>
                    <div className="user-showInfo">
                        <LocationSearching  />
                        <span className="user-showInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
            <div className='user-update'>
                <span className="user-updateTitle">Edit</span>
                <form className="user-updateForm">
                    <div className="user-updateLeft">
                    <div className="user-updateItem">
                        <label>Username</label>
                        <input
                        type="text"
                        placeholder="annabeck99"
                        className="user-updateInput"
                        />
                    </div>
                    <div className="user-updateItem">
                        <label>Full Name</label>
                        <input
                        type="text"
                        placeholder="Anna Becker"
                        className="user-updateInput"
                        />
                    </div>
                    <div className="user-updateItem">
                        <label>Email</label>
                        <input
                        type="text"
                        placeholder="annabeck99@gmail.com"
                        className="user-updateInput"
                        />
                    </div>
                    <div className="user-updateItem">
                        <label>Phone</label>
                        <input
                        type="text"
                        placeholder="+1 123 456 67"
                        className="user-updateInput"
                        />
                    </div>
                    <div className="user-updateItem">
                        <label>Address</label>
                        <input
                        type="text"
                        placeholder="New York | USA"
                        className="user-updateInput"
                        />
                    </div>
                    </div>
                    <div className="user-updateRight">
                        <div className="user-updateUpload">
                            <img
                            className="user-updateImg"
                            src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            />
                            <label htmlFor="file">
                            <Publish className="user-updateIcon" />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="user-updateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
