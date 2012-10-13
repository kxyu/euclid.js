/*globals window:true,exports:true,require:true*/
(function (ns) {
    'use strict';

    var Line,
        Point = ns.Point || require('../src/Point.js');

    /**
     * @class Line
     * @constructor
     * @param {Number} a normal x coordinate
     * @param {Number} b normal y coordinate
     * @param {Number} c coefficient
     */
    Line = ns.Line = function (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    };

    Line.byPoints = function (point1, point2) {
        if (Object.prototype.toString.call(point1) === '[object Array]') {
            point2 = point1[1];
            point1 = point1[0];
        }

        point1 = Point.create(point1);
        point2 = Point.create(point2);

        if (point1.isEqualTo(point2)) {
            return undefined;
        }

        return new Line(point1.y - point2.y, point2.x - point1.x, point1.x * point2.y - point2.x * point1.y);
    };

}(exports || (window.euclid = window.euclid || {})));