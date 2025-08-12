
// //Object-Oriented Programming (OOP)

// class Pet {
//     constructor(name, soundText, image,soundUrl) {
//       this.name = name;
//       this.soundText = soundText;
//       this.image = image;
//       this.soundUrl =new Audio (soundUrl)// audio (this is abstaction and uncapsulation pillar of OOP  because new audio)we cant see which audio they use
//       this.playCount = 0;
//     }
  
//     speak() {
//       alert(this.soundText); //alert box
//       this.soundUrl.currentTime = 0; //insure restart each click
//       this.soundUrl.play();
//     }
  
//     play() {
//       this.playCount++;
//       this. soundUrl.load;// ensure that the sound can start without
//       this.speak();
//       updateCounter(this.playCount); //mapping
//       showFunActions(this.name);
//     }
//   }
  
//   //Global variable to store the chosen pet
//   let currentPet = null;
  
//   //Function to choose a pet
  
//   function choosePet(type) {
//     if (type === 'Dog') {
//       currentPet = new Pet('Dog', 'Woof! 🐶', //currentPet is the object
//         'https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg',
//         'media/dog-bark-effect-382711.mp3');
//     } 
//     else if(type === 'Cat'){
//       currentPet = new Pet('Cat', 'Meow! 🐱', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg','media/cat-meow-sound-383823.mp3' );
//     }
//       else if(type === 'Bird'){
//       currentPet = new Pet('bird', 'Chirp! 🦜','https://images.pexels.com/photos/987947/pexels-photo-987947.jpeg','media/bird-333090.mp3');
//     }
//       else if(type === 'Rabbit'){
//       currentPet = new Pet('Rabbit', 'squeak! 🐰','https://images.pexels.com/photos/1510544/pexels-photo-1510544.jpeg','media/rabbit-sounds-358172.mp3');
//     }
  

//   if (currentPet){
//     document.getElementById('petImage').src = currentPet.image;
//     document.getElementById('game').style.display = 'block';
//     updateCounter(0);
//     showFunActions(currentPet.name);
//   }
// }

//   //Function to play with the pet
//   function playWithPet() {
//     if (currentPet) {
//       currentPet.play();
//     }
//   }
  
//   //Function to update the counter
//   function updateCounter(count) {
//     document.getElementById('counter').innerText = `Times played: ${count}`; // ${count} its called template literal
//   }

//   function showFunActions(petName) {
//     let actions = [];
  
    
//   //Function + Loop: Fun pet actions
//   function showFunActions(petName) {
//     let actions = [];
//       if (petName === 'Dog') {
//         actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
      
//       } else if (petName === 'Cat') {
//         actions = ['Meow', 'Purr', 'Chase Mouse'];
      
//       } else if (petName === 'Rabbit') {
//         actions = ['Hopping', 'Digging', 'Eating Carrots'];

      
//       } else if (petName === 'Bird') {
//         actions = ['Squak', 'Fly', 'Chirps'];
//       }

//   //function showFunActions(petName) {
//   //  const actions = petName === 'Dog'
//    //   ? ['Bark', 'Wag Tail', 'Fetch Ball']
//     //  : ['Meow', 'Purr', 'Chase Mouse']
//     //  ? ['Chirps','fly','Squack']// Show in action box
  
// }
//      // : ['Hopping','Purr','Digging']


      

//     const actionBox = document.getElementById('actions');
//     actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
//     //Loop through actions and show them
//     for (let i = 0; i < actions.length; i++) {
//       actionBox.innerHTML += ` ${actions[i]}<br>`;
//     }
//   }
  

// Object-Oriented Programming (OOP)
class Pet {
  constructor(name, soundText, image, soundUrl) {
    this.name = name;
    this.soundText = soundText;
    this.image = image;
    this.soundUrl = new Audio(soundUrl); // abstraction: hides the audio file details
    this.playCount = 0;
  }

  speak() {
    alert(this.soundText);
    this.soundUrl.currentTime = 0; // restart sound each click
    this.soundUrl.play();
  }

  play() {
    this.playCount++;
    this.soundUrl.load;
    this.speak();
    updateCounter(this.playCount);
    showFunActions(this.name);
  }
}

// Global variable for the chosen pet
let currentPet = null;

// Function to choose a pet
function choosePet(type) {
  if (type === 'Dog') {
    currentPet = new Pet(
      'Dog',
      'Woof! 🐶',
      'https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg',
      'media/dog-bark-effect-382711.mp3'
    );
  } else if (type === 'Cat') {
    currentPet = new Pet(
      'Cat',
      'Meow! 🐱',
      'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
      'media/cat-meow-sound-383823.mp3'
    );
  } else if (type === 'Bird') {
    currentPet = new Pet(
      'Bird',
      'Chirp! 🦜',
      'https://images.pexels.com/photos/987947/pexels-photo-987947.jpeg',
      'media/bird-333090.mp3'
    );
  } else if (type === 'Rabbit') {
    currentPet = new Pet(
      'Rabbit',
      'Squeak! 🐰',
      'https://images.pexels.com/photos/1510544/pexels-photo-1510544.jpeg',
      'media/rabbit-sounds-358172.mp3'
    );
  }

  if (currentPet) {
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
}

// Function to play with the pet
function playWithPet() {
  if (currentPet) {
    currentPet.play();
  }
}

// Function to update the counter
function updateCounter(count) {
  document.getElementById('counter').innerText = `Times played: ${count}`;
}

// Function + Loop: Fun pet actions
function showFunActions(petName) {
  let actions = [];
  const name = petName.trim().toLowerCase();

  if (name === 'dog') {
    actions = ['Bark', 'Wag Tail', 'Fetch Ball'];
  } else if (name === 'cat') {
    actions = ['Meow', 'Purr', 'Chase Mouse'];
  } else if (name === 'rabbit') {
    actions = ['Hopping', 'Digging', 'Eating Carrots'];
  } else if (name === 'bird') {
    actions = ['Squawk', 'Fly', 'Chirp'];
  }

  const actionBox = document.getElementById('actions');
  actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  for (let i = 0; i < actions.length; i++) {
    actionBox.innerHTML += `${actions[i]}<br>`;
  }
}
