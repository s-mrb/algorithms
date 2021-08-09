// Based on the unique solution of Diaphantine using EEA

/*
EXPLANATION

Use EEA to find unique solution i.e x,y.
Idea : a*(x+k(b/g)) + b*(y-k(a/g)) = c for k = 0,1,2,..

x_array = []
y_array = []
k = 0
Loop:
    x = x+k(b/g)
    y = y-k(a/g)
    if ax + by = c:
        x_array.upshift(x)
        y_array.upshift(y)




*/