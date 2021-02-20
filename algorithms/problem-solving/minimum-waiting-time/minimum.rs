fn minimum_waiting_sum(xs: &Vec<i32>) -> i32 {
  let mut res = 0;
  let mut list = xs.clone();
  list.sort();

  for (i, v) in list.iter().enumerate() {
      let query_time = (list.len() - (i + 1)) as i32;
      res += v * query_time;
  }
  res
}

