var song;
var sliderRate;
var sliderPan;

function setup() {
  createCanvas(400, 400);
  song = loadSound("gods.mp3", loaded)
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01)
  sliderPan = createSlider(-1, 1, .5, 0.01)

}

function loaded() {
  song.play();
}

function draw() {
  background(random(230));
  song.rate(sliderRate.value());
  song.pan(sliderPan.value());
}
