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
        <h2>It is {this.state.date.toLocaleTimeString()} EST</h2>
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
      WordMalePopData=MalePopData[(this.state.value).toLowerCase()];

      MaleHipHopData = MaleData["Hip-Hop"];
      WordMaleHipHopData=MaleHipHopData[(this.state.value).toLowerCase()];

      MaleRockData = MaleData["Rock"];
      WordMaleRockData=MaleRockData[(this.state.value).toLowerCase()];

      MaleSoulData = MaleData["Soul"];
      WordMaleSoulData=MaleSoulData[(this.state.value).toLowerCase()];

      MaleEDMData = MaleData["EDM"];
      WordMaleEDMData=MaleEDMData[(this.state.value).toLowerCase()];

      MaleRBData = MaleData["R&B"];
      WordMaleRBData=MaleRBData[(this.state.value).toLowerCase()];

      MaleAlternativeData = MaleData["Movie"];
      WordMaleAltenativeData=MaleAlternativeData[(this.state.value).toLowerCase()];

      MaleCountryData = MaleData["Country"];
      WordMaleCountryData=MaleCountryData[(this.state.value).toLowerCase()];

      MaleJazzData = MaleData["Jazz"];
      WordMaleJazzData=MaleJazzData[(this.state.value).toLowerCase()];

      MaleMetalData = MaleData["Metal"];
      WordMaleMetalData=MaleMetalData[(this.state.value).toLowerCase()];

      MaleFolkData = MaleData["Folk"];
      WordMaleFolkData=MaleFolkData[(this.state.value).toLowerCase()];

      MalePunkData = MaleData["Punk"];
      WordMalePunkData=MalePunkData[(this.state.value).toLowerCase()];


      FemaleData= totalData["Female"]; //Female data

      FemalePopData = FemaleData["Pop"];
      WordFemalePopData=FemalePopData[(this.state.value).toLowerCase()];

      FemaleHipHopData = FemaleData["Hip-Hop"];
      WordFemaleHipHopData=FemaleHipHopData[(this.state.value).toLowerCase()];

      FemaleRockData = FemaleData["Rock"];
      WordFemaleRockData=FemaleRockData[(this.state.value).toLowerCase()];

      FemaleSoulData = FemaleData["Soul"];
      WordFemaleSoulData=FemaleSoulData[(this.state.value).toLowerCase()];

      FemaleEDMData = FemaleData["EDM"];
      WordFemaleEDMData=FemaleEDMData[(this.state.value).toLowerCase()];

      FemaleRBData = FemaleData["R&B"];
      WordFemaleRBData=FemaleRBData[(this.state.value).toLowerCase()];

      FemaleAlternativeData = FemaleData["Movie"];
      WordFemaleAltenativeData=FemaleAlternativeData[(this.state.value).toLowerCase()];


      FemaleCountryData = FemaleData["Country"];
      WordFemaleCountryData=FemaleCountryData[(this.state.value).toLowerCase()];

      FemaleJazzData = FemaleData["Jazz"];
      WordFemaleJazzData=FemaleJazzData[(this.state.value).toLowerCase()];

      FemaleMetalData = FemaleData["Metal"];
      WordFemaleMetalData=FemaleMetalData[(this.state.value).toLowerCase()];

      FemaleFolkData = FemaleData["Folk"];
      WordFemaleFolkData=FemaleFolkData[(this.state.value).toLowerCase()];

      FemalePunkData = FemaleData["Punk"];
      WordFemalePunkData=FemalePunkData[(this.state.value).toLowerCase()];


      OtherData= totalData["other"]; //otherData

      OtherPopData = OtherData["Pop"];
      WordOtherPopData=OtherPopData[(this.state.value).toLowerCase()];

      OtherHipHopData = OtherData["Hip-Hop"];
      WordOtherHipHopData=OtherHipHopData[(this.state.value).toLowerCase()];

      OtherRockData = OtherData["Rock"];
      WordOtherRockData=OtherRockData[(this.state.value).toLowerCase()];

      OtherSoulData = OtherData["Soul"];
      WordOtherSoulData=OtherSoulData[(this.state.value).toLowerCase()];

      OtherEDMData = OtherData["EDM"];
      WordOtherEDMData=OtherEDMData[(this.state.value).toLowerCase()];

      OtherRBData = OtherData["R&B"];
      WordOtherRBData=OtherRBData[(this.state.value).toLowerCase()];

      OtherAlternativeData = OtherData["Movie"];
      WordOtherAltenativeData=OtherAlternativeData[(this.state.value).toLowerCase()];

      

      OtherCountryData = OtherData["Country"];
      WordOtherCountryData=OtherCountryData[(this.state.value).toLowerCase()];

      OtherJazzData = OtherData["Jazz"];
      WordOtherJazzData=OtherJazzData[(this.state.value).toLowerCase()];

      OtherMetalData = OtherData["Metal"];
      WordOtherMetalData=OtherMetalData[(this.state.value).toLowerCase()];

      OtherFolkData = OtherData["Folk"];
      WordOtherFolkData=OtherFolkData[(this.state.value).toLowerCase()];

      OtherPunkData = OtherData["Punk"];
      WordOtherPunkData=OtherPunkData[(this.state.value).toLowerCase()];

      if(WordMalePopData===undefined){
  WordMalePopData=0;
}

