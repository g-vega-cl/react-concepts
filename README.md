# react-concepts
Website explaining all of React

# SOLID

https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-priciples-of-object-oriented-design-with-javascript-790f6ac9b9fa

## Single Responsibility Principle.

> A class should have only one reason to change.

* If you have a class with a lot of methods, you end up with a confusing class.

Instead of having one big VEHICLE class, we can do many small classes like ENGINE, TIRE, etc…

## Open Closed Principle.

> A class should be open for extension, but closed for modification.

* It promotes re-utilization.

* Even when you split responsibility of a class, you should do so in a way that behavior can be extended or replaced.

* This is related to having things as high in the stack as possible.

You can have a VEHICLE class with `ACCELERATE()`, and have CAR, BIKE, TRUCK, etc… Subclasses that have the specializations.

## Liskov Substitution Principle. (LSP)

> You should be able to change an instance using a sub-type and your code should still work.

* Your higher classes should encompass only the minimum common denominators.

VEHICLE class and you have a method called `SHIFT()`. And then you have a subclass called `ELECTRIC CAR` ELECTRIC CARS DON’T SHIFT. So you have an inherited method that should not exist.

## Interface Segregation Principle

> Allows to split the responsibility of a class without LSP violation.

* More interfaces are better than too little.

In a `VEHICLE` class, you can have two subclasses, `COMBUSTION` and `ELECTRIC`.

## Dependency Inversion Principle.

> One should depend on abstraction and not concrete instances.

> High-level modules should not import anything from low-level modules; they should both depend on abstractions

Instead of having a specific car with specific tires. Abstract the tires and let the vehicle have a dependency on the TIRE class.

![Screen Shot 2022-11-26 at 8.30.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfecebe5-5391-462a-bfa9-080a4081b24d/Screen_Shot_2022-11-26_at_8.30.38.png)

Think this as a CEO that delegates responsibilities to the executives.

Imagine you had a framework with an active record module that allows applications to talk with databases. It would be wrong to add a database query for USERS because your customers could only use a USERS class.

Think of, can this be tested without the other class?