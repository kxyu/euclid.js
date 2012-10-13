/*global describe:true, it:true, require:true, process:true*/
(function () {
    'use strict';
    var should = require('should'),
        Point = require('./../src' + (process.env.COVERAGE ? '-cov' : '') + '/Point.js').Point;

    describe('Point', function () {
        describe('constructor', function () {
            it('should exist', function () {
                Point.should.be.a('function');
            });

            it('should create a point with given coordinates', function () {
                var point = new Point(10, 20);

                point.x.should.be.eql(10);
                point.y.should.be.eql(20);
            });
        });

        describe('#fromArray', function () {
            it('should create a point with coordinates from given array', function () {
                var point = Point.fromArray([-12.5, 0]);

                point.x.should.be.eql(-12.5);
                point.y.should.be.eql(0);
            });
        });

        describe('#fromObject', function () {
            it('should create a point with coordinate from given object', function () {
                var object = {x: 12, y: 234},
                    point = Point.fromObject(object);

                point.x.should.be.eql(object.x);
                point.y.should.be.eql(object.y);
            });
        });

        describe('#create', function () {
            it('should create a point with given coordinates', function () {
                var point = Point.create(102, 230);

                point.x.should.be.eql(102);
                point.y.should.be.eql(230);
            });

            it('should create a point with coordinates from given array', function () {
                var point = Point.create([-1334, 123421]);

                point.x.should.be.eql(-1334);
                point.y.should.be.eql(123421);
            });

            it('should create a point with coordinate from given object', function () {
                var object = {x: 234, y: 135},
                    point = Point.create(object);

                point.x.should.be.eql(object.x);
                point.y.should.be.eql(object.y);
            });
        });

        describe('#set', function () {
            it('should set x and y', function () {
                var point = Point.create(10, 20);

                point.set(40, 50);
                point.x.should.be.eql(40);
                point.y.should.be.eql(50);
            });

            it('should set x and y from array', function () {
                var point = Point.create(10, 20);

                point.set([40, 50]);
                point.x.should.be.eql(40);
                point.y.should.be.eql(50);
            });

            it('should set x and y from object', function () {
                var point = Point.create({x: 10, y: 20});

                point.set([40, 50]);
                point.x.should.be.eql(40);
                point.y.should.be.eql(50);
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.set(40, 50).should.be.equal(point);
            });
        });

        describe('#setX', function () {
            it('should set x', function () {
                var point = Point.create(10, 20);

                point.setX(20);
                point.x.should.be.eql(20);
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.setX(20).should.be.equal(point);
            });
        });

        describe('#setY', function () {
            it('should set y', function () {
                var point = Point.create(10, 20);

                point.setY(1000);
                point.y.should.be.eql(1000);
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.setY(1000).should.be.equal(point);
            });
        });

        describe('#toArray', function () {
            it('should return array with coordinates of the point', function () {
                var point = Point.create(3, 44);

                point.toArray().should.be.eql([3, 44]);
            });
        });

        describe('#isEqualTo', function () {
            it('should return true if points have same coordinates', function () {
                var point1 = Point.create(143, 12),
                    point2 = Point.create(143, 12);

                point1.isEqualTo(point2).should.be.true;
            });

            it('should return false if points are different', function () {
                var point1 = Point.create(14, 12),
                    point2 = Point.create(143, 12);

                point1.isEqualTo(point2).should.be.false;
            });
        });

        describe('#isOrigin', function () {
            it('should return true if point is [0,0]', function () {
                Point.create(0, 0).isOrigin().should.be.true;
            });

            it('should return false if point is not a [0,0]', function () {
                Point.create(2321, 123).isOrigin().should.be.false;
            });
        });

        describe('#isNull', function () {
            it('should return true if point is [0,0]', function () {
                Point.create(0, 0).isNull().should.be.true;
            });

            it('should return false if point is not a [0,0]', function () {
                Point.create(2321, 123).isNull().should.be.false;
            });
        });

        describe('#isInFirstQuadrant', function () {
            it('should return true if points x and y are both positive', function () {
                Point.create(10, 20).isInFirstQuadrant().should.be.true;
            });
        });

        describe('#isInSecondQuadrant', function () {
            it('should return true if points x is negative and y is positive', function () {
                Point.create(-10, 20).isInSecondQuadrant().should.be.true;
            });
        });

        describe('#isInThirdQuadrant', function () {
            it('should return true if points x and y are both negative', function () {
                Point.create(-10, -20).isInThirdQuadrant().should.be.true;
            });
        });

        describe('#isInFourthQuadrant', function () {
            it('should return true if points x is positive and y is negative', function () {
                Point.create(10, -20).isInFourthQuadrant().should.be.true;
            });
        });

        describe('#getQuadrant', function () {
            it('should return points quadrant', function () {
                Point.create(10, 10).getQuadrant().should.be.eql(1);
                Point.create(-10, 10).getQuadrant().should.be.eql(2);
                Point.create(-10, -10).getQuadrant().should.be.eql(3);
                Point.create(10, -10).getQuadrant().should.be.eql(4);
            });
        });

        describe('#add', function () {
            it('should add given points coordinates respectively', function () {
                Point.create(10, 20).add([6, 7]).isEqualTo([16, 27]).should.be.true;
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.add([6, 7]).should.be.equal(point);
            });
        });

        describe('#added', function () {
            it('should return point with coordinates equal to sum of this point and given point', function () {
                Point.create(10, 20).added([6, 7]).isEqualTo([16, 27]).should.be.true;
            });

            it('should not modify the point', function () {
                var point = Point.create(10, 20);

                point.added([10, 20]);
                point.isEqualTo([10, 20]).should.be.true;
            });
        });

        describe('#subtract', function () {
            it('should subtract given points coordinates respectively', function () {
                Point.create(10, 20).subtract([6, 7]).isEqualTo([4, 13]).should.be.true;
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.subtract([6, 7]).should.be.equal(point);
            });
        });

        describe('#multiply', function () {
            it('should multiply points coordinates by given factor', function () {
                Point.create(10, 20).multiply(3).isEqualTo([30, 60]).should.be.true;
            });

            it('should return this', function () {
                var point = Point.create(10, 20);

                point.multiply(3).should.be.equal(point);
            });
        });

        describe('#multiplied', function () {
            it('should return point with coordinates equal to current points multiplied by given factor', function () {
                Point.create(10, 20).multiplied(3).isEqualTo([30, 60]).should.be.true;
            });

            it('should not modify the point', function () {
                var point = Point.create(10, 20);

                point.multiplied(3);
                point.isEqualTo([10, 20]).should.be.true;
            });
        });
    });
}());