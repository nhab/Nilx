# Summary :
-------------------------------------------------------------------------------------
# SOLID

## Single-Responsibility Principle : 
A class should have one and only one reason to change, meaning that a class should have only one job.

## Open-Closed Principle : 
Objects or entities should be open for extension but closed for modification. 

## Liskov Substitution Principle : 
Let q(x) be a property provable about objects of x of type T. 

Then q(y) should be provable for objects y of type S where S is a subtype of T. 

## Interface Segregation Principle : 
A client should never be forced to implement an interface that it doesn’t use,

or clients shouldn’t be forced to depend on methods they do not use. 

## Dependency Inversion Principle : 
Entities must depend on abstractions, not on concretions.

It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

-------------------------------------------------------------------------------------
# Design patterns
## Structural patterns deal with structure of classes and objects.
    Adapter , 
    Bridge ,
    Composite , 
    Decorator , 
    Facade ,
    Flyweight , 
    proxy 

## Creational patterns provide instantiation mechanisms instead of using constructors.
    Factory Method ,
    Abstract Factory ,
    Singleton Pattern,
    Prototype , 
    Builder , 
    Object Pool 
  
## Behavioral patterns :
    Chain of Responsibility Pattern,
    Command ,
    Interpreter ,
    Iterator ,
    Mediator ,
    Memento ,
    Observer ,
    State ,
    Strategy ,
    Template ,
    Visitor ,
    Null Object

-------------------------------------------------------------------------------------
# Algorithms
## Time complexity : 
    The number of times a statement is executed.
    O(n) : n operation
    O(log n) : time complexity of binary search is O(log n) 
    O(2^n) : Exponential Time Complexity: brute force algo 
    
## HashTable = HashMap = Dictionary
    Is converting an object into an integer value.It stores key-values:
    { "001" , ".Net" }
    { "002" , ".C#" }
  
## linked list
   each node in the list has a reference to the next node, except the tail of the list
   
## Hashset < T >
    Is an unordered collection of unique elements. 
   
## Graph
    - The graphs are data structures characterized by nodes(or vertices) and edges joining the nodes
    - Adjacency Matrix Indicies of row and column will represent
      the vertices and the values in each cell represent edges.
 -------------------------------------------------------------------------------------  
# DDD
## DDD 
    is designing the domain model classes first , 
    based on input from that domain's experts 
    then creating database based on the domain model. 
  
## Ubiquitous language:
    Most of ambiguities, can be solved with proper naming of classes and methods, 
    making them express what an object is and what a method does in the context of the domain
  
## Layers
    layers in DDD are: 
        ● Domain Layer implements the core, use-case
        independent business logic of the domain/system.

        ● Application Layer implements the use cases of the
        application based on the domain. A use case can be
        thought as a user interaction on the User Interface (UI)

        ● Presentation Layer contains the UI elements (pages, components) of the application.

        ● Infrastructure Layer supports other layer by implementing the abstractions 
          and integrations to 3rd-party library and systems.
        
## Entity: 
    An Entity is an object with its own properties (state, data) and methods 
    that implements the business logic that is executed on these properties.
    
    An entity is represented by its unique identiﬁer (Id).      
    
## Value Object: 
    A Value Object is another kind of domain object that is identiﬁed by its properties rather than a unique Id .
    
## Agregate
    A DDD aggregate is a cluster of domain objects that can be treated as a single unit.
    
    An example may be an order and its line-items
    
    An Aggregate is a hierarchy of objects (Entities and Value objects) that make up a consistency boundary
    
## Agregate root
Each AGGREGATE has a root and a boundary. 

The boundary defines what is inside the AGGREGATE.

The root is a single, specific ENTITY contained in the AGGREGATE.

The root is the only member of the AGGREGATE that outside objects are allowed to hold references to.

**Example**: An example is a model containing a Customer entity and an Address entity.

We would never access an Address entity directly from the model
    
## Repository (interface):
    A Repository is a collection-like interface 
    that is used by the Domain and Application Layers 
    to access to the data persistence system (the database).
    
    ● It hides the complexity of the DBMS from the business code. 
    ● Domain Layer contains the interfaces of the repositories. 
    ● "Mediates between the domain and data mapping layers 
      using a collection-like interface for accessing domain objects
    
