function closePrompt() {
    document.getElementById('welcomePrompt').style.display = 'none';
    document.getElementById('mainProject').style.display = 'block';
  }
  
  function playIntroductionAndShowImage() {
    // Play audio
    const audio = new Audio('JarvisIntro.mp3'); // Replace with your audio file path
    audio.play();
  
    // Show image
    const introImage = document.getElementById('introImage');
    const imageElement = document.getElementById('imageElement');
  
    // Set the image source (replace with your image path)
    imageElement.src = 'prompt-gif.gif'; // Replace with your image path
  
    // Display the image
    introImage.style.display = 'block';
  }
  
  let promptPara = document.getElementById("propmt-para")

  let retainPrompPara = () =>
  {
    promptPara.style.display = 'block'

  }

let proceedBtn = document.getElementById('proceed-btn')

let showProceedBtn = () =>
{
  proceedBtn.style.display = "block"
}

let disclaimer = document.getElementsByClassName('disclaimer')

let removeDisc = () =>
{
  for (let i = 0; i < disclaimer.length; i++) {
    disclaimer[i].style.display = 'none';
  }
}
 document.getElementById('propmt-para')