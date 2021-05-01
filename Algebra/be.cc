// binary exponentiation algorithm when exponent is non-negative,
// unsigned long int can handle ~ 2^64
unsigned long int be(int b, int e)
{

    unsigned long int result = 1;
    if (b == 0 && e == 0)
    {
        throw "Math Error!";
    }
    else if (b == 0)
    {
        return 0;
    }
    else if (e == 0)
    {
        return result;
    }
    else
    {

        // if even e then just right shift e by 1 and square b
        // else result = result * b and right shif e by 1
        while (e > 0)
        {

            if (e & 1)
            {
                result = result * b;
            }

            b = b * b;
            e = e >> 1;
        }
        return result;
    }
}