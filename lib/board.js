module.exports = function() {
	
	this.data = [];
	for (var i=0;i<7;i++) this.data.push([]);
	
	this.place = function(column, player) {
		this.currentColumn = column;
		
		var placable = this.data[column].length<6;
		if (placable) this.data[column].push(player);
		return placable;
	}
	
	this.winner = function() {
		if (!this.currentColumn) return 0;
		
		var column = this.data[this.currentColumn];
		var row = column.length-1;
		var player = column[row];
		
		// horizontal
		var count = 0;
		for (var i=0;i<7;i++) {
			if (this.data[i][row]==player) {
				count++;
				if (count>=4) {
					return player;
				}
			} else {
				count = 0;
			}
		}
		
		// vertical
		count = 0;
		for (var i=0;i<6;i++) {
			if (column[i]==player) {
				count++;
				if (count>=4) return player;
			} else {
				count = 0;
			}
		}
		
		// diagonal
		count = 0;
		for (var i=3;i<6;i++) {
			for (var j=0;j<i+1;j++) {
				if (this.data[i-j][j]==player) {
					count++;
					if (count>=4) return player;
				} else {
					count = 0;
				}
			}
		}
		
		count = 0;
		for (var i=0;i<3;i++) {
			for (var j=0;j<6-i;j++) {
				if (this.data[6-j][i+j]==player) {
					count++;
					if (count>=4) return player;
				} else {
					count = 0;
				}
			}
		}
		
		count = 0;
		for (var i=1;i<4;i++) {
			for (var j=0;j<7-i;j++) {
				if (this.data[i+j][j]==player) {
					count++;
					if (count>=4) return player;
				} else {
					count = 0;
				}
			}
		}
		
		count = 0;
		for (var i=0;i<3;i++) {
			for (var j=0;j<6-i;j++) {
				if (this.data[j][i+j]==player) {
					count++;
					if (count>=4) return player;
				} else {
					count = 0;
				}
			}
		}
		
		return 0;
	}
	
}