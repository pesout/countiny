# Countiny
Tiny script for counting examples of several math situation types. It's still being built.

Use this code to start:

``` html
<script src="http://rawgit.com/pesout/countiny/master/countiny.js"></script>
```

## Features

### Quadratic formula

```javascript
countiny_quad(a,b,c,x);
```

- `A`, `B` and `C` - Coefficients
- `X` - A root number (1 or 2)

### Factorial

```javascript
countiny_fctr(a);
```

- A - input number: `a!`

### Cobmination number

```javascript
countiny_comb(n,k);
```

- Numerator: `n!`
- Denominator: `k! * (n-k)!`

### Variation

```javascript
countiny_vari(n,k);
```

- Numerator: `n!`
- Denominator: `(n-k)!`

### Arbitary-based logarithm

```javascript
countiny_alog(a,x);
```

- Base: `a`
- Argument: `x`
- log<sup>a</sup>(x)
