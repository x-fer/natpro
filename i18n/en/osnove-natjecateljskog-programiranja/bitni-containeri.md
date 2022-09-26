---
title: Bitni containeri
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## What are containers?

In this chapter, we will briefly explain how *containers* work and what they are. *Container* is an object in which we can store several other objects, and using membership functions in a certain way to manipulate this data, iterate through them, make certain queries and the like to solve a task. In C++, *containers* are implemented as *class template*, which means that we can store any type of object in them. As we will see below, different *containers* behave differently, so let's start with the simpler ones.

## Vector

Let's say you have a task in which you are asked to read numbers from the input until you load the number $$0$$, and then you need to print the number of even numbers loaded and all loaded even numbers in the order in which they were loaded. We could solve this problem using an array, however, the question arises, how to determine the size of that array? We could speculate that we will not load more than, for example, $$1000$$ even numbers, so set the array size to $$1000$$, and this solution would look something like this:

```cpp
int numEven = 0;
int evenNumbers[1000];

int x;

do {
    cin >> x;

    if(x % 2 == 0) {
        evenNumbers[numEven] = x;
        numEven++;
    }
} while(x != 0);

cout << numEven << endl;

for(int i = 0; i < numEven; i++){
    cout << evenNumbers[i] << " ";
}
```

However, it is obvious that our program will not work if we enter more than $$1000$$ even numbers. In addition, if we enter much less than $$1000$$ even numbers, we will leave a good part of the reserved memory unused. These are just some of the issues that _container_ vector can solve.

Vector is a dynamic field, ie a field of variable length, to which we can add elements to the end and remove elements from the end in $$O(1)$$ time (in most cases). Using the vector, the solution of the above problem would look like this:

```cpp
vector<int> evenNumbers;

int x;

do {
    cin >> x;
    
    if(x % 2 == 0) evenNumbers.push_back(x);
} while(x != 0);

cout << evenNumbers.size() << endl;

for(auto number : evenNumbers){
    cout << number << " ";
}
```

As we have seen, the vector can be declared by the line:

```cpp
vector<type> name;
```

where `type` indicates the type of data we want to save in vector (eg `int`, `char`, `vector<int>`, etc.), and `name` indicates the name of the variable. In the example above, we did this in the line `vector<int> evenNumbers`. In addition to this method, we can also set the initial number of elements and their initial value:

```cpp
// Vector znakova veličine 100
vector<char> vectorCharacters(100); 

// Vector doubleova veličine 314, svi elementi su postavljeni na 3.14159
vector<double> vectorPIs(314, 3.14159);
```

Adding to the end of the vector is done with the command `push_back`, and from the end we can remove the element with the command `pop_back`. We can access the elements with the `at` command or the access operator (square brackets, []). The first element can be retrieved with the `front` command, and the last element with the `back` command. The size of the field can be retrieved with the `size` command. We can delete all elements with the `clear` command. All of the above commands except `clear` are of constant complexity, and `clear` is of linear complexity, depending on the size of the vector.

Also, as we saw in the solution of the problem above, we can iterate through all the elements of the array using a for-each loop.

