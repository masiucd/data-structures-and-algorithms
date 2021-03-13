# Strings

Strings is a separate topic. Strings are handled differently depending on the language you using.

```rust
  let foo = String::new("A");
  foo += "C";
```

This is not a `O(1)` operation since we are not just appending to the string even if string is a list of encoded characters, mostly using `ASCII`.
To make it happened we needed to create a whole new string,`(make a copy)`.
I mostly languages string are immutable and wee need to copy the string but there are languages where we can strings are mutable like `C++` for example. So if we would able to mute the string it will be a constant operation same like appending to a array at the end.

### Time Complexity

- `Traverse`: O(n)
- `copy`: O(n)
- `Get`: O(1)