if(WordMaleHipHopData===undefined){
  WordMaleHipHopData=0;
}


if(WordMaleRockData===undefined){
  WordMaleRockData=0;}

if(WordMaleSoulData===undefined){
  WordMaleSoulData=0;}

if(WordMaleEDMData===undefined){
  WordMaleEDMData=0;}

if(WordMaleRBData===undefined){
  WordMaleRBData=0;}

if(WordMaleAltenativeData===undefined){
  WordMaleAltenativeData=0;}



if(WordMaleCountryData===undefined){
  WordMaleCountryData=0;}

if(WordMaleJazzData===undefined){
  WordMaleJazzData=0;}

if(WordMaleMetalData===undefined){
  WordMaleMetalData=0;}

if(WordMaleFolkData===undefined){
  WordMaleFolkData=0;}

if(WordMalePunkData===undefined){
  WordMalePunkData=0;}

if(WordFemalePopData===undefined){
  WordFemalePopData=0;}
if(WordFemaleHipHopData===undefined){
  WordFemaleHipHopData=0;}
 if(WordFemaleRockData===undefined){
  WordFemaleRockData=0;}
 
if(WordFemaleSoulData===undefined){
  WordFemaleSoulData=0;}
 
if(WordFemaleEDMData===undefined){
  WordFemaleEDMData=0;}
  
if(WordFemaleRBData===undefined){
  WordFemaleRBData=0;}
if(WordFemaleAltenativeData===undefined){
  WordFemaleAltenativeData=0;}

if(WordFemaleCountryData===undefined){
  WordFemaleCountryData=0;}
 
if(WordFemaleJazzData===undefined){
  WordFemaleJazzData=0;}

if(WordFemaleMetalData===undefined){
  WordFemaleMetalData=0;}
if(WordFemaleFolkData===undefined){
  WordFemaleFolkData=0;}
if(WordFemalePunkData===undefined){
  WordFemalePunkData=0;}
if(WordOtherPopData===undefined){
  WordOtherPopData=0;}
if(WordOtherHipHopData===undefined){
  WordOtherHipHopData=0;}
if(WordOtherRockData===undefined){
  WordOtherRockData=0;}
if(WordOtherSoulData===undefined){
  WordOtherSoulData=0;}

if(WordOtherEDMData===undefined){
  WordOtherEDMData=0;}

if(WordOtherRBData===undefined){
  WordOtherRBData=0;}

if(WordOtherAltenativeData===undefined){
  WordOtherAltenativeData=0;}

if(WordOtherCountryData===undefined){
  WordOtherCountryData=0;}
 
if(WordOtherJazzData===undefined){
  WordOtherJazzData=0;}

if(WordOtherMetalData===undefined){
  WordOtherMetalData=0;}

