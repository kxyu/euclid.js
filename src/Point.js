/*globals window:true,exports:true*/
(function (ns) {
    'use strict';

    /**
     * @class
     * 2D point.
     * @constructor
     * @param {Number} x
     * @param {Number} y
     */
    var Point = ns.Point = function (x, y) {
        this.x = x;
        this.y = y;
    };

    /**
     * Creates point object based on array of coordinates.
     * coordinates[0] is supposed to be point's x and
     * coordinates[1] is supposed to be point's y.
     * @param array
     * @return {Point}
     */
    Point.fromArray = function (coordinates) {
        return new Point(coordinates[0], coordinates[1]);
    };

    /**
     * Creates point object based on any object or
     * point object.
     * @param object
     * @param object.x
     * @param object.y
     * @return {Point}
     */
    Point.fromObject = function (object) {
        return new Point(object.x, object.y);
    };

    /**
     * Creates point.
     * @param x
     * @param y
     * @return {Point}
     */
    Point.create = function (x, y) {
        return new Point().set(x, y);
    };

    Point.prototype.toArray = function () {
        return [this.x, this.y];
    };

    Point.prototype.setX = function (x) {
        this.x = x;
        return this;
    };

    Point.prototype.setY = function (y) {
        this.y = y;
        return this;
    };

    Point.prototype.set = function (x, y) {
        if (typeof y !== 'undefined') {
            this.x = x;
            this.y = y;
        } else if (Object.prototype.toString.call(x) === '[object Array]') {
            this.x = x[0];
            this.y = x[1];
        } else {
            this.x = x.x;
            this.y = x.y;
        }
        return this;
    };

    /**
     * @method
     * Compares the current point with the given point.
     * Points are considered equal, when their respective coordinates are equal
     * @param {Point | Object | Array} point
     * @return {Boolean}
     */
    Point.prototype.isEqualTo = function (point) {
        point = Point.create(point);
        return this.x === point.x &&
            this.y === point.y;
    };

    /**
     * Returns true if point is [0,0]
     * @return {Boolean}
     */
    Point.prototype.isOrigin = function () {
        return this.isEqualTo([0, 0]);
    };

    /**
     * Returns true if point is [0,0]
     * @return {Boolean}
     */
    Point.prototype.isNull = Point.prototype.isOrigin;

    Point.prototype.isInFirstQuadrant = function () {
        return this.x > 0 && this.y > 0;
    };

    Point.prototype.isInSecondQuadrant = function () {
        return this.x < 0 && this.y > 0;
    };

    Point.prototype.isInThirdQuadrant = function () {
        return this.x < 0 && this.y < 0;
    };

    Point.prototype.isInFourthQuadrant = function () {
        return this.x > 0 && this.y < 0;
    };

    Point.prototype.getQuadrant = function () {
        var x = this.x > 0,
            y = this.y > 0;

        return 3 + x - y - 2 * x * y;
    };

    /**
     * Adds given points coordinates to the current points' respectively
     * @param {Point | Array | Object} point
     * @return {Point} self
     */
    Point.prototype.add = function (point) {
        point = Point.create(point);
        this.x += point.x;
        this.y += point.y;
        return this;
    };

    /**
     * Creates a point with coordinates equal to this points' added given points' respectively
     * @param {Point | Array | Object} point
     * @return {Point}
     */
    Point.prototype.added = function (point) {
        return Point.create(point).add(this);
    };

    /**
     *
     * @param {Point | Array | Object} point
     * @return {Point} self
     */
    Point.prototype.subtract = function (point) {
        point = Point.create(point);
        this.x -= point.x;
        this.y -= point.y;
        return this;
    };

    /**
     * @param {Number} factor
     * @return {Point}
     */
    Point.prototype.multiply = function (factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    };


    /**
     * @param {Number} factor
     * @return {Point}
     */
    Point.prototype.multiplied = function (factor) {
        return Point.create(this.x * factor, this.y * factor);
    };
}(exports || (window.euclid = window.euclid || {})));