var song;
var slider;

function preload() {
  song = loadSound("gods.mp3")
}
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 1, .1, 0.01)
  song.play();
}

function draw() {
  background(230);
  song.setVolume(slider.value());
}
