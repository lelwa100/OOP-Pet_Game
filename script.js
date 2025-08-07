
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
    if (type === 'Dog') {
      currentPet = new Pet('Dog', 'Woof! 🐶', 'https://images.pexels.com/photos/3299908/pexels-photo-3299908.jpeg');
    } 
    else if(type === 'Cat'){
      currentPet = new Pet('Cat', 'Meow! 🐱', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg');
    }
      else if(type === 'Bird'){
      currentPet = new Pet('bird', 'Chirp! 🦜','https://images.pexels.com/photos/987947/pexels-photo-987947.jpeg');
    }
      else if(type === 'Rabbit'){
      currentPet = new Pet('Rabbit', 'squeak! 🐰','https://images.pexels.com/photos/1510544/pexels-photo-1510544.jpeg');
    }
  

  if (currentPet){
    document.getElementById('petImage').src = currentPet.image;
    document.getElementById('game').style.display = 'block';
    updateCounter(0);
    showFunActions(currentPet.name);
  }
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
      : ['Meow', 'Purr', 'Chase Mouse']
      

    const actionBox = document.getElementById('actions');
    actionBox.innerHTML = '<strong>Fun Actions:</strong><br>';
  
    //Loop through actions and show them
    for (let i = 0; i < actions.length; i++) {
      actionBox.innerHTML += ` ${actions[i]}<br>`;
    }
  }
  