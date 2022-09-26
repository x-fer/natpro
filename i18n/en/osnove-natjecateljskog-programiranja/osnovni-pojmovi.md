---
title: Osnovni pojmovi
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## A typical program

### Template

Different platforms for competition programming have different types of tasks, different restrictions, in some competitions you may use parts of the program code written before the competition (eg [Codeforces](https://codeforces.com)), and in some you may not (eg [Croatian national computer science competition](https://informatika.azoo.hr)), so for this reason the preparation for different competitions differs.

However, more or less every solution starts by writing the following lines of code:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    // The task solution
}
```

In the first line, we include a library that contains a large number of data structures and functions that we will certainly need while solving tasks. While we certainly won’t be using most of the features of this library in one task, it’s better to include everything at once than to spend time thinking about which specific library we should include.

In the second line we set the namespace `std` as the default namespace. This command also makes it easier for us to write code because otherwise we would have to write `std::` in front of a lot of other expressions (eg `std::cin`,` std::cout`, `std::string`).

Then follows the function `main` in which we write our solution to a particular task.

In case you are planning to compete in competitions where the use of pre-written code is allowed, it is always good to have saved _template_ that you can just copy and paste, thus saving yourself some time.

### Compiling

You can compile and run your programs with the command

```
g++ -std=c++11 -O2 -Wall program.cpp -o program
```

in the command line, which will create an executable file that you will then be able to run.

### Additional features

Although the above template and compilation command are good enough, we can refine them a bit more so that we can write code faster and run the program faster.

We can speed up the reading of input data by using the following two lines at the beginning of the `main` function:

```cpp
ios::sync_with_stdio(0);
cin.tie(0);
```

Also, it often happens that you realize that you have an error in the program, so you run your program several times using the same input data, and spend too much time copying and pasting the input data. This problem can be avoided by pasting the input data into a file (eg `input.txt`) and using the command

```cpp
freopen("input.txt", "r", stdin);
```

to redirect the contents of the file `input.txt` to standard input. However, using a solution like this, you should remove this line before submitting your solution. To avoid this, we can use conditional compilation at the very beginning of the `main` function:

```cpp
#ifdef DEBUG
freopen("input.txt", "r", stdin);
#endif
```

and add the `-DDEBUG` flag to the compiler command so that the command now looks like this:

```
g++ -std=c++11 -O2 -Wall -DDEBUG program.cpp -o program
```

This will allow the input on your computer to be read from the `input.txt` file, and on the server that evaluates your solution from the standard input. Note that the `input.txt` file must be in the same folder as `program.cpp`.

After these improvements, your template should look like this:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    #ifdef DEBUG
    freopen("input.txt", "r", stdin);
    #endif

    ios::sync_with_stdio(0);
    cin.tie(0);

    // The task solution
}
```

### Codeforces-specific enhancements

Since most of the examples in these materials will be from the Codeforces competition, it should be mentioned that on this platform the input data consists of several test examples and the algorithm must be executed multiple times in one program execution. For this reason, we can create a special template for Codeforces that will look like this:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    #ifdef DEBUG
    freopen("ulaz.txt", "r", stdin);
    #endif

    ios::sync_with_stdio(0);
    cin.tie(0);

    int TEST;
    cin >> TEST;

    while(TEST--){
        // The task solution
    }
}
```

It is important to note that in each task you must carefully read what the input data look like, sometimes there are also tasks in which there is only one test in one copy of the input!

## Data types

### int

The integer data type `int` takes up $32$ of bit of memory, or $ 4 $ bytes, and covers integers from $-2^{31}$ to $2^{31}-1$, or about $-2.147 \cdot 10^{9}$ to about $2.147 \cdot 10^{9}$.

In case you need to perform some arithmetic operations with large numbers, it often happens that we exceed the limit of the type `int` and therefore the solutions of the problems turn out to be incorrect. For example, the following code snippet provides an unexpected solution:

```cpp
int a = 50000;
int b = a*a;
int c = b/2;

cout << a << " " << b << " " << c;
```

We would expect a printout like this:

```
50000 2500000000 1250000000
```

However, we get the following printout:

```
50000 -1794967296 -897483648
```

because the wrong value is stored in the variable $b$ because the value $50000^{2}$ is greater than the upper limit of type `int`, and the value is" poured "back into negative numbers.

### long long

To avoid overflow errors, we will use the `long long` type, which takes up 64 bits of memory and covers integers from $-2^{63}$ to $2^{63}-1$, respectively. from about $-9.223 \cdot 10^{18}$ to about $9.223 \cdot 10^{18}$.

By replacing the `int` type with the` long long` type in the last code snippet:

```cpp
long long a = 50000;
long long b = a*a;
long long c = b/2;

cout << a << " " << b << " " << c;
```

We get the expected output:

```
50000 2500000000 1250000000
```

Also, since as competitors we want to save as much time as possible, we can add a line to the beginning of our template (below the `#include <bits/stdc++.h>` line):

```cpp
#define ll long long
```

thus saving time by writing "ll" instead of "long long".

### float

If we want to use floating point numbers, we use the `float` type.

It is important to mention that often the precision of the `float' type is not good enough and it is better to avoid it. For example, the following code snippet does not provide the expected printout:

```cpp
float x = 3.14159265f;

cout << x << endl;
printf("%1.8f", x);
```

Printout:

```
3.14159
3.14159274
```

### double

If we want to use floating point numbers of double precision, we use the `double` type. If we take the last clip and change the type, we will get a different printout.

```cpp
double x = 3.14159265;

cout << x << endl;
printf("%1.8f", x);
```

Printout:

```
3.14159
3.14159265
```

### char

If we want to save a character in memory, we use the type `char`. This type is actually an integer data type, it can be converted to other integer types, and some arithmetic operations can be performed with them, such as addition and subtraction (other operations can be performed, but it doesn't make much sense).

```cpp
cout << (int)'a' << "\n";
cout << (char)('a' + 1) << "\n";
cout << (char)(97) << "\n";
cout << ('a' < 'z') << "\n";
cout << (int)('a' * 'b'); // This, although it works, doesn't make much sense...
```

Printout:

```
97
b
a
1
9506
```

### string

If we want to store a word or sentence in memory, we use `string`. `string` is not a basic data type, but more like an array of type `char` which has some built-in functions that we can use to manipulate this data, but more on that in the chapter on type `string`.

We can use the `cin` command to store data in a variable of type `string`, however, if this expression contains spaces at the input, only the first word will be saved in the variable. To save the entire line, we use the `getline` command. For example, for the entrance:

```
NatPro is great!
```

The following code snippet

```cpp
string s;
cin >> s;

cout << s;
```

will print `NatPro`, while the next snippet

```cpp
string s;
getline(cin, s);

cout << s;
```

prints out `NatPro is great!`.

Some functions you will encounter as arguments are of type `const char *` and therefore will not work with type `string`, however, using the function `c_str` you can convert `string` to `const char *` and thus solve the potential an issue.

```cpp
string s = "echo NatPro is great!";

// system(s); Doesn't work!
system(s.c_str());
```

In this example, the `system` command executes a command at the command line.