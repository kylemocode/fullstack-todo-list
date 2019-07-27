import React from 'react'

const Navbar = () => {
    const navbarStyle= {
        width: "100%",
        fontFamily: "微軟正黑體",
        height: "70px",
        backgroundColor: "#f5b222",
        color: "white" ,
        marginTop: "0",
        display: "flex",
        alignItems: "center"
    }
    return (
        <div className="container-fluid" style={navbarStyle}>
            <img src="https://i.imgur.com/NVHjdWC.png" style={{width: "60px",height: "60px",marginRight: "20px"}}/>
            <h3 style={{marginTop: "0px",marginLeft: "15px",marginBottom: "0px",fontWeight: "bold"}}>Alfred TODO LIST</h3>
        </div>
    )
}

export default Navbar