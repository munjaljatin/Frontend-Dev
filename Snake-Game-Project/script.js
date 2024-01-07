document.addEventListener("DOMContentLoaded", () => {
  const gameArena = document.getElementById("game-arena");
  const arenaSize = 600;
  const cellSize = 20;
  let score = 0;
  let gameStarted = false;
  // food object
  let food = { x: 300, y: 200 };
  let snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];
  // displacement on x-axis
  let dx = cellSize;
  // displacement on y-axis
  let dy = 0;
});
