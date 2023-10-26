var song;
var slider;

function setup() {
  createCanvas(400, 400);
  song = loadSound("gods.mp3", loaded)
  slider = createSlider(0, 1, .5, 0.01)
}

function loaded() {
  song.play();
}

function draw() {
  background(random(230));
  song.setVolume(slider.value());
}
