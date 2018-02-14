const expect = require('chai').expect;

describe('checkForShip', function() {
  const checkForShip = require('../game-logic/ship-methods').checkForShip;

  it('should correctly report no ship at a given players coordinate', function() {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    };

    expect(checkForShip(player, [9,9])).to.be.false;
  });
});
