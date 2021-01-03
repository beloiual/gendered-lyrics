import logo from './logo.svg';
import './App.css';
import React from 'react';


var MaleData
var MalePopData
var WordMalePopData
var MaleHipHopData
var WordMaleHipHopData

var MaleRockData
var WordMaleRockData

var MaleSoulData
var WordMaleSoulData

var MaleEDMData
var WordMaleEDMData

var MaleRBData
var WordMaleRBData

var MaleAlternativeData
var WordMaleAltenativeData



var MaleCountryData
var WordMaleCountryData

var MaleJazzData
var WordMaleJazzData

var MaleMetalData
var WordMaleMetalData

var MaleFolkData
var WordMaleFolkData

var MalePunkData 
var WordMalePunkData





var FemaleData

var FemalePopData
var WordFemalePopData

var FemaleHipHopData 
var WordFemaleHipHopData

var FemaleRockData 
var WordFemaleRockData

var FemaleSoulData 
var WordFemaleSoulData

var FemaleEDMData 
var WordFemaleEDMData

var FemaleRBData
var WordFemaleRBData

var FemaleAlternativeData
var WordFemaleAltenativeData


var FemaleCountryData
var WordFemaleCountryData

var FemaleJazzData 
var WordFemaleJazzData

var FemaleMetalData 
var WordFemaleMetalData

var FemaleFolkData
var WordFemaleFolkData

var FemalePunkData 
var WordFemalePunkData


var OtherData

var OtherPopData 
var WordOtherPopData

var OtherHipHopData 
var WordOtherHipHopData

var OtherRockData 
var WordOtherRockData

var OtherSoulData 
var WordOtherSoulData

var OtherEDMData 
var WordOtherEDMData

var OtherRBData 
var WordOtherRBData

var OtherAlternativeData 
var WordOtherAltenativeData


var OtherCountryData
var WordOtherCountryData

var OtherJazzData 
var WordOtherJazzData

var OtherMetalData
var WordOtherMetalData

var OtherFolkData 
var WordOtherFolkData

var OtherPunkData 
var WordOtherPunkData

var submission

class Clock extends React.Component {
  constructor (props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Gendered Lyrics!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}



/*class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}*/


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();
      var totalData =require('./totalData.json');
      submission = this.state.value;
      MaleData= totalData["Male"]; //male data

      MalePopData = MaleData["Pop"];
      WordMalePopData=MalePopData[this.state.value];

      MaleHipHopData = MaleData["Hip-Hop"];
      WordMaleHipHopData=MaleHipHopData[this.state.value];

      MaleRockData = MaleData["Rock"];
      WordMaleRockData=MaleRockData[this.state.value];

      MaleSoulData = MaleData["Soul"];
      WordMaleSoulData=MaleSoulData[this.state.value];

      MaleEDMData = MaleData["EDM"];
      WordMaleEDMData=MaleEDMData[this.state.value];

      MaleRBData = MaleData["R&B"];
      WordMaleRBData=MaleRBData[this.state.value];

      MaleAlternativeData = MaleData["Alternative"];
      WordMaleAltenativeData=MaleAlternativeData[this.state.value];

      MaleCountryData = MaleData["Country"];
      WordMaleCountryData=MaleCountryData[this.state.value];

      MaleJazzData = MaleData["Jazz"];
      WordMaleJazzData=MaleJazzData[this.state.value];

      MaleMetalData = MaleData["Metal"];
      WordMaleMetalData=MaleMetalData[this.state.value];

      MaleFolkData = MaleData["Folk"];
      WordMaleFolkData=MaleFolkData[this.state.value];

      MalePunkData = MaleData["Punk"];
      WordMalePunkData=MalePunkData[this.state.value];


      FemaleData= totalData["Female"]; //Female data

      FemalePopData = FemaleData["Pop"];
      WordFemalePopData=FemalePopData[this.state.value];

      FemaleHipHopData = FemaleData["Hip-Hop"];
      WordFemaleHipHopData=FemaleHipHopData[this.state.value];

      FemaleRockData = FemaleData["Rock"];
      WordFemaleRockData=FemaleRockData[this.state.value];

      FemaleSoulData = FemaleData["Soul"];
      WordFemaleSoulData=FemaleSoulData[this.state.value];

