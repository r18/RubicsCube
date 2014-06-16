function main(){
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  joint1 = new Joint();
  scene.add(joint1.centerCube);
  camera.position.z = 5;
  render = function () { requestAnimationFrame(render);
    joint1.cube.rotation.x += 0.01;
    joint1.cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  render();
}

function EdgeCube(){
  
}

function VertexCube(){

}


function JointCube(){
  var geometry = new THREE.CubeGeometry(1,1,1);
  var cubeMaterials = [ 
    new THREE.MeshBasicMaterial({color:0xFF0000}), 
        new THREE.MeshBasicMaterial({color:0x00FF00}), 
        new THREE.MeshBasicMaterial({color:0x0000FF}), 
        new THREE.MeshBasicMaterial({color:0xFFFF00}), 
        new THREE.MeshBasicMaterial({color:0x00FFFF}), 
        new THREE.MeshBasicMaterial({color:0xFFFFFF}) 
          ]; 
  var material = new THREE.MeshFaceMaterial(cubeMaterials);
  this.centerCube = new THREE.Mesh(geometry, material);
}

Joint.prototype = {
  changeDirction: function(){

                  },
  initDirection:function(){

                },
  getAdjoiningCubes:function(){

                    },
  removeAdjoiningCubes:function(){

                       },
  setAdjoiningCubes:function(){

                    },
  mouseenter: function(){
                console.log(this);
                for(i in this.cube.material.materials){
                  this.cube.material.materials[i].color.r *= 0.5;
                  this.cube.material.materials[i].color.g *= 0.5;
                  this.cube.material.materials[i].color.b *= 0.5;
                }
              },
  mouseleave: function(){
                for(i in this.cube.material.materials){
                  this.cube.material.materials[i].color.r *= 5;
                  this.cube.material.materials[i].color.g *= 5;
                  this.cube.material.materials[i].color.b *= 5;
                }
              }
}
