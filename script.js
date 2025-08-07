
//Object-Oriented Programming (OOP)

class Pet {
    constructor(name, sound, image) {
      this.name = name;
      this.sound = sound;
      this.image = image;
      this.playCount = 0;
    }
  
    speak() {
      alert(this.sound);
    }
  
    play() {
      this.playCount++;
      this.speak();
      updateCounter(this.playCount);
      showFunActions(this.name);
    }
  }
  
  //Global variable to store the chosen pet
  let currentPet = null;
  
  //Function to choose a pet
  
  function choosePet(type) {
    if (type === 'dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'https://images.pexels.com/photos/20681880/pexels-photo-20681880.jpeg');
      if (type === 'dog') {
      currentPet = new Pet('Cat', 'Meew! 🐱', 'https://images.pexels.com/photos/20681880/pexels-photo-20681880.jpeg');
      }
    } else {
    currentPet = new Pet('Bird', 'clirp! 🦜', 'https://www.pexels.com/photo/close-up-of-a-graceful-pink-flamingo-preening-33277095/');
    
    currentPet = new Pet('Rabbit', 'squeak! 🐰', 'https://images.pexels.com/photos/18848682/pexels-photo-18848682.jpeg');
  }
  
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
  

  //Function to play with the pet
  function playWithPet() {
    if (currentPet) {
      currentPet.play();
    }
  }
  
  //Function to update the counter
  function updateCounter(count) {
    document.getElementById('counter').innerText = `Times played: ${count}`;
  }
  
  //Function + Loop: Fun pet actions
  function showFunActions(petName) {
    const actions = petName === 'Dog'
      ? ['Bark', 'Wag Tail', 'Fetch Ball']
      : ['Meow', 'Purr', 'Chase Mouse'];
  
    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    //Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += ` ${actions[i]}<br>`;
    }
  }
  