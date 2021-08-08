
## Modulo

- 15 mod 15 == 0
- 15 mod 14 == 1
- 15 mod 16 == 15

Negative Numbers

C99 *requires* that when `a/b` is representable:

`(a/b) * b` **+** `a%b` shall equal `a`

*This makes sense, logically.* Right?

Let's see what this leads to:

---

*Example A. `5/(-3)` is `-1`*

=> `(-1) * (-3)` **+** `5%(-3)` = `5`

This can only happen if `5%(-3)` is 2.

---

*Example B. `(-5)/3` is `-1`*

=> `(-1) * 3` **+** `(-5)%3` = `-5`

This can only happen if `(-5)%3` is `-2`
