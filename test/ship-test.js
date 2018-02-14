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

  it('should correctly report a ship at the given coordinates', function() {
    player = {
      ships: [
        {
          locations: [[0,0]]
        }
      ]
    };

    expect(checkForShip(player, [0,0])).to.be.true;
  });

  it('should handle ships at more than one coordinate', function() {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        }
      ]
    };

    expect(checkForShip(player, [0,0])).to.be.true;
    expect(checkForShip(player, [0,1])).to.be.true;
    expect(checkForShip(player, [9,9])).to.be.false;
  });

  it('should handle checking multipe ships', function() {
    player = {
      ships: [
        {
          locations: [[0,0], [0,1]]
        },
        {
          locations: [[1,0], [1,1]]
        },
        {
          locations: [[2,0], [2,1], [2,2], [2,3]]
        }
      ]
    };

    expect(checkForShip(player, [0,0])).to.be.true;
    expect(checkForShip(player, [0,1])).to.be.true;
    expect(checkForShip(player, [1,0])).to.be.true;
    expect(checkForShip(player, [1,1])).to.be.true;
    expect(checkForShip(player, [2,3])).to.be.true;    expect(checkForShip(player, [9,9])).to.be.false;
  });

});

describe('damageShip', function() {
  const damageShip = require('../game-logic/ship-methods').damageShip;

  it('should register damage on a given ship at a given location', function() {
    let ship = {
      location: [[0,0]],
      damage: []
    };

    damageShip(ship, [0,0]);

    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
});
