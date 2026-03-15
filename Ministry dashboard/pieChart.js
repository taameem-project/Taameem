const {
  PieChart,
  Pie,
  Sector,
  Tooltip
} = Recharts;


// Sample Data
const data = [
  { name: "Completed", x: 600 },
  { name: "Pending", x: 250 },
  { name: "Late", x: 100 },
  { name: "No Response", x: 50 }
];

const COLORS = [
"#1A7BA7",
"#07628A",
"#078CAC",
"#063C66"
];


// Gradient Shape

const PieGradient = (props) => {

return React.createElement(
React.Fragment,
null,

React.createElement(
"defs",
null,

React.createElement(
"radialGradient",
{
id:`fillGradient${props.index}`,
cx:props.cx,
cy:props.cy,
r:props.outerRadius,
gradientUnits:"userSpaceOnUse"
},

React.createElement("stop",{
offset:"0%",
stopColor:COLORS[props.index % COLORS.length],
stopOpacity:0
}),

React.createElement("stop",{
offset:"100%",
stopColor:COLORS[props.index % COLORS.length],
stopOpacity:0.8
})

),

React.createElement(
"clipPath",
{id:`clipPath${props.index}`},

React.createElement(Sector,props)

)

),

React.createElement(
Sector,
{
...props,
clipPath:`url(#clipPath${props.index})`,
fill:`url(#fillGradient${props.index})`,
stroke:COLORS[props.index % COLORS.length],
strokeWidth:2
}

)

)

}



// Component

function PieWithGradient(){

return React.createElement(

PieChart,

{
width:300,
height:300
},

React.createElement(Pie,{
data:data,
dataKey:"x",
innerRadius:70,
outerRadius:110,
shape:PieGradient
}),

React.createElement(Tooltip,null)

)

}



// Render

const root = ReactDOM.createRoot(
document.getElementById("pieChart")
);

root.render(
React.createElement(PieWithGradient)
);