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
const MSG_UP = "You moved up. \n\n";
const MSG_DOWN = "You moved down.\n\n";
const MSG_LEFT = "You moved left.\n\n";
const MSG_RIGHT = "You moved right.\n\n";
const MSG_QUIT = "You quit the game.\n\n";
const MSG_INVALID = "Invalid entry\n\n";
const MSG_WELCOME = "\n*********************************\n⌂ Welcome to Find Your Hat Game ☻\n*********************************\n";

// Done: WIN / LOSE / OUT / QUIT messages constants
const WIN = "Congratulations, you won!";
const LOSE = "You fell into a hole, you lost!";
const OUT = "You went out-of-bounds, you lost!";

// Done: MAP ROWS, COLUMNS AND PERCENTAGE
const ROWS = 10;
const COLS = 10;
const PERCENT = 0.3;

class Field {

  /**
   * Done: constructor, a built-in method of a class (invoked when an object of a class is instantiated)
   * @param {Array} field 
   */

  constructor(field = null) {
    this.field = field;      //field is passed in as an Array to populate the property field of this class
    this.gamePlay = false;              // game is by defualt = false  , not started
    this.playerPosition = { x: 0, y: 0 }; // player position is default top left
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
    return map;
  }
  // Done: welcomeMessage is a static method, displays a string
  /**
   * @param {String} msg
   */
  static welcomeMessage(msg) {
    console.log(msg);
  }


  // DONE: setHat positions the hat along a random x and y position within field array
  setHat() {      // cannot be static as it calls upon field, a  property
    const xHat = Math.floor(Math.random() * (ROWS - 2)) + 2;
    const yHat = Math.floor(Math.random() * (COLS - 2)) + 2;
    this.field[xHat][yHat] = HAT;
    if ((this.field[xHat - 1][yHat] === HOLE)    // Prevent hat from being trapped check top
      && (xHat === (ROWS - 1) || this.field[xHat + 1][yHat] === HOLE)   //check btm
      && (yHat === 0 || this.field[xHat][yHat - 1] === HOLE)   //check left   
      && (yHat === (COLS - 1) || this.field[xHat][yHat + 1] === HOLE)) { //check right
      this.field[xHat][yHat - 1] = GRASS;
    }
  }
  // DONE: printField displays the updated status of the field position
  printField() {   // Display the updated status of field
    this.field.forEach((row) => {
      console.log(row.join(""));
    })
  }
  // DONE: updateMove displays the move (key) entered by the user
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

  // !! DONE: updateGame Assessment Challenge
  /**
   * 
   * @param {*} m   // accept the value of the player's move 
   */
  updateGame(m) {
    let newX = this.playerPosition.x;
    let newY = this.playerPosition.y;
    switch (m) {
      case UP:
        newX--;    //update current coordinate
        this.outcome(newX, newY); //display generate outcome
        break;
      case DOWN:
        newX++;
        this.outcome(newX, newY);
        break;
      case LEFT:
        newY--;
        this.outcome(newX, newY);
        break;
      case RIGHT:
        newY++;
        this.outcome(newX, newY);
        break;
      default:
        console.log('See you next time!')
        break;
      }
    this.field[this.playerPosition.x][this.playerPosition.y] = GRASS;//current position  to grass
    this.playerPosition = { x: newX, y: newY };
  }  
  //1. update the field to show the player's new position
  outcome(x, y) {
    switch (true) {
      case (x === - 1 || y === - 1 || x === ROWS || y === COLS):  //1. if player move out of bound, LOSE// process.exit() ; 
        console.log(OUT);
        process.exit();
        break;
      //3. if the player enters a hole, LOSE// process.exit() ;
      case (this.field[x][y] === HOLE):
        console.log(LOSE);
        process.exit();
        break;
      //4. if the player reach the hat, WIN
      case (this.field[x][y] === HAT):
        console.log(WIN);
        process.exit();
        break;
      default:  //otherwise,move the player to the new x and y position base on move
        this.field[x][y] = PLAYER; // move player to new location
        break;
      }
    }
  playerTrap() { //prevent player trap
    if (this.field[0][1] === HOLE && this.field[1][0] === HOLE)  // player trap prevention
      this.field[0][1] = GRASS;
  }

  //DONE: start() a method of the class to start the game
  start() {
    this.gamePlay = true;   // set gamePLay to true to startq
    this.field[0][0] = PLAYER;
    this.setHat();      //position of hat        // hatTrap moved inside setHat
    this.playerTrap();

    // while gamePlay === true, track the player moves and update
    do {

      this.printField();
      const input = prompt("(w)up, (s)down, (a)left, (d)right, (q)exit:");
      switch (input.toLowerCase()) {
        case UP:
          this.updateMove(UP);
          break;
        case DOWN:
          this.updateMove(DOWN);
          break;
        case LEFT:
          this.updateMove(LEFT);
          break;
        case RIGHT:
          this.updateMove(RIGHT);
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
      this.updateGame(input);
    } while (this.gamePlay);  //when gamePlay is true
  }
}

// DONE: Generate a new field - using Field's static method: generateField
const gameField = Field.generateField(ROWS, COLS, PERCENT);
// DONE: Generate aa welcome message
Field.welcomeMessage(MSG_WELCOME);
const game = new Field(gameField);


//DONE: Create a new instance of the game

//DONE: Invoke method start(...) from the instance of game object
game.start();

