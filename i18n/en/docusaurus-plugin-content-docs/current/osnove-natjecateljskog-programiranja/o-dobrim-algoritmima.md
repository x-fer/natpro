---
title: About good algorithms
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## Good algorithm

The goal of solving tasks in competitions is not **just** to submit a program that gives an accurate result, it is often important that the program is effective. Tasks generally have time and memory limitations of program execution, so it is important to know in time to determine the approach by which you will solve a particular task. On some platforms (eg Codeforces) it is also important how long it took you to solve a certain task, and for that reason it is important to quickly determine whether an approach will work fast enough with the set limits of input data.

The more tasks you solve, the easier it will be for you to quickly determine an effective approach to solving tasks. We strongly recommend that you use paper and pencil during the competition to be able to sketch, manually test some test examples, and check that your program is working on them. While the use of pen and paper is desirable, over time (and with a multitude of solved tasks!) you’ll notice that for easier tasks you won’t need paper and pen at all but the solutions will start to come “by themselves”.

In addition, you will often find yourself in a situation where your program works for all the test cases you test it with, and you receive a report from the evaluator about an incorrect solution on a test case. In that case, it’s important to think about how good your test cases actually are. Sometimes it happens that our program fails on edge case tests (eg due to _overflow_ of integer variables), or in some part of the code we try to retrieve the field index outside its limits and the like. Since we came up with the algorithm ourselves, we often unknowingly give our program only those tests that we know the program will work. It is more important to try to come up with tests for which the program **will not** work, because with them you can see what you need to fix in the program.

It is important to mention that, like everything, competition programming requires a large amount of work to achieve great results. On the Codeforces platform you can find [task list](https://codeforces.com/problemset) where you can sort tasks by difficulty ($800$ - easiest tasks, $3500$ - most difficult), by topics (using _tags_) or by number of users who solved that task. You can also choose a competition and virtually participate in that competition, and thus get an idea of how well you would have placed if you had actually competed.

## Asymptotic complexity of the algorithm

Since some tasks can be solved in many different ways, it would be good to have some notation with which we could indicate how good or bad each algorithm is. That is why we will get acquainted with the _Big O_ notation, with which we can easily describe algorithms and quickly determine whether we should use a particular algorithm for a particular task.

Using the Big O notation we can determine the number of operations in the program depends on one or more variables.



Take, for example, the following code snippet:

```cpp
int a, b;
cin >> a >> b;

cout << a + b;
```

We will notice that the program, regardless of the values of the variables $a$ and $b$, will always perform one addition operation. We call such a program a program of **constant** complexity, and we write its complexity as $O(1)$ in the Big O notation. Now let's look at the following example:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    cout << i << endl;
}
```

Note that the number of print operations in this program clip depends on the value of the variables $n$ - for $n = 1$, the print operation will be performed once, for $n = 10$ will be performed $ 10 $ times, and so on. In this case we are talking about **linear** complexity, and we write $O(n)$. Let's look at another example:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
        cout << i*n + j << endl;
    }
}
```

In this case, the print operation will be performed once for $n = 1$, and $100$ times for $n = 10$. We can easily conclude that the operation will always be performed $n^{2}$ times. In that case we are talking about **squared** complexity, ie $ O(n^{2})$.

Complexity does not necessarily have to be in the form $O(n^{p})$. Let's look at the following examples: 

```cpp
// O(log(n)), logarithmic complexity (base 2)
int n;
cin >> n;

while(n>0){
    cout << n << endl;

    n = n/2;
}
```

```cpp
// O(sqrt(n)), square root of n complexity
int n;
cin >> n;

for(int i=0; i*i < n; i++){
    cout << i << endl;
}
```

Of course, not all programs are this simple. Programs mainly consist of multiple phases, where each phase has its own complexity. The total number of operations is of course the sum of the number of operations in each of the phases. However, in the Big O notation we write only the complexity of the phase that burdens the speed of program execution the most.

```cpp
int n;
cin >> n;

// First phase
for(int i=0; i<n; i++){
    cout << i << endl;
}

// Second phase
for(int i=0; i<n; i++){
    for(int j=i; j<n; j++){
        cout << i << " " << j << endl;
    }
}
```

We already know that the complexity of the first phase is $O(n)$, however, what is the complexity of the second phase? In this case, the variable $j$ in the for loop does not start from zero, but from the value of the variable $i$, and we can calculate that the print operation will be performed $\frac{n\cdot(n+1)}{2}$ times. When we expand that expression, we get $\frac{1}{2}n^{2} + \frac{1}{2}n$. And in this case we are talking about **squared** complexity ($O(n^{2})$) because the adder $\frac{1}{2}n^{2}$ is the one that burdens the speed of program execution the most. As for the constant factor $\frac{1}{2}$, we do not write it in the Big O notation. Now that we know the number of operations of both phases, when we add them up we get the total number of operations: $\frac{1}{2}n^{2} + \frac{3}{2}n$. And so we conclude that the overall complexity of this program is $O(n^{2})$.

Sometimes the complexity of a program does not depend on just one variable:

```cpp
int n, m;
cin >> n >> m;

for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
        cout << i << " " << j << endl;
    }
}
```

In this case, $nm$ print operations will be performed, so the complexity is $O(nm)$.

You may have wondered while reading, why does this matter at all? The answer lies in the fact that by knowing the asymptotic complexity of algorithms we can very quickly assess whether our solution will be good enough to execute the program within a given time limit. Take for example that an evaluator can perform $10^{9}$ operations in one second. The text of the task states that the variable $n$ can take values from $1$ to $10^{5}$, and the time limit for running the program is $1$ second. Then we can be sure that $O(n^{2})$ will not be good enough because we can count on a much larger number of operations to be performed than the evaluator can calculate in a second.