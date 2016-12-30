# Countiny
Tiny script for counting examples of several math situation types. It's still being built. Using of this library can make JavaScript counting easier.

Use this code to start:

``` html
<script src="http://rawgit.com/pesout/countiny/master/countiny.js"></script>
```

## Features

### Quadratic formula

```javascript
countiny_quad(a, b, c, x);
```

- `A`, `B` and `C` - Coefficients
- `X` - A root number (1 or 2)

### Combinatorics

#### Factorial

```javascript
countiny_fctr(a);
```

#### Cobmination number

```javascript
countiny_comb(n, k);
```

- Numerator: `n!`
- Denominator: `k! * (n-k)!`

#### Variation

```javascript
countiny_vari(n, k);
```

- Numerator: `n!`
- Denominator: `(n-k)!`

### Logarithmic

#### Arbitary-based logarithm

```javascript
countiny_alog(a, x);
```

- Base: `a`
- Argument: `x`
- Numerator: `log(x)`
- Denominator: `log(a)`

### Roots

#### N-th root

```javascript
countiny_root(x, n);
```
- ![n-th root formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/5d9845f4838d72b3362cf0dfdd2e78784efd37ac)

### Angles

#### Degrees to radians

```javascript
countiny_dgrd(x);
```

#### Degrees to radians expressed in multiples of pi

```javascript
countiny_dgrd_pi(x, pi_sign);
```

- `x` - input
- `pi_sign`: logic variable (`true` or `false`)
 - If pi_sign is true, output will look like `2π`
 - If not, output will look like `2`

#### Radians to degrees

```javascript
countiny_rddg(x);
```