Documentation and more information about the vector can be found [here](https://www.cplusplus.com/reference/vector/vector/).

## Set

The next structure we will talk about is the set. A set is a data structure in which we can add elements in $O(log(n))$ time so that the order remains sorted. In addition, we can also check if an element is in the set at $O(log(n))$ time.

We define the set as follows:

```cpp
set<tip> name;
```

where `type` indicates the type of data we want to enter in the set, and `name` indicates the name of the variable.

```cpp
set<int> evenNumbers;

// Redom dodajemo brojeve 10, 8, 6, 4 i 2
for(int i = 10; i > 0; i -= 2) {
    evenNumbers.insert(i);
}

// Ispisujemo sadržaj seta
for(auto number : evenNumbers) {
    cout << number << " ";
}
```

The printout will look like this:

```
2 4 6 8 10
```

because by adding elements to the set, we place them so that the set remains sorted in ascending order. We add elements with the command `insert`, delete them with the command` erase`, and in addition we can check if an element is in the set with the command `count` - returns $1$ if the element is, or $0$ if it is not in the set. The `size` command returns the number of elements in the set. In the section on iterators and the article [Binary search](../sortiranje-i-pretrazivanje/binarno-pretrazivanje) we will talk about some more commands over sets.

Let's look at the following example:

```cpp
set<int> lotsOfNumbers;

// Dodajemo redom vrijednosti:
// 1, 1, 1, 2, 2, 2, 3, 3, 3
for(int i = 3; i < 12; i++) {
    lotsOfNumbers.insert(i / 3);
}

// Ispisujemo elemente seta
for(auto number : lotsOfNumbers) {
    cout << number << " ";
}
```

The printout will look like this:

```
1 2 3
```

Namely, the set does not accept duplicates, so the values $1$, $2$ and $3$ will be added only once. In case you need a structure with similar characteristics as a set, to which duplicates can be added, you can use a multiset structure.

```cpp
multiset<int> lotsOfNumbers;

// Dodajemo redom vrijednosti:
// 1, 1, 1, 2, 2, 2, 3, 3, 3
for(int i = 3; i < 12; i++) {
    lotsOfNumbers.insert(i / 3);
}

// Ispisujemo elemente seta
for(auto number : lotsOfNumbers) {
    cout << number << " ";
}
```

The printout will be different this time:

```
1 1 1 2 2 2 3 3 3
```


## Map

Another in a series of structures we will talk about is the map. Key-value pairs are stored in the folder, and we can access them in $O(log(n))$ time, where $n$ indicates the number of keys in the folder.

Let's say we have a task in which we are asked to load $ n $ numbers, and print how many times which number is loaded. If we knew that these numbers would be less than $1000$, for example, we could create a field of integers and store in it how many times which number appeared.

```cpp
int n;
cin >> n;

// Postavljamo sve elemente polja na 0
int numberOfOccurences[1000] = {0};

for(int i = 0; i < n; i++) {
    int broj;
    cin >> broj;

    numberOfOccurences[broj]++;
}

for(int i = 0; i < 1000; i++) {
    if(numberOfOccurences[i] > 0) {
        cout << "Number " << i << " appeared " << numberOfOccurences[i] << " times.\n";
    }
}
```

However, if the loaded numbers were much larger than $1000$, e.g. sizes up to $10^{9}$, we would not be able to create a field of that size. We can easily solve this problem using a map.

```cpp
int n;
cin >> n;

map<int, int> numberOfOccurences;

for(int i = 0; i < n; i++) {
    int number;
    cin >> number;

    numberOfOccurences[number]++;
}

for(auto par : numberOfOccurences) {
    cout << "Number " << par.first << " appeared " << par.second << " times.\n";
}
```

For the input:

```
4
1 300 500 500
```

The output will look like this in both cases:

```
Broj 1 se pojavio 1 puta.
Broj 300 se pojavio 1 puta.
Broj 500 se pojavio 2 puta.
```

The map solution is much more elegant, and in the worst case (when all the numbers are different) it takes up $O(n)$ of memory. You may have noticed that we did not initiate values within the folder anywhere, we just increased them. Namely, the access operator [], in case the folder does not contain the key with which it is called, creates that key and sets its value to a default value, in this case $0$. If we wanted to start from another value, we would have to explicitly check if the key is in the folder with the `count` command, and set that value if the key does not exist. Another thing you may have noticed is that the for-each loop through the pairs iterates upwards depending on the key.

## Iterators

When working with *containers* such as `vector` and `set`, you will often encounter functions that accept *iterators* as parameters. In this article, we will talk about iterators and give some examples of iterators that you should know about.

Iterators serve as pointers to elements of certain *containers*. With them, we can, as their name suggests, iterate through elements of certain structures and use them as parameters in a number of standard library algorithms. We access the data pointed out by iterators using the `*` operator.

Take for example one set and one vector.

```cpp
set<int> s = {1, 2, 3, 4, 5, 6}; // another way to add elements to the set
vector<int> v = {1, 1, 2, 3, 5, 8}; // another way to add elements to the set
```

The first function we will deal with is the membership function `begin`. It returns the iterator to the first element of the array, so for our *container* from the example it would look like this (remember to access the data using the `*` operator):

```cpp
cout << *s.begin() << "\n"; // prints out 1
cout << *v.begin() << "\n"; // prints out 1
```

The second function is the end function. It returns the iterator to position **after** the last element of the array. We can use it in the for loop to check if we have reached the end of the iteration, and it is also used in a multitude of functions that we will talk more about later.

```cpp
// it++ changes the iterator to point to the next element of the array
for(auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
}
```

This code snippet will print all members of the set.

Similar to the functions `begin` and `end` are the functions `rbegin` and `rend` which return *reverse iterators*, ie the iterator pointing to the last element of the array and the iterator pointing to the position ** before ** the first element of the array.

```cpp
for(auto it = s.rbegin(); it != s.rend(); it++) {
    cout << *it << " ";
}
```

This snippet will print all members of the set, but in reverse order.

The `next` and `prev` functions accept the iterator and the integer `n` as arguments, and return the iterator for the `n` positions in front of or behind the default iterator. If `n` is not the default, the default value is 1. These functions do not change the position of the default iterator.

```cpp
cout << *next(s.begin(), 2) << "\n"; // prints out 3
cout << *prev(s.end(), 2) << "\n"; // prints out 5
```

The `advance` function takes the iterator and the integer `n` as arguments, and **changes** the default iterator by moving its position by `n` places.

```cpp
auto it = s.begin();
cout << *it << "\n"; // prints out 1

advance(it, 3);
cout << *it << "\n"; // prints out 4

advance(it, -1);
cout << *it << "\n"; // prints out 3
```

In the section on sorting and searching, we will talk more about the practical applications of iterators.

## Pair

If we want to store two data in one object (eg name and year of a person), we use the pair structure. We define it in one of the following ways:

```cpp
pair<string, int> ivan = {"Ivan", 21};
pair<string, int> luka = make_pair("Luka", 24);
```

We access data using the members `first` i `second`:

```cpp
cout << ivan.first << " " << ivan.second << "\n";
cout << luka.first << " " << luka.second << "\n";
```

Printout:

```
Ivan 21
Luka 24
```

You can find more about the pair data structure [here](https://www.cplusplus.com/reference/utility/pair/pair/).

## Tuple

If we want to save more data (eg name, year and grade point average), we can use a tuple:

```
tuple<string, int, double> ivana = {"Ivana", 22, 4.8};
tuple<string, int, double> lucija = make_tuple("Lucija", 23, 3.95); 
```

We access members using the `get<>` function:

```    
cout << get<0>(ivana) << " " << get<1>(ivana) << " " << get<2>(ivana) << "\n";
cout << get<0>(lucija) << " " << get<1>(lucija) << " " << get<2>(lucija) << "\n";
```

Printout:

```
Ivana 22 4.8
Lucija 23 3.95
```

You can find more about the tuple structure [here](https://www.cplusplus.com/reference/tuple/tuple/).

## Other containers

In addition to the above, on the following links you can find the documentation of other *containers* that you may need while solving tasks:

- [queue](https://www.cplusplus.com/reference/queue/queue/)
- [deque](https://www.cplusplus.com/reference/deque/deque/)
- [priority_queue](https://www.cplusplus.com/reference/queue/priority_queue/)
- [stack](https://www.cplusplus.com/reference/stack/stack/)
- [forward_list](https://www.cplusplus.com/reference/forward_list/forward_list/)
- [list](https://www.cplusplus.com/reference/list/list/)
- [unordered_set](https://www.cplusplus.com/reference/unordered_set/unordered_set/)
- [unordered_multiset](https://www.cplusplus.com/reference/unordered_set/unordered_multiset/)
- [unordered_map](https://www.cplusplus.com/reference/unordered_map/unordered_map/)
- [multimap](https://www.cplusplus.com/reference/map/multimap/)
- [unordered_multimap](https://www.cplusplus.com/reference/unordered_map/unordered_multimap/)