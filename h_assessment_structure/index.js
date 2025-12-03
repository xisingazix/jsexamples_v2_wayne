const prompt = require("prompt-sync")({ sigint: true });
//03/12/2025
// TODO: Game elements/assets constants
const GRASS = "░";
const HOLE = "O";
const HAT = "⌂";
const PLAYER = "☻";
// TODO: UP / DOWN / LEFT / RIGHT / QUIT keyboard constants
const UP = "w";
const DOWN = "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";
// TODO: MSG_UP / MSG_DOWN / MSG_LEFT / MSG_RIGHT / MSG_ QUIT / MSG_INVALID message constants
const MSG_UP = "You moved up.";
const MSG_DOWN = "You moved down.";
const MSG_LEFT = "You moved left.";
const MSG_RIGHT = "You moved right.";
const MSG_QUIT = "You quit the game.";
const MSG_INVALID = "Invalid entry";
const MSG_WELCOME = "\n*********************************\n⌂ Welcome to Find Your Hat Game ☻\n*********************************\n";

// TODO: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds, you lost!";

// TODO: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10
const COLS = 10;
const PERCENT = 0.5;

class Field {

  /**
   * Done: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field 
   */

  constructor(field = null) {
    this.field = field;      //field is passed in as an Array to populate the property field of this class
    this.gamePlay = false;              // game is by defualt = false  , not started
    this.playerPosition = { x: 0, y: 0 }; // player position is default top left
    this.hatPosition = { x: 0, y: 0 };
    this.newPosition = { x: 0, y: 0 };
  }

  // DONE: generateField is a static method, returning a 2D array of the fields
  /**  
   * @param {Number} rows     -rows for the field
   * @param {Number} cols     -cols for the field
   * @param {Number} percent  -percentage of random holes
   * @returns {Array}         -2D array to be used by the game
   */
  static generateField(rows = 8, cols = 8, percent = 0.1) {

    const map = new Array();

    // generate field by rows and cols passed in
    for (let row = 0; row < rows; row++) {  //for each row
      map[row] = new Array();            // create a new array

      for (let col = 0; col < cols; col++) {  // for each col
        map[row][col] = Math.random() > percent ? GRASS : HOLE;    // put in grass
        // use Math.random() to randomise the holes in the map
      }
    }
    if (map[0][1] === HOLE && map[1][0] === HOLE) // player trap prevention
      map[0][1] = GRASS;
    map[1][1] = GRASS;
    return map;
  }
  // Done: welcomeMessage is a static method, displays a string
  /**
   * @param {String} msg
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }


  // TODO: setHat positions the hat along a random x and y position within field array
  setHat() {      // cannot be static as it calls upon field, a  property
    const xHat = Math.floor(Math.random() * (ROWS - 2)) + 2;
    const yHat = Math.floor(Math.random() * (COLS - 1)) + 1;
    this.field[xHat][yHat] = HAT;
    this.hatPosition.x = xHat;
    this.hatPosition.y = yHat;
  }
  // TODO: printField displays the updated status of the field position
  printField() {   // Display the updated status of field
    this.field.forEach((row) => {
      console.log(row.join(""));
    })
  }
  // TODO: updateMove displays the move (key) entered by the user
  /**
   * 
   * @param {String} m 
   * @returns 
   */
  updateMove(m) {
    if (m === UP) return console.log(MSG_UP);            // Tell user he move up
    if (m === DOWN) return console.log(MSG_DOWN);        // Tell user he move down
    if (m === LEFT) return console.log(MSG_LEFT);         // Tell user he move left
    if (m === RIGHT) return console.log(MSG_RIGHT);       // Tell user he move right
    if (m === QUIT) return console.log(MSG_QUIT);         // Tell user he quit the game
    return console.log(MSG_INVALID);                  // Tell user he entered an invalid value
  }

  // !! TODO: updateGame Assessment Challenge
  /**
   * 
   * @param {*} m   // accept the value of the player's move 
   */
  updateGame() {
    let xCur = this.playerPosition.x;
    let yCur = this.playerPosition.y;
    let xNew = this.newPosition.x;
    let yNew = this.newPosition.y;
    //capture player's currentX andY position
    //1. update the field to show the player's new position
    this.field[xCur][yCur] = GRASS


    //2. if player move out of bound, LOSE// process.exit() ; 
    if (xNew === - 1 || xNew > (ROWS - 1)) {
      console.log(OUT);
      process.exit();
    }
    if (yNew === - 1 || yNew > (COLS - 1)) {
      console.log(OUT);
      process.exit();
    }
    //3. if the player enters a hole, LOSE// process.exit() ;
    if (this.field[xNew][yNew] === HOLE) {
      console.log(LOSE);
      process.exit();
    }
    //4. if the player reach the hat, WIN
    if (xNew === this.hatPosition.x && yNew === this.hatPosition.y) {
      console.log(WIN);
      process.exit();
    }
    //otherwise,move the player to the new x and y position base on move
    this.field[xNew][yNew] = PLAYER
    this.playerPosition.x = this.newPosition.x;
    this.playerPosition.y = this.newPosition.y;
  }
  hatTrap() {  //prevent hat trapped
    if ((this.field[this.hatPosition.x - 1][this.hatPosition.y] !== GRASS) //check top
      && (this.field[this.hatPosition.x + 1][this.hatPosition.y] !== GRASS)  //check btm
      && (this.field[this.hatPosition.x][this.hatPosition.y - 1] !== GRASS) //check left   
      && (this.field[this.hatPosition.x][this.hatPosition.y + 1] !== GRASS)) //check right
    { this.field[this.hatPosition.x - 1][this.hatPosition.y] = GRASS; }
  }
  //TODO: start() a method of the class to start the game
  start() {
    this.gamePlay = true;   // set gamePLay to true to start
    this.field[0][0] = PLAYER;
    this.setHat(); //position of hat
    this.hatTrap()
    //TODO:Ask to play
    // while gamePlay === true, track the player moves and update
    do {

      this.printField();
      const input = prompt("\n(w)up, (s)down, (a)left, (d)right, (q)exit:");

      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          this.newPosition.x--;
          break;
        case DOWN:
          this.updateMove(DOWN);
          this.newPosition.x++;
          break;
        case LEFT:
          this.updateMove(LEFT);
          this.newPosition.y--;
          break;
        case RIGHT:
          this.updateMove(RIGHT);
          this.newPosition.y++;
          break;
        case QUIT:
          this.updateMove(QUIT);
          break;
        default:
          this.updateMove(); // represents INVALID entry,
          break;
      }
      if (input === QUIT)
        this.gamePlay = false; // process.exit() ;  can end the game as well

      //update new location of play in map
      this.updateGame();
    } while (this.gamePlay);  //when gamePlay is true
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);
// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);
const game = new Field(gameField);


// TODO: Create a new instance of the game

//DONE: Invoke method start(...) from the instance of game object
game.start();

