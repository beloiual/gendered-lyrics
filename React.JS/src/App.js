import logo from './logo.svg';
import './App.css';
import React from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;



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

      
    
    
    
    
    
    
  
    
  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input a word:

          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p></p>
        <input class="button button1" type="submit" value="Submit"/>
        
        
        
        
      </form>

      
    );
  }
}

/*
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
}*/




class BubbleChart extends React.Component {
  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this);
  }
  chart1;
  
  options = {
    animationEnabled: true,
    exportEnabled: true,
    creditText: "Github",
    creditHref: "https://github.com/beloiual/gendered-lyrics",
    theme: "dark2", // "light1", "light2", "dark1", "dark2"
    zoomEnabled: true,
    panEnabled: true,
    backgroundColor: "#282c34",
    width: 2000,
    height: 1000,
    
    /*title:{
      text: "Frequency of Lyrics spoken by Artists in Different Genres",
    fontSize: 30
    },*/
    axisX: {
      minimum: 27,
      maximum: 65,

      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
     labelFormatter: function(){
        return " ";
      },
      valueFormatString: " ",
      //title: "Male                                                    Female                           Other",
    logarithmic: true
    },
    axisY: {
      minimum: 0,
      maximum: 200,
      gridThickness: 0,
      tickLength: 0,
      lineThickness: 0,
     labelFormatter: function(){
        return " ";
      },
      valueFormatString: " ",
    
      //title: "Frequency of the Lyric"
    },
    data: [{
      
      type: "bubble",
      indexLabel: "{label} {label2}",
      indexLabelFontSize: 13,
      toolTipContent: "<b>{label2} {label}</b><br>Frequncy of ( {label3} ): {label4} <br> ",
      dataPoints: [
        /*{ label: "Pop", label2:"Male", label3:submission, x: 60,y: WordMalePopData, z: WordMalePopData*WordMalePopData },
        { label: "Pop", label2:"Female", label3:submission,  x: 120, y: WordFemalePopData, z: WordFemalePopData*WordFemalePopData },
        { label: "Pop", label2:"Other", label3:submission,   x: 180, y: WordOtherPopData, z: WordOtherPopData*WordFemalePopData },
        { label: "Hip-Hop", label2:"Male", label3:submission,  x: 60, y: WordMaleHipHopData, z: WordMaleHipHopData*WordMaleHipHopData },
        { label: "Hip-Hop", label2:"Female", label3:submission,   x: 120, y: WordFemaleHipHopData, z: WordFemaleHipHopData*WordFemaleHipHopData },
        { label: "Hip-Hop", label2:"Other",  label3:submission,   x: 180, y: WordOtherHipHopData, z: WordOtherHipHopData*WordOtherHipHopData},
        { label: "Rock", label2:"Male",  label3:submission,  x: 60, y: WordMaleRockData, z: WordMaleRockData*WordMaleRockData },
        { label: "Rock", label2:"Female", label3:submission,   x: 120, y: WordFemaleRockData, z: WordFemaleRockData*WordFemaleRockData},
        { label: "Rock", label2:"Other",  label3:submission,   x: 180, y: WordOtherRockData, z: WordOtherRockData*WordOtherRockData},
        { label: "Soul", label2:"Male",  label3:submission,  x: 60, y: WordMaleSoulData, z: WordMaleSoulData*WordMaleSoulData},
        { label: "Soul", label2:"Female", label3:submission,   x: 120, y: WordFemaleSoulData, z: WordFemaleSoulData*WordFemaleSoulData },
        { label: "Soul", label2:"Other",  label3:submission,   x: 180, y: WordOtherSoulData, z: WordOtherSoulData*WordOtherSoulData },
        { label: "EDM", label2:"Male", label3:submission,   x: 60, y: WordMaleEDMData, z: WordMaleEDMData*WordMaleEDMData },
        { label: "EDM", label2:"Female",  label3:submission,  x: 120, y: WordFemaleEDMData, z: WordFemaleEDMData*WordFemaleEDMData},
        { label: "EDM", label2:"Other",  label3:submission,   x: 180, y: WordOtherEDMData, z: WordOtherEDMData*WordOtherEDMData },
        { label: "R&B", label2:"Male",  label3:submission,  x: 60, y: WordMaleRBData, z: WordMaleRBData*WordMaleRBData },
        { label: "R&B", label2:"Female",  label3:submission,  x: 120, y: WordFemaleRBData, z: WordFemaleRBData*WordFemaleRBData },
        { label: "R&B", label2:"Other",  label3:submission,   x: 180, y: WordOtherRBData, z: WordOtherRBData*WordOtherRBData },
        //{ label: "Alternative Male", x: 36, y: WordMaleAlternativeData, z: WordMaleAlternativeData*1000.0 },
        //{ label: "Alternative Female", x: 108, y: WordFemaleAlternativeData, z: WordFemaleAlternativeData*1000.0 },
        //{ label: "Alternative Other", x: 180, y: WordOtherAlternativeData, z: WordOtherAlternativeData*1000.0 },
        { label: "Country", label2:"Male", label3:submission,   x: 60, y: WordMaleCountryData, z: WordMaleCountryData*WordMaleCountryData },
        { label: "Country", label2:"Female",  label3:submission,  x: 120, y: WordFemaleCountryData, z: WordFemaleCountryData*WordFemaleCountryData },
        { label: "Country", label2:"Other",  label3:submission,   x: 180, y: WordOtherCountryData, z: WordOtherCountryData*WordOtherCountryData},
        { label: "Jazz", label2:"Male",  label3:submission,  x: 60, y: WordMaleJazzData, z: WordMaleJazzData*WordMaleJazzData },
        { label: "Jazz", label2:"Female",  label3:submission,  x: 120, y: WordFemaleJazzData, z: WordFemaleJazzData*WordFemaleJazzData },
        { label: "Jazz", label2:"Other", label3:submission,    x: 180, y: WordOtherJazzData, z: WordOtherJazzData*WordOtherJazzData },
        { label: "Metal", label2:"Male", label3:submission,   x: 60, y: WordMaleMetalData, z: WordMaleMetalData*WordMaleMetalData },
        { label: "Metal", label2:"Female",  label3:submission,  x: 120, y: WordFemaleMetalData, z: WordFemaleMetalData*WordFemaleMetalData },
        { label: "Metal", label2:"Other",  label3:submission,   x: 180, y: WordOtherMetalData, z: WordOtherMetalData*WordOtherMetalData },
        { label: "Jazz", label2:"Male",  label3:submission,  x: 60, y: WordMaleFolkData, z: WordMaleJazzData*WordMaleJazzData},
        { label: "Jazz", label2:"Female", label3:submission,   x: 120, y: WordFemaleFolkData, z: WordFemaleFolkData*WordFemaleFolkData },
        { label: "Jazz", label2:"Other",  label3:submission,   x: 180, y: WordOtherFolkData, z: WordOtherFolkData*WordOtherFolkData },
        { label: "Punk", label2:"Male", label3:submission,   x: 60, y: WordMalePunkData, z: WordMalePunkData*WordMalePunkData },
        { label: "Punk", label2:"Female", label3:submission,   x: 120, y: WordFemalePunkData, z: WordFemalePunkData*WordFemalePunkData},
        { label: "Punk", label2:"Other",  label3:submission,   x: 180, y: WordOtherPunkData, z: WordOtherPunkData*WordOtherPunkData },*/
        //{ label: "Male", label2:"Male", label3:submission,   x: 60, y: NaN, z: NaN },
        //{ label: "Female", label2:"Female", label3:submission,   x: 120, y: NaN, z: NaN},
        //{ label: "Other", label2:"Other",  label3:submission,   x: 180, y: NaN, z: NaN },

        
        { label: "Pop", label2:"Male", label3:submission, label4: WordMalePopData, x: 60, y: WordMaleCountryData, z: (WordMalePopData*WordMalePopData)/1000 },
      { label: "Pop", label2:"Female", label3:submission, label4: WordFemalePopData,  x: 60, y: WordMaleCountryData, z: WordFemalePopData*WordFemalePopData/1000 },
      { label: "Pop", label2:"Other", label3:submission, label4: WordOtherPopData,    x: 60, y: WordMaleCountryData, z: WordOtherPopData*WordFemalePopData/1000 },
      { label: "Hip-Hop", label2:"Male", label3:submission, label4: WordMaleHipHopData,  x: 60, y: WordMaleCountryData, z: WordMaleHipHopData*WordMaleHipHopData/1000 },
      { label: "Hip-Hop", label2:"Female", label3:submission, label4: WordFemaleHipHopData,    x: 60, y: WordMaleCountryData, z: WordFemaleHipHopData*WordFemaleHipHopData/1000 },
      { label: "Hip-Hop", label2:"Other",  label3:submission, label4: WordOtherHipHopData,    x: 60, y: WordMaleCountryData, z: WordOtherHipHopData*WordOtherHipHopData/1000},
      { label: "Rock", label2:"Male",  label3:submission, label4: WordMaleRockData,  x: 60, y: WordMaleCountryData, z: WordMaleRockData*WordMaleRockData/1000 },
      { label: "Rock", label2:"Female", label3:submission, label4: WordFemaleRockData,   x: 60, y: WordMaleCountryData, z: WordFemaleRockData*WordFemaleRockData/1000},
      { label: "Rock", label2:"Other",  label3:submission, label4: WordOtherRockData,    x: 60, y: WordMaleCountryData, z: WordOtherRockData*WordOtherRockData/1000},
      { label: "Soul", label2:"Male",  label3:submission, label4: WordMaleSoulData,   x: 60, y: WordMaleCountryData, z: WordMaleSoulData*WordMaleSoulData/1000},
      { label: "Soul", label2:"Female", label3:submission, label4: WordFemaleSoulData,    x: 60, y: WordMaleCountryData, z: WordFemaleSoulData*WordFemaleSoulData/1000 },
      { label: "Soul", label2:"Other",  label3:submission, label4: WordOtherSoulData,    x: 60, y: WordMaleCountryData, z: WordOtherSoulData*WordOtherSoulData/1000 },
      { label: "EDM", label2:"Male", label3:submission, label4: WordMaleEDMData,    x: 60, y: WordMaleCountryData, z: WordMaleEDMData*WordMaleEDMData/1000 },
      { label: "EDM", label2:"Female",  label3:submission, label4: WordFemaleEDMData,   x: 60, y: WordMaleCountryData, z: WordFemaleEDMData*WordFemaleEDMData/1000},
      { label: "EDM", label2:"Other",  label3:submission, label4: WordOtherEDMData,    x: 60, y: WordMaleCountryData, z: WordOtherEDMData*WordOtherEDMData/1000 },
      { label: "R&B", label2:"Male",  label3:submission, label4: WordMaleRBData,  x: 60, y: WordMaleCountryData, z: WordMaleRBData*WordMaleRBData/1000 },
      { label: "R&B", label2:"Female",  label3:submission, label4: WordFemaleRBData,  x: 60, y: WordMaleCountryData,z: WordFemaleRBData*WordFemaleRBData/1000 },
      { label: "R&B", label2:"Other",  label3:submission, label4: WordOtherRBData,   x: 60, y: WordMaleCountryData, z: WordOtherRBData*WordOtherRBData/1000 },
      //{ label: "Alternative Male", x: 36, y: WordMaleAlternativeData, z: WordMaleAlternativeData*1000.0 },
      //{ label: "Alternative Female", x: 108, y: WordFemaleAlternativeData, z: WordFemaleAlternativeData*1000.0 },
      //{ label: "Alternative Other", x: 180, y: WordOtherAlternativeData, z: WordOtherAlternativeData*1000.0 },
      { label: "Country", label2:"Male", label3:submission, label4: WordMaleCountryData,    x: 60, y: WordMaleCountryData, z: WordMaleCountryData*WordMaleCountryData/1000 },
      { label: "Country", label2:"Female",  label3:submission, label4: WordMaleCountryData,   x: 120, y: WordMaleCountryData, z: WordFemaleCountryData*WordFemaleCountryData/1000 },
      { label: "Country", label2:"Other",  label3:submission, label4: WordOtherCountryData,    x: 180, y: WordOtherCountryData, z: WordOtherCountryData*WordOtherCountryData/1000},
      { label: "Jazz", label2:"Male",  label3:submission, label4: WordMaleJazzData,   x: 60, y: WordMaleJazzData, z: WordMaleJazzData*WordMaleJazzData/1000 },
      { label: "Jazz", label2:"Female",  label3:submission, label4: WordFemaleJazzData,   x: 120, y: WordFemaleJazzData, z: WordFemaleJazzData*WordFemaleJazzData/1000 },
      { label: "Jazz", label2:"Other", label3:submission, label4: WordOtherJazzData,     x: 180, y: WordOtherJazzData, z: WordOtherJazzData*WordOtherJazzData/1000 },
      { label: "Metal", label2:"Male", label3:submission, label4: WordMaleMetalData,    x: 60, y: WordMaleMetalData, z: WordMaleMetalData*WordMaleMetalData/1000 },
      { label: "Metal", label2:"Female",  label3:submission, label4: WordFemaleMetalData,   x: 120, y: WordFemaleMetalData, z: WordFemaleMetalData*WordFemaleMetalData/1000 },
      { label: "Metal", label2:"Other",  label3:submission, label4: WordOtherMetalData,    x: 180, y: WordOtherMetalData, z: WordOtherMetalData*WordOtherMetalData/1000 },
      { label: "Folk", label2:"Male",  label3:submission, label4: WordMaleFolkData,   x: 60, y: WordMaleFolkData, z: WordMaleFolkData*WordMaleFolkData/1000},
      { label: "Folk", label2:"Female", label3:submission, label4: WordFemaleFolkData,    x: 120, y: WordFemaleFolkData, z: WordFemaleFolkData*WordFemaleFolkData/1000 },
      { label: "Folk", label2:"Other",  label3:submission, label4: WordOtherFolkData,    x: 180, y: WordOtherFolkData, z: WordOtherFolkData*WordOtherFolkData/1000 },
      { label: "Punk", label2:"Male", label3:submission,  label4: WordMalePunkData,   x: 60, y: WordMalePunkData, z: WordMalePunkData*WordMalePunkData/1000 },
      { label: "Punk", label2:"Female", label3:submission, label4: WordFemalePunkData,    x: 120, y: WordFemalePunkData, z: WordFemalePunkData*WordFemalePunkData/1000},
      { label: "Punk", label2:"Other",  label3:submission,  label4: WordOtherPunkData,   x: 180, y: WordOtherPunkData, z: WordOtherPunkData*WordOtherPunkData/1000 },
      
        

      ]
    }]
  }
  updateChart() {
    var length = this.chart1.options.data[0].dataPoints.length;
    var i
    for (i = 0; i < length; i++) { //clears the data
      this.chart1.options.data[0].dataPoints[i].label = " "
      this.chart1.options.data[0].dataPoints[i].label2 = " "
      this.chart1.options.data[0].dataPoints[i].label2 = 0
      this.chart1.options.data[0].dataPoints[i].label3 = 0
      this.chart1.options.data[0].dataPoints[i].x = NaN
      this.chart1.options.data[0].dataPoints[i].y = NaN
      this.chart1.options.data[0].dataPoints[i].z = NaN
    }
    let id = this.chart1.container.id;
    this.chart1.destroy();
    this.options.data[0].dataPoints.push(
      
      { label: "Pop", label2:"Male", label3:submission, label4: WordMalePopData, x: 30+0.5,y: 30, z: (WordMalePopData*WordMalePopData)/100 },
      { label: "Pop", label2:"Female", label3:submission, label4: WordFemalePopData,   x: 35-3, y: 50, z: WordFemalePopData*WordFemalePopData/100 },
      { label: "Pop", label2:"Other", label3:submission, label4: WordOtherPopData,    x: 30+0.5, y: 70-10, z: WordOtherPopData*WordFemalePopData/100 },
      { label: "Hip-Hop", label2:"Male", label3:submission, label4: WordMaleHipHopData,   x: 70-25+2, y: 70-10, z: WordMaleHipHopData*WordMaleHipHopData/100 },
      { label: "Hip-Hop", label2:"Female", label3:submission, label4: WordFemaleHipHopData,    x: 75-27, y: 90-10, z: WordFemaleHipHopData*WordFemaleHipHopData/100 },
      { label: "Hip-Hop", label2:"Other",  label3:submission, label4: WordOtherHipHopData,    x: 80-30, y: 65-10, z: WordOtherHipHopData*WordOtherHipHopData/100},
      { label: "Rock", label2:"Male",  label3:submission, label4: WordMaleRockData,   x: 50-20, y: 150+12, z: WordMaleRockData*WordMaleRockData/100 },
      { label: "Rock", label2:"Female", label3:submission, label4: WordFemaleRockData,    x: 45-14, y: 145+10, z: WordFemaleRockData*WordFemaleRockData/100},
      { label: "Rock", label2:"Other",  label3:submission, label4: WordOtherRockData,    x: 51-20, y: 168+4, z: WordOtherRockData*WordOtherRockData/100},
      { label: "Soul", label2:"Male",  label3:submission, label4: WordMaleSoulData,   x: 60, y: 20, z: WordMaleSoulData*WordMaleSoulData/100},
      { label: "Soul", label2:"Female", label3:submission, label4: WordFemaleSoulData,    x: 62, y: 30, z: WordFemaleSoulData*WordFemaleSoulData/100 },
      { label: "Soul", label2:"Other",  label3:submission, label4: WordOtherSoulData,    x: 57, y: 32,  z: WordOtherSoulData*WordOtherSoulData/100 },
      { label: "EDM", label2:"Male", label3:submission, label4: WordMaleEDMData,    x: 100-50+2, y: 210-30, z: WordMaleEDMData*WordMaleEDMData/100 },
      { label: "EDM", label2:"Female",  label3:submission, label4: WordFemaleEDMData,   x: 105-50, y: 200-30, z: WordFemaleEDMData*WordFemaleEDMData/100},
      { label: "EDM", label2:"Other",  label3:submission, label4: WordOtherEDMData,    x: 103-50, y: 190-30, z: WordOtherEDMData*WordOtherEDMData/100 },
      { label: "R&B", label2:"Male",  label3:submission, label4: WordMaleRBData,   x: 58-20+2, y: 195-30, z: WordMaleRBData*WordMaleRBData/100 },
      { label: "R&B", label2:"Female",  label3:submission, label4: WordFemaleRBData,   x: 63-20, y: 190-30, z: WordFemaleRBData*WordFemaleRBData/100 },
      { label: "R&B", label2:"Other",  label3:submission, label4: WordOtherRBData,    x: 61-20, y: 205-30, z: WordOtherRBData*WordOtherRBData/100 },
      //{ label: "Alternative Male", x: 36, y: WordMaleAlternativeData, z: WordMaleAlternativeData*1000.0 },
      //{ label: "Alternative Female", x: 108, y: WordFemaleAlternativeData, z: WordFemaleAlternativeData*1000.0 },
      //{ label: "Alternative Other", x: 180, y: WordOtherAlternativeData, z: WordOtherAlternativeData*1000.0 },
      { label: "Country", label2:"Male", label3:submission, label4: WordMaleCountryData,    x: 120-60-2, y: 70, z: WordMaleCountryData*WordMaleCountryData/100 },
      { label: "Country", label2:"Female",  label3:submission, label4: WordMaleCountryData,   x: 120-60-2, y: 95, z: WordFemaleCountryData*WordFemaleCountryData/100 },
      { label: "Country", label2:"Other",  label3:submission, label4: WordOtherCountryData,    x: 110-55, y: 80, z: WordOtherCountryData*WordOtherCountryData/100},
      { label: "Jazz", label2:"Male",  label3:submission, label4: WordMaleJazzData,   x: 29, y: 125-10, z: WordMaleJazzData*WordMaleJazzData/100 },
      { label: "Jazz", label2:"Female",  label3:submission, label4: WordFemaleJazzData,   x: 33-2, y: 135-25, z: WordFemaleJazzData*WordFemaleJazzData/100 },
      { label: "Jazz", label2:"Other", label3:submission, label4: WordOtherJazzData,     x: 30, y: 142-22, z: WordOtherJazzData*WordOtherJazzData/100 },
      { label: "Metal", label2:"Male", label3:submission, label4: WordMaleMetalData,    x: 45-10, y: 50+70, z: WordMaleMetalData*WordMaleMetalData/100 },
      { label: "Metal", label2:"Female",  label3:submission, label4: WordFemaleMetalData,   x: 47-11, y: 65+65, z: WordFemaleMetalData*WordFemaleMetalData/100 },
      { label: "Metal", label2:"Other",  label3:submission, label4: WordOtherMetalData,    x: 50-14+1, y: 46+70, z: WordOtherMetalData*WordOtherMetalData/100 },
      { label: "Folk", label2:"Male",  label3:submission, label4: WordMaleFolkData,   x: 100-20-30, y: 100+20, z: WordMaleFolkData*WordMaleFolkData/100},
      { label: "Folk", label2:"Female", label3:submission, label4: WordFemaleFolkData,    x: 85-20-20, y: 105+20, z: WordFemaleFolkData*WordFemaleFolkData/100 },
      { label: "Folk", label2:"Other",  label3:submission, label4: WordOtherFolkData,    x: 95-20-27, y: 115, z: WordOtherFolkData*WordOtherFolkData/100 },
      { label: "Punk", label2:"Male", label3:submission,  label4: WordMalePunkData,   x: 160-125+3, y: 50+30-10, z: WordMalePunkData*WordMalePunkData/100 },
      { label: "Punk", label2:"Female", label3:submission, label4: WordFemalePunkData,    x: 150-110, y: 57+30-10, z: WordFemalePunkData*WordFemalePunkData/100},
      { label: "Punk", label2:"Other",  label3:submission,  label4: WordOtherPunkData,   x: 150-114.5+5, y: 43+30-15, z: WordOtherPunkData*WordOtherPunkData/100 },
        );
    this.chart1 = new CanvasJS.Chart(id, this.options);
    this.chart1.render();
  }
	render() {
    return (
      
      <div className="BubbleDisplay">
        <button class="button button1" onClick={this.updateChart}><span>Update Chart</span></button>
        <h3>Frequency of the Inputed Lyric in each Genre: {submission}</h3>

        <CanvasJSChart
          options={this.options}
          onRef={ref => (this.chart1 = ref)}
        />
        
        
        
      </div>
    );

    
    
		
		
		
	}
}




function App() {
  return (
    <div className="App">
      
      <Clock/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website hosts a queryable database containing the occurance of words 
          within the lyrics of Male, Female, and Other Artists within many different genres.</p>
        
    
        
        <a
          className="App-link"
          href="https://github.com/beloiual/gendered-lyrics"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Source Code
        </a>
        <p>
        <p>
        </p>
        Input a word you want to search for and a frequency graph will appear for every gender and genre.
        </p>
        <div className="FormSubmit">
        <NameForm/>
        </div>
      
      <BubbleChart/>
      <p>



        </p> 
        <p>



        </p>
        
      </header>
    </div>
  );
}




export default App;
