let numberOne = 0;
let operation = '+';
let numberTwo = 0;
let currentNumber = 1;

function clickNine() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 9;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 9;
        console.log(numberTwo)
    }
}

function clickEight() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 8;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 8;
        console.log(numberTwo)
    }
}

function clickSeven() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 7;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 7;
        console.log(numberTwo)
    }
}

function clickSix() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 6;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 6;
        console.log(numberTwo)
    }
}

function clickFive() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 5;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 5;
        console.log(numberTwo)
    }
}

function clickFour() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 4;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 4;
        console.log(numberTwo)
    }
}

function clickThree() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 3;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 3;
        console.log(numberTwo)
    }
}

function clickTwo() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 2;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 2;
        console.log(numberTwo)
    }
}

function clickOne() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 1;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 1;
        console.log(numberTwo)
    }
}

function clickZero() {
    if (currentNumber === 1) {
        numberOne = numberOne * 10 + 0;
        console.log(numberOne)
    } else {
        numberTwo = numberTwo * 10 + 0;
        console.log(numberTwo)
    }
}

function clickAddition() {
    operation = "+";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickSubstraction() {
    operation = "-";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickMultiplication() {
    operation = "*";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickDivision() {
    operation = "/";
    if (currentNumber === 1) {
        currentNumber = 2;
    }
}

function clickClear() {
    numberOne = 0;
    operation = '+';
    numberTwo = 0;
    currentNumber = 1;

    console.log("Number 1: " + numberOne);
    console.log("operation: " + operation);
    console.log("Number 2: " + numberTwo);
    console.log("currentNumber: " + currentNumber);
}

function calculate() {
    if (operation === '+') {
        let current = numberOne + numberTwo; 
        console.log(current);
        numberOne = current;
        numberTwo = 0;
    }

    if (operation === '-') {
        let current = numberOne - numberTwo; 
        console.log(current);
        numberOne = current;
        numberTwo = 0;
    }

    if (operation === '*') {
        let current = numberOne * numberTwo; 
        console.log(current);
        numberOne = current;
        numberTwo = 0;
    }

    if (operation === '/') {
        let current = numberOne / numberTwo; 
        console.log(current);
        numberOne = current;
        numberTwo = 0;
    }
}

// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create 3D objects to represent calculator UI elements
const calculatorDisplayGeometry = new THREE.BoxGeometry(2, 0.5, 0.1);
const calculatorDisplayMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const calculatorDisplayMesh = new THREE.Mesh(calculatorDisplayGeometry, calculatorDisplayMaterial);
scene.add(calculatorDisplayMesh);

const button1Geometry = new THREE.BoxGeometry(1, 1, 0.1);
const button1Material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const button1Mesh = new THREE.Mesh(button1Geometry, button1Material);
scene.add(button1Mesh);
button1Mesh.position.set(-1, -1, 0);

const button2Geometry = new THREE.BoxGeometry(1, 1, 0.1);
const button2Material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const button2Mesh = new THREE.Mesh(button2Geometry, button2Material);
scene.add(button2Mesh);
button2Mesh.position.set(1, -1, 0);

// Mouse interaction for rotation
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

function onDocumentMouseDown(event) {
    event.preventDefault();
    isDragging = true;
    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    if (isDragging) {
        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));

        scene.quaternion.multiplyQuaternions(deltaRotationQuaternion, scene.quaternion);

        previousMousePosition = {
            x: event.clientX,
            y: event.clientY
        };
    }
}

function onDocumentMouseUp(event) {
    event.preventDefault();
    isDragging = false;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

document.addEventListener('mousedown', onDocumentMouseDown, false);
document.addEventListener('mousemove', onDocumentMouseMove, false);
document.addEventListener('mouseup', onDocumentMouseUp, false);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();