      FemaleEDMData = FemaleData["EDM"];
      WordFemaleEDMData=FemaleEDMData[this.state.value];

      FemaleRBData = FemaleData["R&B"];
      WordFemaleRBData=FemaleRBData[this.state.value];

      FemaleAlternativeData = FemaleData["Alternative"];
      WordFemaleAltenativeData=FemaleAlternativeData[this.state.value];


      FemaleCountryData = FemaleData["Country"];
      WordFemaleCountryData=FemaleCountryData[this.state.value];

      FemaleJazzData = FemaleData["Jazz"];
      WordFemaleJazzData=FemaleJazzData[this.state.value];

      FemaleMetalData = FemaleData["Metal"];
      WordFemaleMetalData=FemaleMetalData[this.state.value];

      FemaleFolkData = FemaleData["Folk"];
      WordFemaleFolkData=FemaleFolkData[this.state.value];

      FemalePunkData = FemaleData["Punk"];
      WordFemalePunkData=FemalePunkData[this.state.value];


      OtherData= totalData["other"]; //otherData

      OtherPopData = OtherData["Pop"];
      WordOtherPopData=OtherPopData[this.state.value];

      OtherHipHopData = OtherData["Hip-Hop"];
      WordOtherHipHopData=OtherHipHopData[this.state.value];

      OtherRockData = OtherData["Rock"];
      WordOtherRockData=OtherRockData[this.state.value];

      OtherSoulData = OtherData["Soul"];
      WordOtherSoulData=OtherSoulData[this.state.value];

      OtherEDMData = OtherData["EDM"];
      WordOtherEDMData=OtherEDMData[this.state.value];

      OtherRBData = OtherData["R&B"];
      WordOtherRBData=OtherRBData[this.state.value];

      OtherAlternativeData = OtherData["Alternative"];
      WordOtherAltenativeData=OtherAlternativeData[this.state.value];

      OtherAlternativeData = OtherData["Alternative"];
      WordOtherCountryData=OtherAlternativeData[this.state.value];

      OtherCountryData = OtherData["Country"];
      WordOtherCountryData=OtherCountryData[this.state.value];

      OtherJazzData = OtherData["Jazz"];
      WordOtherJazzData=OtherJazzData[this.state.value];

      OtherMetalData = OtherData["Metal"];
      WordOtherMetalData=OtherMetalData[this.state.value];

      OtherFolkData = OtherData["Folk"];
      WordOtherFolkData=OtherFolkData[this.state.value];

      OtherPunkData = OtherData["Punk"];
      WordOtherPunkData=OtherPunkData[this.state.value];

    
    alert("Please Click Refresh :)")
    
    
    
  
    
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input a word:

          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit"/>
        

        
      </form>

      
    );
  }
}


