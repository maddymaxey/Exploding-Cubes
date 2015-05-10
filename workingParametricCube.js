//////////////////
// MM Exloding cube Experiment
// For use in OpenJSCAD
////////////////


function main(params) {



var radius = 1;
var numCubes = params.gridSize;
var cubeArray = [];
var x = 0
var y = 0
var z = 0
var Xrow = 0;
var Yrow = 0;
var Zrow = 0;

for (i=0; i<(numCubes*numCubes*numCubes) ; i++){

if (x < numCubes){

//if (i%2 == 0 ){
//var cube = makeCube(0,x,y,z); // small cube
//}
//else{
var cube = makeCube(radius,x,y,z);
//}

var rotate= (params.explodeDegree*i) * (params.explodeDegree*i);
cube = cube.rotateX(rotate);
x+=radius;

} // -1,1,-1     0,1,-1    1,1,-1
// 2nd time -1,1,0     0,1,0    1,1,0
// 3rd time -1,1,1     0,1,1    1,1,1

if (x >= numCubes){
z+= radius;
x = 0; //reset X, leave Y
}

if (z >= numCubes){
y+= radius;
x = 0;
z =0;
}

//var cube = makeCube(radius,x);

//var cube = makeCube(5,4);
 //rubics cube
 //create a central cube
 //create 9x9 grid on either side of the cube
 //unite them to render into one shape
 // allow sizing up and sizing down of these additional pieces

cubeArray.push(cube);
}

var rubiks = cube.union(cubeArray);
return rubiks;

}

function makeCube(r,x,y,z){

 var centerCube = CSG.cube({
  center: [x,y,z],
  radius: [r, r, r]
});

return centerCube;

}


function getParameterDefinitions() {
  return [
    { name: 'explodeDegree', caption: 'Explode? (leave at zero for no explosion):', type: 'int', default: 0 },
 //   { name: 'squareRadius', caption: 'Square Size', type: 'int', default: 1 },
    { name: 'gridSize', caption: 'Grid Size', type: 'int', default: 3 },
    //{ name: 'circularPitch', caption: 'Circular pitch:', type: 'float', default: 10 },
    //{ name: 'pressureAngle', caption: 'Pressure angle:', type: 'float', default: 20 },
    //{ name: 'clearance', caption: 'Clearance:', type: 'float', default: 0 },
    //{ name: 'thickness', caption: 'Thickness:', type: 'float', default: 5 },
   // { name: 'centerholeradius', caption: 'Radius of center hole (0 for no hole):', type: 'float', default: 2 },
  ];
}