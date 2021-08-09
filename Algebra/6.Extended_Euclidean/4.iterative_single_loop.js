// LEFT

// https://brilliant.org/wiki/extended-euclidean-algorithm/#

// function extended_gcd(a, b)
//     s <- 0;    old_s <- 1
//     t <- 1;    old_t <- 0
//     r <- b;    old_r <- a
//     while r ≠ 0
//         quotient <- old_r div r
//         (old_r, r) <- (r, old_r - quotient * r)
//         (old_s, s) <- (s, old_s - quotient * s)
//         (old_t, t) <- (t, old_t - quotient * t)       
//     output "Bézout coefficients:", (old_s, old_t)
//     output "greatest common divisor:", old_r
//     output "quotients by the gcd:", (t, s)