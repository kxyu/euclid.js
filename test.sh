#!/bin/bash
mocha;
rm -rf src-cov;
jscoverage src src-cov;
export COVERAGE=1;
mocha --reporter html-cov > coverage.html