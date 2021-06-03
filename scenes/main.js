const speed = 90;
let speedMod = 1;
const rightBound = 58;
const leftBound = 12;

layers([
  "bg",
  "car",
  "ui",
], "car");

add([
  sprite('background'),
  pos(0,0),
  layer('bg'),
  "road",
]);


const car = add([
  sprite('car'),
  pos(36.5,80), 
]);


add([
		sprite("background"),
		pos(0, -height()),
    layer('bg'),
		"road"
	]);



 action("road", (r) => {
    r.move(0,speed * speedMod);
    if (r.pos.y >= height()) {
			r.pos.y += -height() * 2;
		}
});

keyDown("right", () => {
  if (car.pos.x <= rightBound){
    car.move(speed / 2, 0);
  }
});

keyDown("left", () => {
    if (car.pos.x >= leftBound){
    car.move(-speed / 2, 0);
  }
});

keyDown("up", () => {
  speedMod = 1.5;
});

keyRelease("up", () => {
  speedMod = 1;
});

keyDown("down", () => {
  speedMod = 0.55;
});

keyRelease("down", () => {
  speedMod = 1;
});


loop(0.6, () => {
    add([
    sprite('enemy'),
    pos(rand(leftBound, rightBound), -50),
    "enemy",
    "move",
  ]);

}); 

action("move", (o) => {
  o.move(0, (speed - 20) * speedMod);
   if (o.pos.y > height() + 10) {
    destroy(o);
    happiness.value += 1;
  }
});

car.collides("enemy", (e) => {
  go("death", { score: happiness.value, })
});



const happiness = add([
		text("0", 4),
		pos(4, 4),
		layer("ui"),
		{
			value: 0,
		},
	]);

happiness.action(() => {
		happiness.text = `score: ${happiness.value}`;
	});
  






