import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var bio = this.props.data.bio;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            {/* <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" /> */}
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>I am currently a hobbyist developer working towards becoming a full-time software engineer.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Address</h2>
                  <p className="address">
                  {/* <span>{phone}</span><br />
                  <span>{email}</span><br /> */}
						   {/* <span>{name}</span><br /> */}
						   <span>{street}<br />
						         {city} {state}{zip}
                   </span><br />
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume in PDF</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