if(WordOtherFolkData===undefined){
  WordOtherFolkData=0;}

if(WordOtherPunkData===undefined){
  WordOtherPunkData=0;}

      
    
    
    
    
    
    
  
    
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
    backgroundColor: "#0d1117",
    width: 1800,
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
      indexLabel: "{label}: {label2}",
      indexLabelFontSize: 13,
      toolTipContent: "<b>{label2} {label} Artists</b><br>Words Per Million (WPM) of  {label3} : {label4} <br> ",
      dataPoints: [


        { label: "Pop", label2:"Male", label3:submission, label4: WordMalePopData, x: 60, y: WordMaleCountryData, z: (WordMalePopData*WordMalePopData)/1000 },
      { label: "Pop", label2:"Female", label3:submission, label4: WordFemalePopData,  x: 60, y: WordMaleCountryData, z: WordFemalePopData*WordFemalePopData/1000 },
      { label: "Pop", label2:"Other", label3:submission, label4: WordOtherPopData,    x: 60, y: WordMaleCountryData, z: WordOtherPopData*WordFemalePopData/1000 },
      { label: "Hip-Hop", label2:"Male", label3:submission, label4: WordMaleHipHopData,  x: 60, y: WordMaleCountryData, z: WordMaleHipHopData*WordMaleHipHopData/1000 },
      { label: "Hip-Hop", label2:"Female", label3:submission, label4: WordFemaleHipHopData,    x: 60, y: WordMaleCountryData, z: WordFemaleHipHopData*WordFemaleHipHopData/1000 },
      { label: "Hip-Hop", label2:"Other",  label3:submission, label4: WordOtherHipHopData,    x: 60, y: WordMaleCountryData, z: WordOtherHipHopData*WordOtherHipHopData/1000},
      { label: "Rock", label2:"Male",  label3:submission, label4: WordMaleRockData,  x: 60, y: WordMaleCountryData, z: WordMaleRockData*WordMaleRockData/1000 },
      { label: "Rock", label2:"Female", label3:submission, label4: WordFemaleRockData,   x: 60, y: WordMaleCountryData, z: WordFemaleRockData*WordFemaleRockData/1000},
      { label: "Rock", label2:"Other",  label3:submission, label4: WordOtherRockData,    x: 60, y: WordMaleCountryData, z: WordOtherRockData*WordOtherRockData/1000},
      
      { label: "Movie", label2:"Other",  label3:submission, label4: WordOtherAltenativeData,    x: 60, y: WordOtherAltenativeData, z: WordOtherAltenativeData*WordOtherAltenativeData/1000 },
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
      
      { label: "Pop", label2:"Male", label3:submission, label4: ((WordMalePopData/MalePopData["/Sum/"])*1000000), x: 30+0.5,y: 30, z: ((WordMalePopData/MalePopData["/Sum/"])*1000000) },
      { label: "Pop", label2:"Female", label3:submission, label4: ((WordFemalePopData/FemalePopData["/Sum/"])*1000000),   x: 35-3, y: 50, z: ((WordFemalePopData/FemalePopData["/Sum/"])*1000000) },
      { label: "Pop", label2:"Other", label3:submission, label4: ((WordOtherPopData/OtherPopData["/Sum/"])*1000000),    x: 30+0.5, y: 70-10, z: ((WordOtherPopData/OtherPopData["/Sum/"])*1000000) },
      { label: "Hip-Hop", label2:"Male", label3:submission, label4: ((WordMaleHipHopData/MaleHipHopData["/Sum/"])*1000000),   x: 70-25+2, y: 70-10, z: ((WordMaleHipHopData/MaleHipHopData["/Sum/"])*1000000) },
      { label: "Hip-Hop", label2:"Female", label3:submission, label4: ((WordFemaleHipHopData/FemaleHipHopData["/Sum/"])*1000000),    x: 75-27, y: 90-10, z: ((WordFemaleHipHopData/FemaleHipHopData["/Sum/"])*1000000) },
      { label: "Hip-Hop", label2:"Other",  label3:submission, label4: ((WordOtherHipHopData/OtherHipHopData["/Sum/"])*1000000),    x: 80-30, y: 65-10, z: ((WordOtherHipHopData/OtherHipHopData["/Sum/"])*1000000)},
      { label: "Rock", label2:"Male",  label3:submission, label4: ((WordMaleRockData/MaleRockData["/Sum/"])*1000000),   x: 50-20, y: 150+5, z: ((WordMaleRockData/MaleRockData["/Sum/"])*1000000) },
      { label: "Rock", label2:"Female", label3:submission, label4: ((WordFemaleRockData/FemaleRockData["/Sum/"])*1000000),    x: 32, y: 195-30, z: ((WordFemaleRockData/FemaleRockData["/Sum/"])*1000000)},
      { label: "Rock", label2:"Other",  label3:submission, label4: ((WordOtherRockData/OtherRockData["/Sum/"])*1000000),    x: 51-20, y: 168+4, z: ((WordOtherRockData/OtherRockData["/Sum/"])*1000000)},
      { label: "Movie", label2:"Other",  label3:submission, label4: ((WordOtherAltenativeData/OtherAlternativeData["/Sum/"])*1000000),    x: 57, y: 32,  z: ((WordOtherAltenativeData/OtherAlternativeData["/Sum/"])*1000000) },
      { label: "EDM", label2:"Male", label3:submission, label4: ((WordMaleEDMData/MaleEDMData["/Sum/"])*1000000),    x: 100-50+2, y: 210-30, z: ((WordMaleEDMData/MaleEDMData["/Sum/"])*1000000)},
      { label: "EDM", label2:"Female",  label3:submission, label4: ((WordFemaleEDMData/FemaleEDMData["/Sum/"])*1000000),   x: 105-50, y: 200-30, z: ((WordFemaleEDMData/FemaleEDMData["/Sum/"])*1000000)},
      { label: "EDM", label2:"Other",  label3:submission, label4: ((WordOtherEDMData/OtherEDMData["/Sum/"])*1000000),    x: 103-50, y: 190-30, z: ((WordOtherEDMData/OtherEDMData["/Sum/"])*1000000) },
      { label: "R&B", label2:"Male",  label3:submission, label4: ((WordMaleRBData/MaleRBData["/Sum/"])*1000000),   x: 58-27+6, y: 195-30, z: ((WordMaleRBData/MaleRBData["/Sum/"])*1000000)},
      { label: "R&B", label2:"Female",  label3:submission, label4: ((WordFemaleRBData/FemaleRBData["/Sum/"])*1000000),   x: 63-20, y: 190-30, z: ((WordFemaleRBData/FemaleRBData["/Sum/"])*1000000) },
      { label: "R&B", label2:"Other",  label3:submission, label4: ((WordOtherRBData/OtherRBData["/Sum/"])*1000000),    x: 61-20, y: 205-30, z: ((WordOtherRBData/OtherRBData["/Sum/"])*1000000) },
      { label: "Country", label2:"Male", label3:submission, label4: ((WordMaleCountryData/MaleCountryData["/Sum/"])*1000000),    x: 120-60-2, y: 70, z: ((WordMaleCountryData/MaleCountryData["/Sum/"])*1000000) },
      { label: "Country", label2:"Female",  label3:submission, label4: ((WordFemaleCountryData/FemaleCountryData["/Sum/"])*1000000),   x: 120-60-2, y: 95, z: ((WordFemaleCountryData/FemaleCountryData["/Sum/"])*1000000) },
      { label: "Country", label2:"Other",  label3:submission, label4: ((WordOtherCountryData/OtherCountryData["/Sum/"])*1000000),    x: 110-55, y: 80, z: ((WordOtherCountryData/OtherCountryData["/Sum/"])*1000000)},
      { label: "Jazz", label2:"Male",  label3:submission, label4: ((WordMaleJazzData/MaleJazzData["/Sum/"])*1000000),   x: 29, y: 125-10-2, z: ((WordMaleJazzData/MaleJazzData["/Sum/"])*1000000) },
      { label: "Jazz", label2:"Female",  label3:submission, label4: ((WordFemaleJazzData/FemaleJazzData["/Sum/"])*1000000),   x: 33-2, y: 135-25, z: ((WordFemaleJazzData/FemaleJazzData["/Sum/"])*1000000) },
      { label: "Jazz", label2:"Other", label3:submission, label4: ((WordOtherJazzData/OtherJazzData["/Sum/"])*1000000),     x: 30, y: 142-22, z: ((WordOtherJazzData/OtherJazzData["/Sum/"])*1000000) },
      { label: "Metal", label2:"Male", label3:submission, label4: ((WordMaleMetalData/MaleMetalData["/Sum/"])*1000000),    x: 45-7, y: 50+70, z:((WordMaleMetalData/MaleMetalData["/Sum/"])*1000000)},
      { label: "Metal", label2:"Female",  label3:submission, label4: ((WordFemaleMetalData/FemaleMetalData["/Sum/"])*1000000),   x: 47-1+3-8, y: 65+65+5, z: ((WordFemaleMetalData/FemaleMetalData["/Sum/"])*1000000) },
      { label: "Metal", label2:"Other",  label3:submission, label4: ((WordOtherMetalData/OtherMetalData["/Sum/"])*1000000),    x: 50-4+1-7, y: 46+70, z: ((WordOtherMetalData/OtherMetalData["/Sum/"])*1000000) },
      { label: "Folk", label2:"Male",  label3:submission, label4: ((WordMaleFolkData/MaleFolkData["/Sum/"])*1000000),   x: 100-20-30, y: 100+20, z: ((WordMaleFolkData/MaleFolkData["/Sum/"])*1000000)},
      { label: "Folk", label2:"Female", label3:submission, label4: ((WordFemaleFolkData/FemaleFolkData["/Sum/"])*1000000),    x: 85-20-20, y: 105+20, z: ((WordFemaleFolkData/FemaleFolkData["/Sum/"])*1000000)},
      { label: "Folk", label2:"Other",  label3:submission, label4: ((WordOtherFolkData/OtherFolkData["/Sum/"])*1000000),    x: 95-20-27, y: 115-5, z: ((WordOtherFolkData/OtherFolkData["/Sum/"])*1000000) },
      { label: "Punk", label2:"Male", label3:submission,  label4: ((WordMalePunkData/MalePunkData["/Sum/"])*1000000),   x: 160-125+3, y: 50+30-10, z:((WordMalePunkData/MalePunkData["/Sum/"])*1000000) },
      { label: "Punk", label2:"Female", label3:submission, label4: ((WordFemalePunkData/FemalePunkData["/Sum/"])*1000000),    x: 150-110, y: 57+30-10, z: ((WordFemalePunkData/FemalePunkData["/Sum/"])*1000000)},
      { label: "Punk", label2:"Other",  label3:submission,  label4: ((WordOtherPunkData/OtherPunkData["/Sum/"])*1000000),   x: 150-114.5+5, y: 43+30-15, z: ((WordOtherPunkData/OtherPunkData["/Sum/"])*1000000) },
        );
    this.chart1 = new CanvasJS.Chart(id, this.options);
    var customForm = `<form><h3>Frequency of the word ${submission} in each Genre</h3></form>`
    document.getElementById("content").innerHTML = customForm;
    this.chart1.render();
  }
	render() {
    return (
      
      <div className="BubbleDisplay">
        <button class="button button1" onClick={this.updateChart}><span>Update Chart</span></button>
        <div id="content">

        </div>

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
        
        
    
        <header className="Main-Text">
        <a
          className="App-link"
          href="https://github.com/beloiual/gendered-lyrics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
        <p>
          This website hosts a queryable database containing the occurance of words 
          within the lyrics of Male, Female, and Other Artists within many different genres.</p>
        <p>
        Input a word you want to search for and a frequency graph will appear showing you the frequency of the lyric in songs by different gendered artists in numerous genres.
        </p>
        <p>
        </p>
        </header>
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