class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        students: [
          { input: submission, gender: "", genre: "", WPM: "" }
        ]
        
     }
     this.handleClick = this.handleClick.bind(this);
  }
  

  handleClick() {
    this.students=[]
    this.setState(state => ({
      students: [
        { input: submission, gender: "Male", genre: "Pop", WPM: (WordMalePopData/100.0) },
        { input: submission, gender: "Female", genre: "Pop", WPM: (WordFemalePopData/100.0) },
        { input: submission, gender: "Other", genre: "Pop", WPM: (WordOtherPopData/100.0) },
        { input: submission, gender: "Male", genre: "Hip-Hop", WPM: (WordMaleHipHopData/100.0) },
        { input: submission, gender: "Female", genre: "Hip-Hop", WPM: (WordFemaleHipHopData/100.0) },
        { input: submission, gender: "Other", genre: "Hip-Hop", WPM: (WordOtherHipHopData/100.0) },
        { input: submission, gender: "Male", genre: "Rock", WPM: (WordMaleRockData/100.0) },
        { input: submission, gender: "Female", genre: "Rock", WPM: (WordFemaleRockData/100.0) },
        { input: submission, gender: "Other", genre: "Rock", WPM: (WordOtherRockData/100.0) },
        { input: submission, gender: "Male", genre: "Soul", WPM: (WordMaleSoulData/100.0) },
        { input: submission, gender: "Female", genre: "Soul", WPM: (WordFemaleSoulData/100.0) },
        { input: submission, gender: "Other", genre: "Soul", WPM: (WordOtherSoulData/100.0) },
        { input: submission, gender: "Male", genre: "EDM", WPM: (WordMaleEDMData/100.0) },
        { input: submission, gender: "Female", genre: "EDM", WPM: (WordFemaleEDMData/100.0) },
        { input: submission, gender: "Other", genre: "EDM", WPM: (WordOtherEDMData/100.0) },
        { input: submission, gender: "Male", genre: "R&B", WPM: (WordMaleRBData/100.0) },
        { input: submission, gender: "Female", genre: "R&B", WPM: (WordFemaleRBData/100.0) },
        { input: submission, gender: "Other", genre: "R&B", WPM: (WordOtherRBData/100.0) },
        { input: submission, gender: "Male", genre: "Alternative", WPM: (WordMaleAltenativeData/100.0) },
        { input: submission, gender: "Female", genre: "Alternative", WPM: (WordFemaleAltenativeData/100.0) },
        { input: submission, gender: "Other", genre: "Alternative", WPM: (WordOtherAltenativeData/100.0) },
        { input: submission, gender: "Male", genre: "Country", WPM: (WordMaleCountryData/100.0) },
        { input: submission, gender: "Female", genre: "Country", WPM: (WordFemaleCountryData/100.0) },
        { input: submission, gender: "Other", genre: "Country", WPM: (WordOtherCountryData/100.0) },
        { input: submission, gender: "Male", genre: "Jazz", WPM: (WordMaleJazzData/100.0) },
        { input: submission, gender: "Female", genre: "Jazz", WPM: (WordFemaleJazzData/100.0) },
        { input: submission, gender: "Other", genre: "Jazz", WPM: (WordOtherJazzData/100.0) },
        { input: submission, gender: "Male", genre: "Metal", WPM: (WordMaleMetalData/100.0) },
        { input: submission, gender: "Female", genre: "Metal", WPM: (WordFemaleMetalData/100.0) },
        { input: submission, gender: "Other", genre: "Metal", WPM: (WordOtherMetalData/100.0)},
        { input: submission, gender: "Male", genre: "Folk", WPM: (WordMaleFolkData/100.0) },
        { input: submission, gender: "Female", genre: "Folk", WPM: (WordFemaleFolkData/100.0) },
        { input: submission, gender: "Other", genre: "Folk", WPM: (WordOtherFolkData/100.0)},
        { input: submission, gender: "Male", genre: "Punk", WPM: (WordMalePunkData/100.0) },
        { input: submission, gender: "Female", genre: "Punk", WPM: (WordFemalePunkData/100.0) },
        { input: submission, gender: "Other", genre: "Punk", WPM: (WordOtherPunkData/100.0)}
        
      ]}));
  }

  componentWillUnmount() {
    this.students=[{}]
  }
 
  

  renderTableHeader() {
    
     let header = Object.keys(this.state.students[0])
     return header.map((key, index) => {
       
        return <th key={index}>{key.toUpperCase()}</th>
        
      
     })
  }
  
  renderTableData() {
     return this.state.students.map((student, index) => {
       
        const { input, gender, genre, WPM } = student //destructuring
        return (
           <tr key={input}>
              <td>{input}</td>
              <td>{gender}</td>
              <td>{genre}</td>
              <td>{WPM}</td>
           </tr>
        )
     })
  }
 
  

  render() {
    
     return (
       
        <div>
          
           <h2 id='title'>Lyrics spoken by Artists in different Genres</h2>
           <table id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
           <button onClick={this.handleClick}>
          Refresh
          </button>
        </div>
     )
  }
}











//
function App() {
  return (
    <div className="App">
      
      <Clock/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website was created by Alexandru Beloiu, Yongwei Che, and George Fane
          with the purpose of hosting a queryable database containing the occurance of words 
          within the lyrics of Male, Female, and Other Artists within many different genres.
        </p>
        
    
        
        <a
          className="App-link"
          href="https://github.com/beloiual/gendered-lyrics"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Source Code
        </a>
        <p>

        </p>
        <div className="FormSubmit">
        <NameForm/>
        </div>
        <p>



        </p> 
      <div className="Table">
        <Table/>
      </div>
        
      </header>
    </div>
  );
}



export default App;
