var database;
var form
var catimg, cat
var foodimg, foodbowlw
var food
function preload() {
  catimg = loadImage("Cat.webp")
  foodimg = loadImage("foodbowl.jpg")
}

function setup() {
  
  database = firebase.database();
  createCanvas(800, 600);
  cat = createSprite (520,100,100,100)
  cat.addImage(catimg)
  foodbowlw = createSprite (200,250,20,20)
  foodbowlw.addImage(foodimg)
  foodbowlw.scale = 0.1

  var ref = database.ref("foodcount")
  ref.on("value", function (data){
  food = data.val()
  
  })
 
}

function draw() {
  background("white");
  textSize(30)
  text("food stocks: " + food,10,50)
  drawSprites()
  if (keyDown(DOWN_ARROW)){
    database.ref("/").update({
      foodcount:food - 1
    })
  }
}
