import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
// import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData() {
    // $.ajax({
    //   url:'resumeData.json',
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });
    this.setState({resumeData: {
      "main": {
        "name":"Jonathan Quah",
        "occupation":"(Your Occupation Here)",
        "description":"quahjieren@gmail.com | +65 9771 1928",
        "image":"profilepic.jpg",
        "bio":"",
        "contactmessage":"Here is where you should write your message to readers to have them get in contact with you.",
        "email": "quahjieren@gmail.com",
        "phone": "+65 9771 1928",
        "address":{
          "street":"3 Flora Drive",
          "city":"",
          "state":"",
          "zip": "Singapore 507010"
        },
        "website": "http://www.timbakerdev.com",
        "resumedownload":"https://drive.google.com/file/d/1eAjVjZfj7r3pFDXQPw8BMS0PMAv0m3n0/view?usp=sharing",
        "social":[
          {
            "name":"github",
            "url":"http://github.com/quattad",
            "className":"fa fa-github"
          },
          {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/jonathanquah/",
            "className":"fa fa-linkedin"
          }
        ]
      },
      "resume":{
        "skillmessage":"",
        "education":[
          {
            "school":"National University of Singapore (NUS)",
            "degree":"Bachelor of Technology (Chemical Engineering)",
            "graduated":"August 2015 - May 2019",
            "description": [
              "Grade: Honours (With Distinction)", 
              "NUS Overseas Colleges (NOC) Scholarship",
              "Vice President, NUS Entrepreneurship Society",
              "Organizing Committee, TEDxNUS 2017"
            ]
          }
        ],
        "work":[
          {
            "companyTitle":"Schneider Electric",
            "companyCountry": "Singapore",
            "title":"Applications Design Engineer, Energy Generation Programme",
            "years":"June 2019 - Present",
            "description": [
              "Designed Excel sheets for automated string concatenation across 5 design documents to successfully deliver Russian language translation within a tight deadline of 2 days", 
              "Led hardware and communications testing for turbine and compressor control system project and reduced loading for lead engineer by 10%, achieving a letter of commendation from end-customer to the project team"
            ]
          },
          {
            "companyTitle":"NeoZeo AB",
            "companyCountry": "Stockholm, Sweden",
            "title":"Business Development Executive",
            "years":"March 2007 - February 2010",
            "description": [
              "Refactored HTML, CSS and JavaScript on company website for SEO performance and improved search ranking to top 10 results on Google Search", 
              "Collaborated with client’s software engineers to drive mobile application to be published on iOS and Android platforms within schedule and budget constraints"]
          }
        ],
        "skills":[
          {
            "name":"Programming Languages and Tools",
            "icons": ["js-square", "react", "vuejs", "node", "python", "git-alt"]
          }
        ]
      },
      "portfolio":{
        "projects": [
          {
            "title":"Stream",
            "category":"Stream aims to make work flow with project management tools to optimize resources.",
            "image":"stream-logo-black-text.png",
            "url":"https://flow-with-stream.herokuapp.com"
          },
          {
            "title":"Quote Buddy",
            "category":"Quote Buddy makes it easy to find and save quotes related to design.",
            "image":"qb-logo-black-text.png",
            "url":"https://quote-buddy.herokuapp.com"
          }
        ]
      },
      "testimonials":{
        "testimonials":[
          {
            "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user":"Kareem Abdul Jabbar"
          },
          {
            "text":"That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
            "user":"Steve Wozniak... impersonator"
          }
        ]
      }
    }});
    
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Resume data={this.state.resumeData.resume}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
