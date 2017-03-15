var expect = require('chai').expect;

var Board = require('../lib/board');

describe('Game Board', function() {
	it('should be 7 counters across', function() {
		var board = new Board();
		expect(board.data.length).to.equal(7);
	});
	
	describe('place()', function() {
		it('should place a player 1 counter', function() {
			var board = new Board();
			board.place(3, 1);
			expect(board.data[3][0]).to.equal(1);
		});
		it('should place a player 2 counter', function() {
			var board = new Board();
			board.place(3, 2);
			expect(board.data[3][0]).to.equal(2);
		});
		it('should place counters on top of eachother', function() {
			var board = new Board();
			board.place(3, 1);
			board.place(3, 2);
			expect(board.data[3][0]).to.equal(1);
			expect(board.data[3][1]).to.equal(2);
		});
		it('should not let more than 6 counters be placed in one row', function() {
			var board = new Board();
			for (var i=0;i<7;i++) board.place(3, 1);
			expect(board.data[3].length).to.equal(6);
		});
		it('should return true if placed, and false if not', function() {
			var board = new Board();
			for (var i=0;i<5;i++) board.place(3, 1);
			
			var shouldBeTrue = board.place(3, 1);
			var shouldBeFalse = board.place(3, 1);
			
			expect(shouldBeTrue).to.be.true;
			expect(shouldBeFalse).to.be.false;
		});
	});
	
	describe('winner()', function() {
		it('should return 0 for an empty board', function() {
			var board = new Board();
			expect(board.winner()).to.equal(0);
		});
		it('should return 0 for a board with no winner', function() {
			var board = new Board();
			board.place(3, 1);
			board.place(3, 1);
			board.place(3, 1);
			expect(board.winner()).to.equal(0);
		});
		it('should return 1 for a board with a horizontal line', function() {
			var board = new Board();
			for (var i=0;i<4;i++) board.place(i+3, 1);
			expect(board.winner()).to.equal(1);
		});
		it('should return 1 for a board with a vertical line', function() {
			var board = new Board();
			for (var i=0;i<4;i++) board.place(3, 1);
			expect(board.winner()).to.equal(1);
		});
		
		describe('should return 1 for a board with a diagonal line', function() {
			it('lower diagonal going down and right', function() {
				var board = new Board();

				for (var i=0;i<3;i++) {
					for (var j=0;j<3-i;j++) board.place(i, 2);
					board.place(i, 1);
				}
				board.place(3, 1);

				expect(board.winner()).to.equal(1);
			});
			it('higher diagonal going down and right', function() {
				var board = new Board();

				for (var i=0;i<4;i++) {
					for (var j=0;j<5-i;j++) board.place(i+1, 2);
					board.place(i+1, 1);
				}

				expect(board.winner()).to.equal(1);
			});
			it('lower diagonal going down and left', function() {
				var board = new Board();

				for (var i=0;i<3;i++) {
					for (var j=0;j<i+1;j++) board.place(i+4, 2);
					board.place(i+4, 1);
				}
				board.place(3, 1);

				expect(board.winner()).to.equal(1);
			});
			it('higher diagonal going down and left', function() {
				var board = new Board();

				for (var i=0;i<4;i++) {
					for (var j=0;j<5-i;j++) board.place(5-i, 2);
					board.place(5-i, 1);
				}

				expect(board.winner()).to.equal(1);
			});
		});
	});
});