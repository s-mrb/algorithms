def fibIter(n):
    if n < 2:
        return n
    fibPrev = 1
    fib = 1
    for num in range(2, n):
        fibPrev, fib = fib, fib + fibPrev
    return fib

import datetime
begin_time = datetime.datetime.now()

#Your statements here

fibIter(27)
# hour:minute:second:microsecond
print(datetime.datetime.now() - begin_time)
