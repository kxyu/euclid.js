/*global describe:true, it:true, require:true, process:true*/
(function () {
    'use strict';
    var should = require('should'),
        Line = require('./../src' + (process.env.COVERAGE ? '-cov' : '') + '/Line.js').Line;

    describe('Line', function () {
        describe('constructor', function () {
            it('should exist', function () {
                Line.should.be.a('function');
            });
        });
    });
}());