# Linked lists

`Linked lists` are similar to arrays, the look almost the same from a mentel model perspective.
One big difference is that `linked lists` are not allocated in the memory `back-to-back` like arrays does. This is a really cool feature with linked lists is that we can spread the memory slots in different places. What makes them bound to eachother` (the nodes)` is via pointers.
This is a really cool feature with `linked-lists`, that's ways inerting new data in to our list is takes a `O(1)` constant time complexity.

`Linked lists` are build via Nodes which is kind of a box that contains the data it is hold on to and a pointer to the next node `(if it is a singly-linked-list)`.

retriving a given `node` is therefore a slower operation comparing to `arrays`.
`O(n)` linear time complexity, because we have to traverse the list until we find the node we are searching for.

<img src="./linked-list.svg" />

## Singly Linked List
