/*
 * An object representing a 3d vector to make operations simple and concise.
 */

var Vector3 = function(x, y, z) {
	this.x = x; this.y = y; this.z = z;

	// todo - make sure to set a default value in case x, y, or z is not passed in

	this.set = function(x, y, z) {
		//todo set this' values to those from x, y, and z
		return this;
	}

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.copy = function(other) {
		// copy the values from other into this
		return this;
	}

	this.add = function(v) {
		// todo - add v to this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.subtract = function(v) {
		// todo - subtract v from this vector (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.negate = function() {
		// multiply this vector by -1 (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.multiplyScalar = function(scalar) {
		// multiply this vector by "scalar" (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.length = function() {
		// todo - return the magnitude (a.k.a length) of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return 0;
	};

	this.lengthSqr = function() {
		// todo - return the squared magnitude of this vector ||v||^2 (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return 0;
	};

	this.normalized = function() {
		// todo - return a new vector that is a normalized version of this vector (1pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return null; // Should return a new vector that is not this
	};

	this.normalize = function() {
		// todo - Change the components of this vector so that its magnitude will equal 1. (1pt)
		// This SHOULD change the values of this.x, this.y, and this.z
		return this;
	};

	this.dot = function(other) {
		// todo - return the dot product betweent this vector and "other" (5pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return 0;
	};

	this.cross = function(other) {
		// todo - return the cross product (as a new vector) betweent this vector and "other" (3pt)
		// This should NOT change the values of this.x, this.y, and this.z
		return null;
	}
};
