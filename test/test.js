/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var discreteUniform = require( '@stdlib/random-iter-discrete-uniform' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var iterEmpty = require( '@stdlib/iter-empty' );
var iterIntersection = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterIntersection, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided insufficient input arguments', function test( t ) {
	t.throws( iterIntersection, Error, 'throws an error' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		iterIntersection( iterEmpty() );
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (first argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterIntersection( value, iterEmpty() );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (second argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterIntersection( iterEmpty(), value );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (third argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterIntersection( iterEmpty(), iterEmpty(), value );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (fourth argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterIntersection( iterEmpty(), iterEmpty(), iterEmpty(), value );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (fifth argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterIntersection( iterEmpty(), iterEmpty(), iterEmpty(), iterEmpty(), value ); // eslint-disable-line max-len
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (finite iterators)', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it1;
	var it2;
	var it;
	var i;

	values1 = [ 2, 2, 1, 1, 3, 3, 4, 4 ];
	values2 = [ 2, 2, 1, 1, 3, 3, 4, 4 ];
	expected = [
		{
			'value': 2,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it1 = array2iterator( values1 );
	it2 = array2iterator( values2 );

	it = iterIntersection( it1, it2 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (empty iterators)', function test( t ) {
	var expected;
	var actual;
	var it;

	expected = [
		{
			'done': true
		}
	];

	it = iterIntersection( iterEmpty(), iterEmpty(), iterEmpty(), iterEmpty() );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator which returns the intersection of two iterators', function test( t ) {
	var expected;
	var values1;
	var values2;
	var actual;
	var it1;
	var it2;
	var it;
	var i;

	values1 = [ 2, 1, 2, 1, 1, 4 ];
	values2 = [ 4, 4, 3, 2, 1 ];
	expected = [
		{
			'value': 2,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it1 = array2iterator( values1 );
	it2 = array2iterator( values2 );

	it = iterIntersection( it1, it2 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator which returns the intersection of three iterators', function test( t ) {
	var expected;
	var values1;
	var values2;
	var values3;
	var actual;
	var it1;
	var it2;
	var it3;
	var it;
	var i;

	values1 = [ 2, 1, 2, 1, 1, 4 ];
	values2 = [ 4, 4, 1, 3, 2 ];
	values3 = [ 5, 2, 1 ];
	expected = [
		{
			'value': 2,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];

	it1 = array2iterator( values1 );
	it2 = array2iterator( values2 );
	it3 = array2iterator( values3 );

	it = iterIntersection( it1, it2, it3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var rand1;
	var rand2;
	var opts;
	var it;
	var r;

	opts = {
		'iter': 1000
	};
	rand1 = discreteUniform( 0, 10, opts );
	rand2 = discreteUniform( 0, 10, opts );
	it = iterIntersection( rand1, rand2 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var rand1;
	var rand2;
	var opts;
	var it;
	var r;

	opts = {
		'iter': 1000
	};
	rand1 = discreteUniform( 0, 10, opts );
	rand2 = discreteUniform( 0, 10, opts );
	it = iterIntersection( rand1, rand2 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterIntersection;
	var rand1;
	var rand2;
	var opts;
	var it1;
	var it2;
	var i;

	iterIntersection = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345,
		'iter': 1000
	};

	rand1 = discreteUniform( 0, 1000, opts );
	rand1[ '__ITERATOR_SYMBOL__' ] = factory;

	rand2 = discreteUniform( 0, 1000, opts );
	rand2[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterIntersection( rand1, rand2 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 10; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return discreteUniform( 0, 1000, opts );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterIntersection;
	var rand1;
	var rand2;
	var opts;
	var it;

	iterIntersection = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	opts = {
		'iter': 1000
	};
	rand1 = discreteUniform( 0, 10, opts );
	rand2 = discreteUniform( 0, 10, opts );

	it = iterIntersection( rand1, rand2 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterIntersection;
	var rand1;
	var rand2;
	var opts;
	var it;

	iterIntersection = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'iter': 1000
	};
	rand1 = discreteUniform( 0, 10, opts );
	rand1[ '__ITERATOR_SYMBOL__' ] = null;

	rand2 = discreteUniform( 0, 10, opts );
	rand2[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterIntersection( rand1, rand2 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
