fn factorial(n: i64) -> i64 {
    if n <= 2 {
        return n;
    }
    n * factorial(n - 1)
}

fn main() {
    let res = factorial(5);
    println!("{}", res);
}
