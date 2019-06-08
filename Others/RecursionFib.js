function Fib(n) 
{
  if (n == 0 || n == 1) { return 1;}
  return Fib(n - 1) + Fib (n - 2)
}