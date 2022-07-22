const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let images = [];
let imageIndex = 0;
let counter = 0;
let animation;
let pause = false;

getImages();
animation = requestAnimationFrame(spinAnimation);

window.addEventListener('click', () => {
    if(!pause){
        window.cancelAnimationFrame(animation);
        pause = true;
    }
    else{
        window.requestAnimationFrame(spinAnimation);
        pause = false;
    }
});

function getImages(){
    for (let i = 0; i <= 71; i += 1) {
        let url = `./sprites/ipod-${i+1}.jpeg`;
        let image = new Image();
    
        image.src = url;
    
        images[i] = image;
    }
}

function spinAnimation(){
    if(imageIndex == 71){    
        counter = 0;
        imageIndex = 0;
    }
    if(counter % 3 == 0){
        ctx.drawImage(images[imageIndex], 0, 0, canvas.width, canvas.height);

        imageIndex++;
    }
    counter++;
    animation = requestAnimationFrame(spinAnimation);
}