## Domain Service: 
● A Domain Service is a stateless service 

that implements core business rules of the domain. 

● It is useful to implement domain logic 

that depends on multiple aggregate (entity) type or some external services. 

● Services come in 3 flavours:
Domain Services, Application Services, and Infrastructure Services.

**Domain Services :** 
        Encapsulates business logic that doesn't naturally fit within a domain object,
        and are NOT typical CRUD operations – those would belong to a Repository. 
**Application Services :** 
        Used by external consumers to talk to your system (think Web Services). 
        If consumers need access to CRUD operations, they would be exposed her
**Infrastructure Services :** 
        Used to abstract technical concerns (e.g. MSMQ, email provider, etc).
        ● Keeping Domain Services along with your Domain Objects is sensible( they are all focused on domain logic).
        And you can inject Repositories into your Services. Depends on services and repositories. 

## Speciﬁcation: 
● A Speciﬁcation is used to deﬁne named, reusable, combinable and testable ﬁlters 
for Domain Objects based on the business rules. 
● you can think of specifications as of domain classes that categorize other domain classes. 
● A specification answers the question of whether a domain object meets some criteria. 
● he main benefit of the Specification pattern is that you can reuse that knowledge 
(of whether a domain object meets some criteria) in different scenarios 
and therefore adhere to the Don’t Repeat Yourself principle. 
        
# Domain Event: 
      A Domain Event is a way of informing other services in a loosely coupled manner,
      when a domain speciﬁc event occurs.
      
    ● Factories Since an aggregate should always be in a consistent state 
    it is important that they are constructed in a consistent state to the user.
    Factories provide a way to ensure that new instances of an aggregate always start in a consistent state.
      
#    Application layer =============================
##    ● Application Service: 
      An Application Service is a stateless service that implements use cases of the application. 
      An application service typically gets and returns DTOs. It is used by the Presentation Layer. 
      It uses and coordinates the domain objects to implement the use cases.
      A use case is typically considered as a Unit Of Work.
      
##   ● Data Transfer Object (DTO): 
      A DTO is a simple object without any business logic that is used to transfer state (data) between the Application and Presentation Layers.
      
##   ● Unit of Work (UOW): A Unit of Work is an atomic work that should be done as a transaction unit.
    All the operations inside a UOW should be committed on success or rolled back on a failure.  
    
#   User Interface layer ==========================
    Responsible for drawing the screens the users use to interact with the application 
    and translating the user’s inputs into application commands. 
    It is important to note that the “users” can be human but can also be other applications connecting to our API,
    which corresponds entirely to the Boundary objects in the EBI architecture;

#  Application Layer ============================
    Orchestrates Domain objects to perform tasks required by the users: the Use Cases.
    It does not contain business logic. 
    This relates to the Interactors in the EBI architecture,
    except that the Interactors were any object that was not related to the UI or an Entity and,
    in this case, the Application Layer only contains the objects relevant to a Use Case. 
    This layer is where the Application Services belong, 
    as they are the containers where the use case orchestration happens,
    using repositories, Domain Services, Entities, Value Objects or any other Domain object;

#  Infrastructure ===============================
    The technical capabilities that support the layers above, ie. persistence or messaging.
    =============================================
#  Bounded context
    In an enterprise application, the model can grow quite a lot and the size of the team working on the code base as well. 
    The usual solution to a big problem is to break it up into smaller pieces, 
    and this is exactly where the “bounded contexts” come into play. 
    Two subsystems commonly serve very different user communities Bounded contexts 
    define a context where an isolated part of the model applies. 
    The isolation can be achieved by decoupling technical logic, 
    by code base segregation, by database schema segregation and also in terms of team organisation.  

#  Anti-corruption layer (ACL)
    An ACL is at the very least a thin translation layer between two bounded contexts. 
    Even if both bounded contexts are well defined, and share similar models. 
    The models in one context should not influence the models in another 
    and without a layer in between to translate between the two corruption will creep in. 
    If the external system a bounded context is talking to is a legacy system with a very poor model 
    it is even more likely it will corrupt unless the ACL acts as a strong buffer

