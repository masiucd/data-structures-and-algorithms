# Logarithm

Logarithm is a metathetical concepts the is commonly used in `computer science` to describes the behavior,time and space complexity of a algorithm.

we cane simply define the logarithm like this:

```
log (x)=y if b^^y = x
   b
```

In computer science we use the base 2 so you will not have to think when to calculate the logarithm what base it should have. It will always have base 2 as the base.

In plain English, if an algorithm has a logarithmic time complexity `O(log(n))` , where n is the size of the
input, then whenever the algorithm's input doubles in size (i.e., whenever _n_ doubles), the number of operations needed to
complete the algorithm only increases by one unit. Conversely, an algorithm with a linear time complexity would
see its number of operations double if its input size doubled.

As an example, a `linear-time-complexity` algorithm with an input of size 1,000 might take roughly 1,000 operations to
complete, whereas a `logarithmic-time-complexity` algorithm with the same input would take roughly 10 operations to complete, since

**Note** almost 1000

```
2^10 = 1,000
```
