# Countiny

Tiny script for counting examples of several math situations. All functions expect valid input.

It's possible to include it directy:

``` html
<script src="http://pesout.github.io/countiny.js/countiny.js"></script>
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
countiny_dgrd(deg);
```

#### Degrees to radians expressed in multiples of pi

```javascript
countiny_dgrd_pi(deg, pi_sign);
```

- `deg` - input
- `pi_sign`: logic variable (`true` or `false`)
 - If pi_sign is true, output will look like `2π`
 - If not, output will look like `2`

#### Radians to degrees

```javascript
countiny_rddg(rad);
```


### Percentage

- `a` - A whole number
- `b` - A value of percentages
- `c` - A part of a whole number

#### A part of a whole number and a value of percentages (of this part)

```javascript
countiny_perc_part(a, b);
```

#### A whole number from a part and a value of percentages

```javascript
countiny_perc_whol(b, c);
```

#### Percentages, which means a part of the whole number

```javascript
countiny_perc_pers(b, c);
```


### Is a number in a range?

```javascript
countiny_rang(a, min, max);
```

- `a` - the number
- `min` - minimal value in the range
- `max` - maximal value in the range
- This function returns `true` or `false`



### Rounding

#### Rounding to N decimal places

```javascript
countiny_nrnd(num, dec);
```

- `num` - an input number
- `dec` - how many decimal places
