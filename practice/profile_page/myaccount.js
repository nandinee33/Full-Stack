// this is for able to see charts . we are using apex charts

// var options = {
//     series:[
//         {
//             name:"Net Profit",
//             data: [44, 55, 57, 61, 58, 63, 60, 66],
//         },
//         {
//             name:"Revenue",
//             data: [76, 85, 101, 98, 87, 105, 91 , 114, 94],
//         },
//         {
//             name:"Net Profit",
//             data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
//         },
//     ],
//     chart:{
//         type: "bar", 
//         height: 250,
//         sparkline{
//             enabled:true,
//         },
//     },
//     plotOptions:{
//         bar:{
//             horizontal:false,
//             columnWidth:"55%",
//             endingShape: "rounded",
//         },
//     },
//     dataLabels: {
//         enabled: false,
//     },
//     stroke: {
//         show: true,
//         width: 2,
//         colors:["transparent"],
//     },
//     xaxis:{
//         categories:["Feb", "Mar", "Apr", "May", "Jun", "Jul", " Aug", "Sep", "Oct"],
//     },
//     yaxis:{
//         title: {
//             text:"$(thousands)",
//         },
//     },
//     fill :{
//         opacity:1,
//     },
//     tooltip:{
//         y:{
//             formatter: function(val){
//                 return "$ " + val + "thousands";
//             },
//         },
//     },
// };

// var charts = new AppexCharts(documnet.querySelector("#appex1"), options);
// chart.render();


var sidebar = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
    if ( !sidebarOpen){
        sidebar.classList.add("sidebar_responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList>removeEventListener("sidebar_responsive");
        sidebarOpen = false;
    }
}

