<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterIntersection

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which returns the intersection of two or more [iterators][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterIntersection from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-intersection@esm/index.mjs';
```

#### iterIntersection( iter0, ...iterator )

Returns an [iterator][mdn-iterator-protocol] which returns the intersection of two or more [iterators][mdn-iterator-protocol].

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

var it1 = array2iterator( [ 2, 1, 1, 2, 4 ] );
var it2 = array2iterator( [ 3, 4, 3 ] );

var it = iterIntersection( it1, it2 );
// returns <Object>

var v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Value "uniqueness" is determined according to **strict equality**.
-   A returned [iterator][mdn-iterator-protocol] internally buffers unique values and, thus, has `O(N)` memory requirements, where `N` is the length of the first [iterator][mdn-iterator-protocol].
-   Do **not** provide [iterators][mdn-iterator-protocol] having **infinite** length.
-   If an environment supports `Symbol.iterator` **and** all provided [iterators][mdn-iterator-protocol] are iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-discrete-uniform@esm/index.mjs';
import iterIntersection from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-intersection@esm/index.mjs';

// Create seeded iterators which can generate 1000 pseudorandom numbers:
var rand1 = discreteUniform( 1, 10, {
    'seed': 1234,
    'iter': 1000
});
var rand2 = discreteUniform( 6, 15, {
    'seed': 1234,
    'iter': 1000
});

// Create an iterator which returns the intersection of the seeded iterators:
var it = iterIntersection( rand1, rand2 );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/intersection-by-hash`][@stdlib/iter/intersection-by-hash]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the intersection of two or more iterators according to a hash function.</span>
-   <span class="package-name">[`@stdlib/iter/union`][@stdlib/iter/union]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the union of two or more iterators.</span>
-   <span class="package-name">[`@stdlib/iter/unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-intersection.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-intersection

[test-image]: https://github.com/stdlib-js/iter-intersection/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-intersection/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-intersection/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-intersection?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-intersection.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-intersection/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-intersection/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-intersection/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-intersection/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-intersection/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-intersection/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/intersection-by-hash]: https://github.com/stdlib-js/iter-intersection-by-hash/tree/esm

[@stdlib/iter/union]: https://github.com/stdlib-js/iter-union/tree/esm

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter-unique/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
