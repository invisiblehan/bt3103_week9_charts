import { Bubble } from 'vue-chartjs';
import database from '../firebase.js';

export default {
  extends: Bubble,
  methods:{
    fetchUniversities:function(){
      let university={}
      //Get all the items from DB
      database.collection('charts').get().then((querySnapShot)=>{
        //Loop through each item
        querySnapShot.forEach(doc=>{
            //console.log(doc.id+"==>"+doc.data())
            university=doc.data()
            university.show=false
            university.id=doc.id
            this.datacollection.datasets.push(university)
        })
      })
    }, 

  },
  data: function () {
    return {
      uniList: [],


        datacollection: {
            labels: "Africa",
            datasets:[]
            // datasets: [
            //   {
            //     label: ["China"],
            //     backgroundColor: "rgba(255,221,50,0.2)",
            //     borderColor: "rgba(255,221,50,1)",
            //     data: [{
            //       x: 21269017,
            //       y: 5.245,
            //       r: 120
            //     }]
            //   }, {
            //     label: ["Denmark"],
            //     backgroundColor: "rgba(60,186,159,0.2)",
            //     borderColor: "rgba(60,186,159,1)",
            //     data: [{
            //       x: 258702,
            //       y: 7.526,
            //       r: 0.5
            //     }]
            //   }, {
            //     label: ["Germany"],
            //     backgroundColor: "rgba(0,0,0,0.2)",
            //     borderColor: "#000",
            //     data: [{
            //       x: 3979083,
            //       y: 6.994,
            //       r: 7.17
            //     }]
            //   }, {
            //     label: ["Japan"],
            //     backgroundColor: "rgba(193,46,12,0.2)",
            //     borderColor: "rgba(193,46,12,1)",
            //     data: [{
            //       x: 4931877,
            //       y: 5.921,
            //       r: 11.18
            //     }]
            //   }
            // ]
        },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}