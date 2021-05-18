// use std::collections::HashMap;

fn fibonacci(n: usize, cache: &mut Vec<u128>) -> u128 {
  if n < 2 {
    1
  } else if let Some(&result) = cache.get(n) {
    result
  } else {
    let result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache.resize(n + 1, result);
    result
  }
}

fn fib(n: i32) -> i32 {
  if n <= 2 {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

fn main() {
  let result = fib(8);
  println!("{}", result);
}
