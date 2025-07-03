
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model DocumentNumbering
 * 
 */
export type DocumentNumbering = $Result.DefaultSelection<Prisma.$DocumentNumberingPayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>
/**
 * Model SalesReport
 * 
 */
export type SalesReport = $Result.DefaultSelection<Prisma.$SalesReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.documentNumbering`: Exposes CRUD operations for the **DocumentNumbering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentNumberings
    * const documentNumberings = await prisma.documentNumbering.findMany()
    * ```
    */
  get documentNumbering(): Prisma.DocumentNumberingDelegate<ExtArgs>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs>;

  /**
   * `prisma.salesReport`: Exposes CRUD operations for the **SalesReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesReports
    * const salesReports = await prisma.salesReport.findMany()
    * ```
    */
  get salesReport(): Prisma.SalesReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    Product: 'Product',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Invoice: 'Invoice',
    Payment: 'Payment',
    DocumentNumbering: 'DocumentNumbering',
    UserLocation: 'UserLocation',
    SalesReport: 'SalesReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "customer" | "product" | "order" | "orderItem" | "invoice" | "payment" | "documentNumbering" | "userLocation" | "salesReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      DocumentNumbering: {
        payload: Prisma.$DocumentNumberingPayload<ExtArgs>
        fields: Prisma.DocumentNumberingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentNumberingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentNumberingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          findFirst: {
            args: Prisma.DocumentNumberingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentNumberingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          findMany: {
            args: Prisma.DocumentNumberingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>[]
          }
          create: {
            args: Prisma.DocumentNumberingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          createMany: {
            args: Prisma.DocumentNumberingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentNumberingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>[]
          }
          delete: {
            args: Prisma.DocumentNumberingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          update: {
            args: Prisma.DocumentNumberingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          deleteMany: {
            args: Prisma.DocumentNumberingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentNumberingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentNumberingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentNumberingPayload>
          }
          aggregate: {
            args: Prisma.DocumentNumberingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentNumbering>
          }
          groupBy: {
            args: Prisma.DocumentNumberingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentNumberingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentNumberingCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentNumberingCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
      SalesReport: {
        payload: Prisma.$SalesReportPayload<ExtArgs>
        fields: Prisma.SalesReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          findFirst: {
            args: Prisma.SalesReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          findMany: {
            args: Prisma.SalesReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>[]
          }
          create: {
            args: Prisma.SalesReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          createMany: {
            args: Prisma.SalesReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>[]
          }
          delete: {
            args: Prisma.SalesReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          update: {
            args: Prisma.SalesReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          deleteMany: {
            args: Prisma.SalesReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesReportPayload>
          }
          aggregate: {
            args: Prisma.SalesReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesReport>
          }
          groupBy: {
            args: Prisma.SalesReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesReportCountArgs<ExtArgs>
            result: $Utils.Optional<SalesReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customers: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | UserCountOutputTypeCountCustomersArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    invoices: number
    orders: number
    payments: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | CustomerCountOutputTypeCountInvoicesArgs
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    payments?: boolean | CustomerCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    exeId: string | null
    companyId: string | null
    password: string | null
    leader: string | null
    areaCode: string | null
    exeName: string | null
    exeNameOrig: string | null
    role: string | null
    areaName: string | null
    region: string | null
    subdivisionCode: string | null
    imageLocation: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    exeId: string | null
    companyId: string | null
    password: string | null
    leader: string | null
    areaCode: string | null
    exeName: string | null
    exeNameOrig: string | null
    role: string | null
    areaName: string | null
    region: string | null
    subdivisionCode: string | null
    imageLocation: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    exeId: number
    companyId: number
    password: number
    leader: number
    areaCode: number
    exeName: number
    exeNameOrig: number
    role: number
    areaName: number
    region: number
    subdivisionCode: number
    imageLocation: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    exeId?: true
    companyId?: true
    password?: true
    leader?: true
    areaCode?: true
    exeName?: true
    exeNameOrig?: true
    role?: true
    areaName?: true
    region?: true
    subdivisionCode?: true
    imageLocation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    exeId?: true
    companyId?: true
    password?: true
    leader?: true
    areaCode?: true
    exeName?: true
    exeNameOrig?: true
    role?: true
    areaName?: true
    region?: true
    subdivisionCode?: true
    imageLocation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    exeId?: true
    companyId?: true
    password?: true
    leader?: true
    areaCode?: true
    exeName?: true
    exeNameOrig?: true
    role?: true
    areaName?: true
    region?: true
    subdivisionCode?: true
    imageLocation?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    exeId: string
    companyId: string
    password: string
    leader: string | null
    areaCode: string | null
    exeName: string | null
    exeNameOrig: string | null
    role: string | null
    areaName: string | null
    region: string | null
    subdivisionCode: string | null
    imageLocation: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exeId?: boolean
    companyId?: boolean
    password?: boolean
    leader?: boolean
    areaCode?: boolean
    exeName?: boolean
    exeNameOrig?: boolean
    role?: boolean
    areaName?: boolean
    region?: boolean
    subdivisionCode?: boolean
    imageLocation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customers?: boolean | User$customersArgs<ExtArgs>
    documentNumbering?: boolean | User$documentNumberingArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exeId?: boolean
    companyId?: boolean
    password?: boolean
    leader?: boolean
    areaCode?: boolean
    exeName?: boolean
    exeNameOrig?: boolean
    role?: boolean
    areaName?: boolean
    region?: boolean
    subdivisionCode?: boolean
    imageLocation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    exeId?: boolean
    companyId?: boolean
    password?: boolean
    leader?: boolean
    areaCode?: boolean
    exeName?: boolean
    exeNameOrig?: boolean
    role?: boolean
    areaName?: boolean
    region?: boolean
    subdivisionCode?: boolean
    imageLocation?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | User$customersArgs<ExtArgs>
    documentNumbering?: boolean | User$documentNumberingArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      documentNumbering: Prisma.$DocumentNumberingPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      exeId: string
      companyId: string
      password: string
      leader: string | null
      areaCode: string | null
      exeName: string | null
      exeNameOrig: string | null
      role: string | null
      areaName: string | null
      region: string | null
      subdivisionCode: string | null
      imageLocation: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends User$customersArgs<ExtArgs> = {}>(args?: Subset<T, User$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany"> | Null>
    documentNumbering<T extends User$documentNumberingArgs<ExtArgs> = {}>(args?: Subset<T, User$documentNumberingArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly exeId: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly leader: FieldRef<"User", 'String'>
    readonly areaCode: FieldRef<"User", 'String'>
    readonly exeName: FieldRef<"User", 'String'>
    readonly exeNameOrig: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly areaName: FieldRef<"User", 'String'>
    readonly region: FieldRef<"User", 'String'>
    readonly subdivisionCode: FieldRef<"User", 'String'>
    readonly imageLocation: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.customers
   */
  export type User$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * User.documentNumbering
   */
  export type User$documentNumberingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    where?: DocumentNumberingWhereInput
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    creditLimit: Decimal | null
    creditPeriod: number | null
    lastInvoiceAmt: Decimal | null
    lastPaymentAmt: Decimal | null
  }

  export type CustomerSumAggregateOutputType = {
    creditLimit: Decimal | null
    creditPeriod: number | null
    lastInvoiceAmt: Decimal | null
    lastPaymentAmt: Decimal | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    exeId: string | null
    customerName: string | null
    addr1: string | null
    addr2: string | null
    addr3: string | null
    city: string | null
    route: string | null
    phone1: string | null
    phone2: string | null
    phone3: string | null
    additional: string | null
    isActive: boolean | null
    grade: string | null
    contactName: string | null
    contactPhone: string | null
    startDate: Date | null
    creditLimit: Decimal | null
    creditPeriod: number | null
    comments: string | null
    lastInvoiceDate: Date | null
    lastInvoiceAmt: Decimal | null
    lastPaymentDate: Date | null
    lastPaymentAmt: Decimal | null
    isInactive: boolean | null
    isHold: boolean | null
    followupStatus: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    exeId: string | null
    customerName: string | null
    addr1: string | null
    addr2: string | null
    addr3: string | null
    city: string | null
    route: string | null
    phone1: string | null
    phone2: string | null
    phone3: string | null
    additional: string | null
    isActive: boolean | null
    grade: string | null
    contactName: string | null
    contactPhone: string | null
    startDate: Date | null
    creditLimit: Decimal | null
    creditPeriod: number | null
    comments: string | null
    lastInvoiceDate: Date | null
    lastInvoiceAmt: Decimal | null
    lastPaymentDate: Date | null
    lastPaymentAmt: Decimal | null
    isInactive: boolean | null
    isHold: boolean | null
    followupStatus: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    customerId: number
    exeId: number
    customerName: number
    addr1: number
    addr2: number
    addr3: number
    city: number
    route: number
    phone1: number
    phone2: number
    phone3: number
    additional: number
    isActive: number
    grade: number
    contactName: number
    contactPhone: number
    startDate: number
    creditLimit: number
    creditPeriod: number
    comments: number
    lastInvoiceDate: number
    lastInvoiceAmt: number
    lastPaymentDate: number
    lastPaymentAmt: number
    isInactive: number
    isHold: number
    followupStatus: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    creditLimit?: true
    creditPeriod?: true
    lastInvoiceAmt?: true
    lastPaymentAmt?: true
  }

  export type CustomerSumAggregateInputType = {
    creditLimit?: true
    creditPeriod?: true
    lastInvoiceAmt?: true
    lastPaymentAmt?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    customerId?: true
    exeId?: true
    customerName?: true
    addr1?: true
    addr2?: true
    addr3?: true
    city?: true
    route?: true
    phone1?: true
    phone2?: true
    phone3?: true
    additional?: true
    isActive?: true
    grade?: true
    contactName?: true
    contactPhone?: true
    startDate?: true
    creditLimit?: true
    creditPeriod?: true
    comments?: true
    lastInvoiceDate?: true
    lastInvoiceAmt?: true
    lastPaymentDate?: true
    lastPaymentAmt?: true
    isInactive?: true
    isHold?: true
    followupStatus?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    customerId?: true
    exeId?: true
    customerName?: true
    addr1?: true
    addr2?: true
    addr3?: true
    city?: true
    route?: true
    phone1?: true
    phone2?: true
    phone3?: true
    additional?: true
    isActive?: true
    grade?: true
    contactName?: true
    contactPhone?: true
    startDate?: true
    creditLimit?: true
    creditPeriod?: true
    comments?: true
    lastInvoiceDate?: true
    lastInvoiceAmt?: true
    lastPaymentDate?: true
    lastPaymentAmt?: true
    isInactive?: true
    isHold?: true
    followupStatus?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    customerId?: true
    exeId?: true
    customerName?: true
    addr1?: true
    addr2?: true
    addr3?: true
    city?: true
    route?: true
    phone1?: true
    phone2?: true
    phone3?: true
    additional?: true
    isActive?: true
    grade?: true
    contactName?: true
    contactPhone?: true
    startDate?: true
    creditLimit?: true
    creditPeriod?: true
    comments?: true
    lastInvoiceDate?: true
    lastInvoiceAmt?: true
    lastPaymentDate?: true
    lastPaymentAmt?: true
    isInactive?: true
    isHold?: true
    followupStatus?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    customerId: string
    exeId: string
    customerName: string
    addr1: string | null
    addr2: string | null
    addr3: string | null
    city: string | null
    route: string | null
    phone1: string | null
    phone2: string | null
    phone3: string | null
    additional: string | null
    isActive: boolean
    grade: string | null
    contactName: string | null
    contactPhone: string | null
    startDate: Date | null
    creditLimit: Decimal | null
    creditPeriod: number | null
    comments: string | null
    lastInvoiceDate: Date | null
    lastInvoiceAmt: Decimal | null
    lastPaymentDate: Date | null
    lastPaymentAmt: Decimal | null
    isInactive: boolean
    isHold: boolean
    followupStatus: string | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    exeId?: boolean
    customerName?: boolean
    addr1?: boolean
    addr2?: boolean
    addr3?: boolean
    city?: boolean
    route?: boolean
    phone1?: boolean
    phone2?: boolean
    phone3?: boolean
    additional?: boolean
    isActive?: boolean
    grade?: boolean
    contactName?: boolean
    contactPhone?: boolean
    startDate?: boolean
    creditLimit?: boolean
    creditPeriod?: boolean
    comments?: boolean
    lastInvoiceDate?: boolean
    lastInvoiceAmt?: boolean
    lastPaymentDate?: boolean
    lastPaymentAmt?: boolean
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    exeId?: boolean
    customerName?: boolean
    addr1?: boolean
    addr2?: boolean
    addr3?: boolean
    city?: boolean
    route?: boolean
    phone1?: boolean
    phone2?: boolean
    phone3?: boolean
    additional?: boolean
    isActive?: boolean
    grade?: boolean
    contactName?: boolean
    contactPhone?: boolean
    startDate?: boolean
    creditLimit?: boolean
    creditPeriod?: boolean
    comments?: boolean
    lastInvoiceDate?: boolean
    lastInvoiceAmt?: boolean
    lastPaymentDate?: boolean
    lastPaymentAmt?: boolean
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    customerId?: boolean
    exeId?: boolean
    customerName?: boolean
    addr1?: boolean
    addr2?: boolean
    addr3?: boolean
    city?: boolean
    route?: boolean
    phone1?: boolean
    phone2?: boolean
    phone3?: boolean
    additional?: boolean
    isActive?: boolean
    grade?: boolean
    contactName?: boolean
    contactPhone?: boolean
    startDate?: boolean
    creditLimit?: boolean
    creditPeriod?: boolean
    comments?: boolean
    lastInvoiceDate?: boolean
    lastInvoiceAmt?: boolean
    lastPaymentDate?: boolean
    lastPaymentAmt?: boolean
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    invoices?: boolean | Customer$invoicesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    payments?: boolean | Customer$paymentsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      exeId: string
      customerName: string
      addr1: string | null
      addr2: string | null
      addr3: string | null
      city: string | null
      route: string | null
      phone1: string | null
      phone2: string | null
      phone3: string | null
      additional: string | null
      isActive: boolean
      grade: string | null
      contactName: string | null
      contactPhone: string | null
      startDate: Date | null
      creditLimit: Prisma.Decimal | null
      creditPeriod: number | null
      comments: string | null
      lastInvoiceDate: Date | null
      lastInvoiceAmt: Prisma.Decimal | null
      lastPaymentDate: Date | null
      lastPaymentAmt: Prisma.Decimal | null
      isInactive: boolean
      isHold: boolean
      followupStatus: string | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    invoices<T extends Customer$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Customer$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly customerId: FieldRef<"Customer", 'String'>
    readonly exeId: FieldRef<"Customer", 'String'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly addr1: FieldRef<"Customer", 'String'>
    readonly addr2: FieldRef<"Customer", 'String'>
    readonly addr3: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly route: FieldRef<"Customer", 'String'>
    readonly phone1: FieldRef<"Customer", 'String'>
    readonly phone2: FieldRef<"Customer", 'String'>
    readonly phone3: FieldRef<"Customer", 'String'>
    readonly additional: FieldRef<"Customer", 'String'>
    readonly isActive: FieldRef<"Customer", 'Boolean'>
    readonly grade: FieldRef<"Customer", 'String'>
    readonly contactName: FieldRef<"Customer", 'String'>
    readonly contactPhone: FieldRef<"Customer", 'String'>
    readonly startDate: FieldRef<"Customer", 'DateTime'>
    readonly creditLimit: FieldRef<"Customer", 'Decimal'>
    readonly creditPeriod: FieldRef<"Customer", 'Int'>
    readonly comments: FieldRef<"Customer", 'String'>
    readonly lastInvoiceDate: FieldRef<"Customer", 'DateTime'>
    readonly lastInvoiceAmt: FieldRef<"Customer", 'Decimal'>
    readonly lastPaymentDate: FieldRef<"Customer", 'DateTime'>
    readonly lastPaymentAmt: FieldRef<"Customer", 'Decimal'>
    readonly isInactive: FieldRef<"Customer", 'Boolean'>
    readonly isHold: FieldRef<"Customer", 'Boolean'>
    readonly followupStatus: FieldRef<"Customer", 'String'>
    readonly location: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.invoices
   */
  export type Customer$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.payments
   */
  export type Customer$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
    qty: number | null
    discountAmount: Decimal | null
    discountPercentage: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
    qty: number | null
    discountAmount: Decimal | null
    discountPercentage: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    itemCode: string | null
    description: string | null
    category: string | null
    subCategory: string | null
    categoryCode: string | null
    uom: string | null
    price: Decimal | null
    qty: number | null
    imageUrl: string | null
    discountAmount: Decimal | null
    discountPercentage: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    itemCode: string | null
    description: string | null
    category: string | null
    subCategory: string | null
    categoryCode: string | null
    uom: string | null
    price: Decimal | null
    qty: number | null
    imageUrl: string | null
    discountAmount: Decimal | null
    discountPercentage: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    itemCode: number
    description: number
    category: number
    subCategory: number
    categoryCode: number
    uom: number
    price: number
    qty: number
    imageUrl: number
    discountAmount: number
    discountPercentage: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    qty?: true
    discountAmount?: true
    discountPercentage?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    qty?: true
    discountAmount?: true
    discountPercentage?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    itemCode?: true
    description?: true
    category?: true
    subCategory?: true
    categoryCode?: true
    uom?: true
    price?: true
    qty?: true
    imageUrl?: true
    discountAmount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    itemCode?: true
    description?: true
    category?: true
    subCategory?: true
    categoryCode?: true
    uom?: true
    price?: true
    qty?: true
    imageUrl?: true
    discountAmount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    itemCode?: true
    description?: true
    category?: true
    subCategory?: true
    categoryCode?: true
    uom?: true
    price?: true
    qty?: true
    imageUrl?: true
    discountAmount?: true
    discountPercentage?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    itemCode: string
    description: string
    category: string | null
    subCategory: string | null
    categoryCode: string | null
    uom: string | null
    price: Decimal
    qty: number
    imageUrl: string | null
    discountAmount: Decimal
    discountPercentage: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    categoryCode?: boolean
    uom?: boolean
    price?: boolean
    qty?: boolean
    imageUrl?: boolean
    discountAmount?: boolean
    discountPercentage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    itemCode?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    categoryCode?: boolean
    uom?: boolean
    price?: boolean
    qty?: boolean
    imageUrl?: boolean
    discountAmount?: boolean
    discountPercentage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    itemCode?: boolean
    description?: boolean
    category?: boolean
    subCategory?: boolean
    categoryCode?: boolean
    uom?: boolean
    price?: boolean
    qty?: boolean
    imageUrl?: boolean
    discountAmount?: boolean
    discountPercentage?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      itemCode: string
      description: string
      category: string | null
      subCategory: string | null
      categoryCode: string | null
      uom: string | null
      price: Prisma.Decimal
      qty: number
      imageUrl: string | null
      discountAmount: Prisma.Decimal
      discountPercentage: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly itemCode: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly subCategory: FieldRef<"Product", 'String'>
    readonly categoryCode: FieldRef<"Product", 'String'>
    readonly uom: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Decimal'>
    readonly qty: FieldRef<"Product", 'Int'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly discountAmount: FieldRef<"Product", 'Decimal'>
    readonly discountPercentage: FieldRef<"Product", 'Decimal'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerId: string | null
    salespersonId: string | null
    status: string | null
    isDraft: boolean | null
    errorMessage: string | null
    jsonPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerId: string | null
    salespersonId: string | null
    status: string | null
    isDraft: boolean | null
    errorMessage: string | null
    jsonPayload: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    customerId: number
    salespersonId: number
    status: number
    isDraft: number
    errorMessage: number
    jsonPayload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    salespersonId?: true
    status?: true
    isDraft?: true
    errorMessage?: true
    jsonPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    salespersonId?: true
    status?: true
    isDraft?: true
    errorMessage?: true
    jsonPayload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    salespersonId?: true
    status?: true
    isDraft?: true
    errorMessage?: true
    jsonPayload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    customerId: string
    salespersonId: string
    status: string
    isDraft: boolean
    errorMessage: string | null
    jsonPayload: string
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    salespersonId?: boolean
    status?: boolean
    isDraft?: boolean
    errorMessage?: boolean
    jsonPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    salespersonId?: boolean
    status?: boolean
    isDraft?: boolean
    errorMessage?: boolean
    jsonPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    salespersonId?: boolean
    status?: boolean
    isDraft?: boolean
    errorMessage?: boolean
    jsonPayload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      customerId: string
      salespersonId: string
      status: string
      isDraft: boolean
      errorMessage: string | null
      jsonPayload: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly salespersonId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly isDraft: FieldRef<"Order", 'Boolean'>
    readonly errorMessage: FieldRef<"Order", 'String'>
    readonly jsonPayload: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
    totalAmount: Decimal | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
    totalAmount: Decimal | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
    totalAmount: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: Decimal | null
    discount: Decimal | null
    totalAmount: Decimal | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
    discount: number
    totalAmount: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discount?: true
    totalAmount?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    discount?: true
    totalAmount?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    totalAmount?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    totalAmount?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    discount?: true
    totalAmount?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: Decimal
    discount: Decimal
    totalAmount: Decimal
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    discount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      quantity: number
      unitPrice: Prisma.Decimal
      discount: Prisma.Decimal
      totalAmount: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Decimal'>
    readonly discount: FieldRef<"OrderItem", 'Decimal'>
    readonly totalAmount: FieldRef<"OrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    docAmount: Decimal | null
    daysDue: number | null
    dueAmount: Decimal | null
  }

  export type InvoiceSumAggregateOutputType = {
    docAmount: Decimal | null
    daysDue: number | null
    dueAmount: Decimal | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    documentNo: string | null
    docDate: Date | null
    docAmount: Decimal | null
    daysDue: number | null
    docType: string | null
    dueAmount: Decimal | null
    exeId: string | null
    refNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    documentNo: string | null
    docDate: Date | null
    docAmount: Decimal | null
    daysDue: number | null
    docType: string | null
    dueAmount: Decimal | null
    exeId: string | null
    refNo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    customerId: number
    documentNo: number
    docDate: number
    docAmount: number
    daysDue: number
    docType: number
    dueAmount: number
    exeId: number
    refNo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    docAmount?: true
    daysDue?: true
    dueAmount?: true
  }

  export type InvoiceSumAggregateInputType = {
    docAmount?: true
    daysDue?: true
    dueAmount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    customerId?: true
    documentNo?: true
    docDate?: true
    docAmount?: true
    daysDue?: true
    docType?: true
    dueAmount?: true
    exeId?: true
    refNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    customerId?: true
    documentNo?: true
    docDate?: true
    docAmount?: true
    daysDue?: true
    docType?: true
    dueAmount?: true
    exeId?: true
    refNo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    customerId?: true
    documentNo?: true
    docDate?: true
    docAmount?: true
    daysDue?: true
    docType?: true
    dueAmount?: true
    exeId?: true
    refNo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    customerId: string
    documentNo: string
    docDate: Date
    docAmount: Decimal
    daysDue: number | null
    docType: string
    dueAmount: Decimal
    exeId: string | null
    refNo: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    documentNo?: boolean
    docDate?: boolean
    docAmount?: boolean
    daysDue?: boolean
    docType?: boolean
    dueAmount?: boolean
    exeId?: boolean
    refNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    documentNo?: boolean
    docDate?: boolean
    docAmount?: boolean
    daysDue?: boolean
    docType?: boolean
    dueAmount?: boolean
    exeId?: boolean
    refNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    customerId?: boolean
    documentNo?: boolean
    docDate?: boolean
    docAmount?: boolean
    daysDue?: boolean
    docType?: boolean
    dueAmount?: boolean
    exeId?: boolean
    refNo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      documentNo: string
      docDate: Date
      docAmount: Prisma.Decimal
      daysDue: number | null
      docType: string
      dueAmount: Prisma.Decimal
      exeId: string | null
      refNo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly customerId: FieldRef<"Invoice", 'String'>
    readonly documentNo: FieldRef<"Invoice", 'String'>
    readonly docDate: FieldRef<"Invoice", 'DateTime'>
    readonly docAmount: FieldRef<"Invoice", 'Decimal'>
    readonly daysDue: FieldRef<"Invoice", 'Int'>
    readonly docType: FieldRef<"Invoice", 'String'>
    readonly dueAmount: FieldRef<"Invoice", 'Decimal'>
    readonly exeId: FieldRef<"Invoice", 'String'>
    readonly refNo: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amtBc: Decimal | null
    remUnappl: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amtBc: Decimal | null
    remUnappl: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    transNo: string | null
    transDate: Date | null
    amtBc: Decimal | null
    remUnappl: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    transNo: string | null
    transDate: Date | null
    amtBc: Decimal | null
    remUnappl: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    customerId: number
    transNo: number
    transDate: number
    amtBc: number
    remUnappl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amtBc?: true
    remUnappl?: true
  }

  export type PaymentSumAggregateInputType = {
    amtBc?: true
    remUnappl?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    customerId?: true
    transNo?: true
    transDate?: true
    amtBc?: true
    remUnappl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    customerId?: true
    transNo?: true
    transDate?: true
    amtBc?: true
    remUnappl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    customerId?: true
    transNo?: true
    transDate?: true
    amtBc?: true
    remUnappl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    customerId: string
    transNo: string
    transDate: Date
    amtBc: Decimal
    remUnappl: Decimal
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    transNo?: boolean
    transDate?: boolean
    amtBc?: boolean
    remUnappl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    transNo?: boolean
    transDate?: boolean
    amtBc?: boolean
    remUnappl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    customerId?: boolean
    transNo?: boolean
    transDate?: boolean
    amtBc?: boolean
    remUnappl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      transNo: string
      transDate: Date
      amtBc: Prisma.Decimal
      remUnappl: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly customerId: FieldRef<"Payment", 'String'>
    readonly transNo: FieldRef<"Payment", 'String'>
    readonly transDate: FieldRef<"Payment", 'DateTime'>
    readonly amtBc: FieldRef<"Payment", 'Decimal'>
    readonly remUnappl: FieldRef<"Payment", 'Decimal'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentNumbering
   */

  export type AggregateDocumentNumbering = {
    _count: DocumentNumberingCountAggregateOutputType | null
    _avg: DocumentNumberingAvgAggregateOutputType | null
    _sum: DocumentNumberingSumAggregateOutputType | null
    _min: DocumentNumberingMinAggregateOutputType | null
    _max: DocumentNumberingMaxAggregateOutputType | null
  }

  export type DocumentNumberingAvgAggregateOutputType = {
    currentNumber: number | null
  }

  export type DocumentNumberingSumAggregateOutputType = {
    currentNumber: number | null
  }

  export type DocumentNumberingMinAggregateOutputType = {
    id: string | null
    salespersonId: string | null
    prefix: string | null
    currentNumber: number | null
    lastUpdated: Date | null
  }

  export type DocumentNumberingMaxAggregateOutputType = {
    id: string | null
    salespersonId: string | null
    prefix: string | null
    currentNumber: number | null
    lastUpdated: Date | null
  }

  export type DocumentNumberingCountAggregateOutputType = {
    id: number
    salespersonId: number
    prefix: number
    currentNumber: number
    lastUpdated: number
    _all: number
  }


  export type DocumentNumberingAvgAggregateInputType = {
    currentNumber?: true
  }

  export type DocumentNumberingSumAggregateInputType = {
    currentNumber?: true
  }

  export type DocumentNumberingMinAggregateInputType = {
    id?: true
    salespersonId?: true
    prefix?: true
    currentNumber?: true
    lastUpdated?: true
  }

  export type DocumentNumberingMaxAggregateInputType = {
    id?: true
    salespersonId?: true
    prefix?: true
    currentNumber?: true
    lastUpdated?: true
  }

  export type DocumentNumberingCountAggregateInputType = {
    id?: true
    salespersonId?: true
    prefix?: true
    currentNumber?: true
    lastUpdated?: true
    _all?: true
  }

  export type DocumentNumberingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentNumbering to aggregate.
     */
    where?: DocumentNumberingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentNumberings to fetch.
     */
    orderBy?: DocumentNumberingOrderByWithRelationInput | DocumentNumberingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentNumberingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentNumberings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentNumberings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentNumberings
    **/
    _count?: true | DocumentNumberingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentNumberingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentNumberingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentNumberingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentNumberingMaxAggregateInputType
  }

  export type GetDocumentNumberingAggregateType<T extends DocumentNumberingAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentNumbering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentNumbering[P]>
      : GetScalarType<T[P], AggregateDocumentNumbering[P]>
  }




  export type DocumentNumberingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentNumberingWhereInput
    orderBy?: DocumentNumberingOrderByWithAggregationInput | DocumentNumberingOrderByWithAggregationInput[]
    by: DocumentNumberingScalarFieldEnum[] | DocumentNumberingScalarFieldEnum
    having?: DocumentNumberingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentNumberingCountAggregateInputType | true
    _avg?: DocumentNumberingAvgAggregateInputType
    _sum?: DocumentNumberingSumAggregateInputType
    _min?: DocumentNumberingMinAggregateInputType
    _max?: DocumentNumberingMaxAggregateInputType
  }

  export type DocumentNumberingGroupByOutputType = {
    id: string
    salespersonId: string
    prefix: string
    currentNumber: number
    lastUpdated: Date
    _count: DocumentNumberingCountAggregateOutputType | null
    _avg: DocumentNumberingAvgAggregateOutputType | null
    _sum: DocumentNumberingSumAggregateOutputType | null
    _min: DocumentNumberingMinAggregateOutputType | null
    _max: DocumentNumberingMaxAggregateOutputType | null
  }

  type GetDocumentNumberingGroupByPayload<T extends DocumentNumberingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentNumberingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentNumberingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentNumberingGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentNumberingGroupByOutputType[P]>
        }
      >
    >


  export type DocumentNumberingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salespersonId?: boolean
    prefix?: boolean
    currentNumber?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentNumbering"]>

  export type DocumentNumberingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salespersonId?: boolean
    prefix?: boolean
    currentNumber?: boolean
    lastUpdated?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentNumbering"]>

  export type DocumentNumberingSelectScalar = {
    id?: boolean
    salespersonId?: boolean
    prefix?: boolean
    currentNumber?: boolean
    lastUpdated?: boolean
  }

  export type DocumentNumberingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DocumentNumberingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DocumentNumberingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentNumbering"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salespersonId: string
      prefix: string
      currentNumber: number
      lastUpdated: Date
    }, ExtArgs["result"]["documentNumbering"]>
    composites: {}
  }

  type DocumentNumberingGetPayload<S extends boolean | null | undefined | DocumentNumberingDefaultArgs> = $Result.GetResult<Prisma.$DocumentNumberingPayload, S>

  type DocumentNumberingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DocumentNumberingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DocumentNumberingCountAggregateInputType | true
    }

  export interface DocumentNumberingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentNumbering'], meta: { name: 'DocumentNumbering' } }
    /**
     * Find zero or one DocumentNumbering that matches the filter.
     * @param {DocumentNumberingFindUniqueArgs} args - Arguments to find a DocumentNumbering
     * @example
     * // Get one DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentNumberingFindUniqueArgs>(args: SelectSubset<T, DocumentNumberingFindUniqueArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DocumentNumbering that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DocumentNumberingFindUniqueOrThrowArgs} args - Arguments to find a DocumentNumbering
     * @example
     * // Get one DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentNumberingFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentNumberingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DocumentNumbering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingFindFirstArgs} args - Arguments to find a DocumentNumbering
     * @example
     * // Get one DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentNumberingFindFirstArgs>(args?: SelectSubset<T, DocumentNumberingFindFirstArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DocumentNumbering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingFindFirstOrThrowArgs} args - Arguments to find a DocumentNumbering
     * @example
     * // Get one DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentNumberingFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentNumberingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DocumentNumberings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentNumberings
     * const documentNumberings = await prisma.documentNumbering.findMany()
     * 
     * // Get first 10 DocumentNumberings
     * const documentNumberings = await prisma.documentNumbering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentNumberingWithIdOnly = await prisma.documentNumbering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentNumberingFindManyArgs>(args?: SelectSubset<T, DocumentNumberingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DocumentNumbering.
     * @param {DocumentNumberingCreateArgs} args - Arguments to create a DocumentNumbering.
     * @example
     * // Create one DocumentNumbering
     * const DocumentNumbering = await prisma.documentNumbering.create({
     *   data: {
     *     // ... data to create a DocumentNumbering
     *   }
     * })
     * 
     */
    create<T extends DocumentNumberingCreateArgs>(args: SelectSubset<T, DocumentNumberingCreateArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DocumentNumberings.
     * @param {DocumentNumberingCreateManyArgs} args - Arguments to create many DocumentNumberings.
     * @example
     * // Create many DocumentNumberings
     * const documentNumbering = await prisma.documentNumbering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentNumberingCreateManyArgs>(args?: SelectSubset<T, DocumentNumberingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentNumberings and returns the data saved in the database.
     * @param {DocumentNumberingCreateManyAndReturnArgs} args - Arguments to create many DocumentNumberings.
     * @example
     * // Create many DocumentNumberings
     * const documentNumbering = await prisma.documentNumbering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentNumberings and only return the `id`
     * const documentNumberingWithIdOnly = await prisma.documentNumbering.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentNumberingCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentNumberingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DocumentNumbering.
     * @param {DocumentNumberingDeleteArgs} args - Arguments to delete one DocumentNumbering.
     * @example
     * // Delete one DocumentNumbering
     * const DocumentNumbering = await prisma.documentNumbering.delete({
     *   where: {
     *     // ... filter to delete one DocumentNumbering
     *   }
     * })
     * 
     */
    delete<T extends DocumentNumberingDeleteArgs>(args: SelectSubset<T, DocumentNumberingDeleteArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DocumentNumbering.
     * @param {DocumentNumberingUpdateArgs} args - Arguments to update one DocumentNumbering.
     * @example
     * // Update one DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentNumberingUpdateArgs>(args: SelectSubset<T, DocumentNumberingUpdateArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DocumentNumberings.
     * @param {DocumentNumberingDeleteManyArgs} args - Arguments to filter DocumentNumberings to delete.
     * @example
     * // Delete a few DocumentNumberings
     * const { count } = await prisma.documentNumbering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentNumberingDeleteManyArgs>(args?: SelectSubset<T, DocumentNumberingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentNumberings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentNumberings
     * const documentNumbering = await prisma.documentNumbering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentNumberingUpdateManyArgs>(args: SelectSubset<T, DocumentNumberingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentNumbering.
     * @param {DocumentNumberingUpsertArgs} args - Arguments to update or create a DocumentNumbering.
     * @example
     * // Update or create a DocumentNumbering
     * const documentNumbering = await prisma.documentNumbering.upsert({
     *   create: {
     *     // ... data to create a DocumentNumbering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentNumbering we want to update
     *   }
     * })
     */
    upsert<T extends DocumentNumberingUpsertArgs>(args: SelectSubset<T, DocumentNumberingUpsertArgs<ExtArgs>>): Prisma__DocumentNumberingClient<$Result.GetResult<Prisma.$DocumentNumberingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DocumentNumberings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingCountArgs} args - Arguments to filter DocumentNumberings to count.
     * @example
     * // Count the number of DocumentNumberings
     * const count = await prisma.documentNumbering.count({
     *   where: {
     *     // ... the filter for the DocumentNumberings we want to count
     *   }
     * })
    **/
    count<T extends DocumentNumberingCountArgs>(
      args?: Subset<T, DocumentNumberingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentNumberingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentNumbering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentNumberingAggregateArgs>(args: Subset<T, DocumentNumberingAggregateArgs>): Prisma.PrismaPromise<GetDocumentNumberingAggregateType<T>>

    /**
     * Group by DocumentNumbering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentNumberingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentNumberingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentNumberingGroupByArgs['orderBy'] }
        : { orderBy?: DocumentNumberingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentNumberingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentNumberingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentNumbering model
   */
  readonly fields: DocumentNumberingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentNumbering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentNumberingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentNumbering model
   */ 
  interface DocumentNumberingFieldRefs {
    readonly id: FieldRef<"DocumentNumbering", 'String'>
    readonly salespersonId: FieldRef<"DocumentNumbering", 'String'>
    readonly prefix: FieldRef<"DocumentNumbering", 'String'>
    readonly currentNumber: FieldRef<"DocumentNumbering", 'Int'>
    readonly lastUpdated: FieldRef<"DocumentNumbering", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentNumbering findUnique
   */
  export type DocumentNumberingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter, which DocumentNumbering to fetch.
     */
    where: DocumentNumberingWhereUniqueInput
  }

  /**
   * DocumentNumbering findUniqueOrThrow
   */
  export type DocumentNumberingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter, which DocumentNumbering to fetch.
     */
    where: DocumentNumberingWhereUniqueInput
  }

  /**
   * DocumentNumbering findFirst
   */
  export type DocumentNumberingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter, which DocumentNumbering to fetch.
     */
    where?: DocumentNumberingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentNumberings to fetch.
     */
    orderBy?: DocumentNumberingOrderByWithRelationInput | DocumentNumberingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentNumberings.
     */
    cursor?: DocumentNumberingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentNumberings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentNumberings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentNumberings.
     */
    distinct?: DocumentNumberingScalarFieldEnum | DocumentNumberingScalarFieldEnum[]
  }

  /**
   * DocumentNumbering findFirstOrThrow
   */
  export type DocumentNumberingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter, which DocumentNumbering to fetch.
     */
    where?: DocumentNumberingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentNumberings to fetch.
     */
    orderBy?: DocumentNumberingOrderByWithRelationInput | DocumentNumberingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentNumberings.
     */
    cursor?: DocumentNumberingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentNumberings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentNumberings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentNumberings.
     */
    distinct?: DocumentNumberingScalarFieldEnum | DocumentNumberingScalarFieldEnum[]
  }

  /**
   * DocumentNumbering findMany
   */
  export type DocumentNumberingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter, which DocumentNumberings to fetch.
     */
    where?: DocumentNumberingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentNumberings to fetch.
     */
    orderBy?: DocumentNumberingOrderByWithRelationInput | DocumentNumberingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentNumberings.
     */
    cursor?: DocumentNumberingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentNumberings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentNumberings.
     */
    skip?: number
    distinct?: DocumentNumberingScalarFieldEnum | DocumentNumberingScalarFieldEnum[]
  }

  /**
   * DocumentNumbering create
   */
  export type DocumentNumberingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentNumbering.
     */
    data: XOR<DocumentNumberingCreateInput, DocumentNumberingUncheckedCreateInput>
  }

  /**
   * DocumentNumbering createMany
   */
  export type DocumentNumberingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentNumberings.
     */
    data: DocumentNumberingCreateManyInput | DocumentNumberingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentNumbering createManyAndReturn
   */
  export type DocumentNumberingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DocumentNumberings.
     */
    data: DocumentNumberingCreateManyInput | DocumentNumberingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentNumbering update
   */
  export type DocumentNumberingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentNumbering.
     */
    data: XOR<DocumentNumberingUpdateInput, DocumentNumberingUncheckedUpdateInput>
    /**
     * Choose, which DocumentNumbering to update.
     */
    where: DocumentNumberingWhereUniqueInput
  }

  /**
   * DocumentNumbering updateMany
   */
  export type DocumentNumberingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentNumberings.
     */
    data: XOR<DocumentNumberingUpdateManyMutationInput, DocumentNumberingUncheckedUpdateManyInput>
    /**
     * Filter which DocumentNumberings to update
     */
    where?: DocumentNumberingWhereInput
  }

  /**
   * DocumentNumbering upsert
   */
  export type DocumentNumberingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentNumbering to update in case it exists.
     */
    where: DocumentNumberingWhereUniqueInput
    /**
     * In case the DocumentNumbering found by the `where` argument doesn't exist, create a new DocumentNumbering with this data.
     */
    create: XOR<DocumentNumberingCreateInput, DocumentNumberingUncheckedCreateInput>
    /**
     * In case the DocumentNumbering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentNumberingUpdateInput, DocumentNumberingUncheckedUpdateInput>
  }

  /**
   * DocumentNumbering delete
   */
  export type DocumentNumberingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
    /**
     * Filter which DocumentNumbering to delete.
     */
    where: DocumentNumberingWhereUniqueInput
  }

  /**
   * DocumentNumbering deleteMany
   */
  export type DocumentNumberingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentNumberings to delete
     */
    where?: DocumentNumberingWhereInput
  }

  /**
   * DocumentNumbering without action
   */
  export type DocumentNumberingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentNumbering
     */
    select?: DocumentNumberingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentNumberingInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserLocationSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type UserLocationMinAggregateOutputType = {
    id: string | null
    userCode: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    timestamp: Date | null
    type: string | null
    createdAt: Date | null
  }

  export type UserLocationMaxAggregateOutputType = {
    id: string | null
    userCode: string | null
    latitude: number | null
    longitude: number | null
    description: string | null
    timestamp: Date | null
    type: string | null
    createdAt: Date | null
  }

  export type UserLocationCountAggregateOutputType = {
    id: number
    userCode: number
    latitude: number
    longitude: number
    description: number
    timestamp: number
    type: number
    createdAt: number
    _all: number
  }


  export type UserLocationAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserLocationSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type UserLocationMinAggregateInputType = {
    id?: true
    userCode?: true
    latitude?: true
    longitude?: true
    description?: true
    timestamp?: true
    type?: true
    createdAt?: true
  }

  export type UserLocationMaxAggregateInputType = {
    id?: true
    userCode?: true
    latitude?: true
    longitude?: true
    description?: true
    timestamp?: true
    type?: true
    createdAt?: true
  }

  export type UserLocationCountAggregateInputType = {
    id?: true
    userCode?: true
    latitude?: true
    longitude?: true
    description?: true
    timestamp?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _avg?: UserLocationAvgAggregateInputType
    _sum?: UserLocationSumAggregateInputType
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    id: string
    userCode: string
    latitude: number
    longitude: number
    description: string | null
    timestamp: Date
    type: string
    createdAt: Date
    _count: UserLocationCountAggregateOutputType | null
    _avg: UserLocationAvgAggregateOutputType | null
    _sum: UserLocationSumAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCode?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userCode?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectScalar = {
    id?: boolean
    userCode?: boolean
    latitude?: boolean
    longitude?: boolean
    description?: boolean
    timestamp?: boolean
    type?: boolean
    createdAt?: boolean
  }


  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userCode: string
      latitude: number
      longitude: number
      description: string | null
      timestamp: Date
      type: string
      createdAt: Date
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocations and returns the data saved in the database.
     * @param {UserLocationCreateManyAndReturnArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserLocation model
   */ 
  interface UserLocationFieldRefs {
    readonly id: FieldRef<"UserLocation", 'String'>
    readonly userCode: FieldRef<"UserLocation", 'String'>
    readonly latitude: FieldRef<"UserLocation", 'Float'>
    readonly longitude: FieldRef<"UserLocation", 'Float'>
    readonly description: FieldRef<"UserLocation", 'String'>
    readonly timestamp: FieldRef<"UserLocation", 'DateTime'>
    readonly type: FieldRef<"UserLocation", 'String'>
    readonly createdAt: FieldRef<"UserLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation createManyAndReturn
   */
  export type UserLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
  }


  /**
   * Model SalesReport
   */

  export type AggregateSalesReport = {
    _count: SalesReportCountAggregateOutputType | null
    _avg: SalesReportAvgAggregateOutputType | null
    _sum: SalesReportSumAggregateOutputType | null
    _min: SalesReportMinAggregateOutputType | null
    _max: SalesReportMaxAggregateOutputType | null
  }

  export type SalesReportAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalSales: Decimal | null
    discount: Decimal | null
    netSales: Decimal | null
  }

  export type SalesReportSumAggregateOutputType = {
    quantity: number | null
    unitPrice: Decimal | null
    totalSales: Decimal | null
    discount: Decimal | null
    netSales: Decimal | null
  }

  export type SalesReportMinAggregateOutputType = {
    id: string | null
    date: Date | null
    customerId: string | null
    customerName: string | null
    city: string | null
    province: string | null
    productId: string | null
    productName: string | null
    category: string | null
    subCategory: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalSales: Decimal | null
    discount: Decimal | null
    netSales: Decimal | null
    createdAt: Date | null
  }

  export type SalesReportMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    customerId: string | null
    customerName: string | null
    city: string | null
    province: string | null
    productId: string | null
    productName: string | null
    category: string | null
    subCategory: string | null
    quantity: number | null
    unitPrice: Decimal | null
    totalSales: Decimal | null
    discount: Decimal | null
    netSales: Decimal | null
    createdAt: Date | null
  }

  export type SalesReportCountAggregateOutputType = {
    id: number
    date: number
    customerId: number
    customerName: number
    city: number
    province: number
    productId: number
    productName: number
    category: number
    subCategory: number
    quantity: number
    unitPrice: number
    totalSales: number
    discount: number
    netSales: number
    createdAt: number
    _all: number
  }


  export type SalesReportAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalSales?: true
    discount?: true
    netSales?: true
  }

  export type SalesReportSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    totalSales?: true
    discount?: true
    netSales?: true
  }

  export type SalesReportMinAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    customerName?: true
    city?: true
    province?: true
    productId?: true
    productName?: true
    category?: true
    subCategory?: true
    quantity?: true
    unitPrice?: true
    totalSales?: true
    discount?: true
    netSales?: true
    createdAt?: true
  }

  export type SalesReportMaxAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    customerName?: true
    city?: true
    province?: true
    productId?: true
    productName?: true
    category?: true
    subCategory?: true
    quantity?: true
    unitPrice?: true
    totalSales?: true
    discount?: true
    netSales?: true
    createdAt?: true
  }

  export type SalesReportCountAggregateInputType = {
    id?: true
    date?: true
    customerId?: true
    customerName?: true
    city?: true
    province?: true
    productId?: true
    productName?: true
    category?: true
    subCategory?: true
    quantity?: true
    unitPrice?: true
    totalSales?: true
    discount?: true
    netSales?: true
    createdAt?: true
    _all?: true
  }

  export type SalesReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesReport to aggregate.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesReports
    **/
    _count?: true | SalesReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesReportMaxAggregateInputType
  }

  export type GetSalesReportAggregateType<T extends SalesReportAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesReport[P]>
      : GetScalarType<T[P], AggregateSalesReport[P]>
  }




  export type SalesReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesReportWhereInput
    orderBy?: SalesReportOrderByWithAggregationInput | SalesReportOrderByWithAggregationInput[]
    by: SalesReportScalarFieldEnum[] | SalesReportScalarFieldEnum
    having?: SalesReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesReportCountAggregateInputType | true
    _avg?: SalesReportAvgAggregateInputType
    _sum?: SalesReportSumAggregateInputType
    _min?: SalesReportMinAggregateInputType
    _max?: SalesReportMaxAggregateInputType
  }

  export type SalesReportGroupByOutputType = {
    id: string
    date: Date
    customerId: string
    customerName: string
    city: string | null
    province: string | null
    productId: string | null
    productName: string | null
    category: string | null
    subCategory: string | null
    quantity: number
    unitPrice: Decimal
    totalSales: Decimal
    discount: Decimal
    netSales: Decimal
    createdAt: Date
    _count: SalesReportCountAggregateOutputType | null
    _avg: SalesReportAvgAggregateOutputType | null
    _sum: SalesReportSumAggregateOutputType | null
    _min: SalesReportMinAggregateOutputType | null
    _max: SalesReportMaxAggregateOutputType | null
  }

  type GetSalesReportGroupByPayload<T extends SalesReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesReportGroupByOutputType[P]>
            : GetScalarType<T[P], SalesReportGroupByOutputType[P]>
        }
      >
    >


  export type SalesReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    customerName?: boolean
    city?: boolean
    province?: boolean
    productId?: boolean
    productName?: boolean
    category?: boolean
    subCategory?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalSales?: boolean
    discount?: boolean
    netSales?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salesReport"]>

  export type SalesReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    customerId?: boolean
    customerName?: boolean
    city?: boolean
    province?: boolean
    productId?: boolean
    productName?: boolean
    category?: boolean
    subCategory?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalSales?: boolean
    discount?: boolean
    netSales?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salesReport"]>

  export type SalesReportSelectScalar = {
    id?: boolean
    date?: boolean
    customerId?: boolean
    customerName?: boolean
    city?: boolean
    province?: boolean
    productId?: boolean
    productName?: boolean
    category?: boolean
    subCategory?: boolean
    quantity?: boolean
    unitPrice?: boolean
    totalSales?: boolean
    discount?: boolean
    netSales?: boolean
    createdAt?: boolean
  }


  export type $SalesReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      customerId: string
      customerName: string
      city: string | null
      province: string | null
      productId: string | null
      productName: string | null
      category: string | null
      subCategory: string | null
      quantity: number
      unitPrice: Prisma.Decimal
      totalSales: Prisma.Decimal
      discount: Prisma.Decimal
      netSales: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["salesReport"]>
    composites: {}
  }

  type SalesReportGetPayload<S extends boolean | null | undefined | SalesReportDefaultArgs> = $Result.GetResult<Prisma.$SalesReportPayload, S>

  type SalesReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesReportCountAggregateInputType | true
    }

  export interface SalesReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesReport'], meta: { name: 'SalesReport' } }
    /**
     * Find zero or one SalesReport that matches the filter.
     * @param {SalesReportFindUniqueArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesReportFindUniqueArgs>(args: SelectSubset<T, SalesReportFindUniqueArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesReportFindUniqueOrThrowArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesReportFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindFirstArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesReportFindFirstArgs>(args?: SelectSubset<T, SalesReportFindFirstArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindFirstOrThrowArgs} args - Arguments to find a SalesReport
     * @example
     * // Get one SalesReport
     * const salesReport = await prisma.salesReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesReportFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesReports
     * const salesReports = await prisma.salesReport.findMany()
     * 
     * // Get first 10 SalesReports
     * const salesReports = await prisma.salesReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesReportWithIdOnly = await prisma.salesReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesReportFindManyArgs>(args?: SelectSubset<T, SalesReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesReport.
     * @param {SalesReportCreateArgs} args - Arguments to create a SalesReport.
     * @example
     * // Create one SalesReport
     * const SalesReport = await prisma.salesReport.create({
     *   data: {
     *     // ... data to create a SalesReport
     *   }
     * })
     * 
     */
    create<T extends SalesReportCreateArgs>(args: SelectSubset<T, SalesReportCreateArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesReports.
     * @param {SalesReportCreateManyArgs} args - Arguments to create many SalesReports.
     * @example
     * // Create many SalesReports
     * const salesReport = await prisma.salesReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesReportCreateManyArgs>(args?: SelectSubset<T, SalesReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesReports and returns the data saved in the database.
     * @param {SalesReportCreateManyAndReturnArgs} args - Arguments to create many SalesReports.
     * @example
     * // Create many SalesReports
     * const salesReport = await prisma.salesReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesReports and only return the `id`
     * const salesReportWithIdOnly = await prisma.salesReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesReportCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesReport.
     * @param {SalesReportDeleteArgs} args - Arguments to delete one SalesReport.
     * @example
     * // Delete one SalesReport
     * const SalesReport = await prisma.salesReport.delete({
     *   where: {
     *     // ... filter to delete one SalesReport
     *   }
     * })
     * 
     */
    delete<T extends SalesReportDeleteArgs>(args: SelectSubset<T, SalesReportDeleteArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesReport.
     * @param {SalesReportUpdateArgs} args - Arguments to update one SalesReport.
     * @example
     * // Update one SalesReport
     * const salesReport = await prisma.salesReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesReportUpdateArgs>(args: SelectSubset<T, SalesReportUpdateArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesReports.
     * @param {SalesReportDeleteManyArgs} args - Arguments to filter SalesReports to delete.
     * @example
     * // Delete a few SalesReports
     * const { count } = await prisma.salesReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesReportDeleteManyArgs>(args?: SelectSubset<T, SalesReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesReports
     * const salesReport = await prisma.salesReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesReportUpdateManyArgs>(args: SelectSubset<T, SalesReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesReport.
     * @param {SalesReportUpsertArgs} args - Arguments to update or create a SalesReport.
     * @example
     * // Update or create a SalesReport
     * const salesReport = await prisma.salesReport.upsert({
     *   create: {
     *     // ... data to create a SalesReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesReport we want to update
     *   }
     * })
     */
    upsert<T extends SalesReportUpsertArgs>(args: SelectSubset<T, SalesReportUpsertArgs<ExtArgs>>): Prisma__SalesReportClient<$Result.GetResult<Prisma.$SalesReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportCountArgs} args - Arguments to filter SalesReports to count.
     * @example
     * // Count the number of SalesReports
     * const count = await prisma.salesReport.count({
     *   where: {
     *     // ... the filter for the SalesReports we want to count
     *   }
     * })
    **/
    count<T extends SalesReportCountArgs>(
      args?: Subset<T, SalesReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesReportAggregateArgs>(args: Subset<T, SalesReportAggregateArgs>): Prisma.PrismaPromise<GetSalesReportAggregateType<T>>

    /**
     * Group by SalesReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesReportGroupByArgs['orderBy'] }
        : { orderBy?: SalesReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesReport model
   */
  readonly fields: SalesReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesReport model
   */ 
  interface SalesReportFieldRefs {
    readonly id: FieldRef<"SalesReport", 'String'>
    readonly date: FieldRef<"SalesReport", 'DateTime'>
    readonly customerId: FieldRef<"SalesReport", 'String'>
    readonly customerName: FieldRef<"SalesReport", 'String'>
    readonly city: FieldRef<"SalesReport", 'String'>
    readonly province: FieldRef<"SalesReport", 'String'>
    readonly productId: FieldRef<"SalesReport", 'String'>
    readonly productName: FieldRef<"SalesReport", 'String'>
    readonly category: FieldRef<"SalesReport", 'String'>
    readonly subCategory: FieldRef<"SalesReport", 'String'>
    readonly quantity: FieldRef<"SalesReport", 'Int'>
    readonly unitPrice: FieldRef<"SalesReport", 'Decimal'>
    readonly totalSales: FieldRef<"SalesReport", 'Decimal'>
    readonly discount: FieldRef<"SalesReport", 'Decimal'>
    readonly netSales: FieldRef<"SalesReport", 'Decimal'>
    readonly createdAt: FieldRef<"SalesReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesReport findUnique
   */
  export type SalesReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport findUniqueOrThrow
   */
  export type SalesReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport findFirst
   */
  export type SalesReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesReports.
     */
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport findFirstOrThrow
   */
  export type SalesReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter, which SalesReport to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesReports.
     */
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport findMany
   */
  export type SalesReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter, which SalesReports to fetch.
     */
    where?: SalesReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesReports to fetch.
     */
    orderBy?: SalesReportOrderByWithRelationInput | SalesReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesReports.
     */
    cursor?: SalesReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesReports.
     */
    skip?: number
    distinct?: SalesReportScalarFieldEnum | SalesReportScalarFieldEnum[]
  }

  /**
   * SalesReport create
   */
  export type SalesReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * The data needed to create a SalesReport.
     */
    data: XOR<SalesReportCreateInput, SalesReportUncheckedCreateInput>
  }

  /**
   * SalesReport createMany
   */
  export type SalesReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesReports.
     */
    data: SalesReportCreateManyInput | SalesReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesReport createManyAndReturn
   */
  export type SalesReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesReports.
     */
    data: SalesReportCreateManyInput | SalesReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesReport update
   */
  export type SalesReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * The data needed to update a SalesReport.
     */
    data: XOR<SalesReportUpdateInput, SalesReportUncheckedUpdateInput>
    /**
     * Choose, which SalesReport to update.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport updateMany
   */
  export type SalesReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesReports.
     */
    data: XOR<SalesReportUpdateManyMutationInput, SalesReportUncheckedUpdateManyInput>
    /**
     * Filter which SalesReports to update
     */
    where?: SalesReportWhereInput
  }

  /**
   * SalesReport upsert
   */
  export type SalesReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * The filter to search for the SalesReport to update in case it exists.
     */
    where: SalesReportWhereUniqueInput
    /**
     * In case the SalesReport found by the `where` argument doesn't exist, create a new SalesReport with this data.
     */
    create: XOR<SalesReportCreateInput, SalesReportUncheckedCreateInput>
    /**
     * In case the SalesReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesReportUpdateInput, SalesReportUncheckedUpdateInput>
  }

  /**
   * SalesReport delete
   */
  export type SalesReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
    /**
     * Filter which SalesReport to delete.
     */
    where: SalesReportWhereUniqueInput
  }

  /**
   * SalesReport deleteMany
   */
  export type SalesReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesReports to delete
     */
    where?: SalesReportWhereInput
  }

  /**
   * SalesReport without action
   */
  export type SalesReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesReport
     */
    select?: SalesReportSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    exeId: 'exeId',
    companyId: 'companyId',
    password: 'password',
    leader: 'leader',
    areaCode: 'areaCode',
    exeName: 'exeName',
    exeNameOrig: 'exeNameOrig',
    role: 'role',
    areaName: 'areaName',
    region: 'region',
    subdivisionCode: 'subdivisionCode',
    imageLocation: 'imageLocation',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    exeId: 'exeId',
    customerName: 'customerName',
    addr1: 'addr1',
    addr2: 'addr2',
    addr3: 'addr3',
    city: 'city',
    route: 'route',
    phone1: 'phone1',
    phone2: 'phone2',
    phone3: 'phone3',
    additional: 'additional',
    isActive: 'isActive',
    grade: 'grade',
    contactName: 'contactName',
    contactPhone: 'contactPhone',
    startDate: 'startDate',
    creditLimit: 'creditLimit',
    creditPeriod: 'creditPeriod',
    comments: 'comments',
    lastInvoiceDate: 'lastInvoiceDate',
    lastInvoiceAmt: 'lastInvoiceAmt',
    lastPaymentDate: 'lastPaymentDate',
    lastPaymentAmt: 'lastPaymentAmt',
    isInactive: 'isInactive',
    isHold: 'isHold',
    followupStatus: 'followupStatus',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    itemCode: 'itemCode',
    description: 'description',
    category: 'category',
    subCategory: 'subCategory',
    categoryCode: 'categoryCode',
    uom: 'uom',
    price: 'price',
    qty: 'qty',
    imageUrl: 'imageUrl',
    discountAmount: 'discountAmount',
    discountPercentage: 'discountPercentage',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    customerId: 'customerId',
    salespersonId: 'salespersonId',
    status: 'status',
    isDraft: 'isDraft',
    errorMessage: 'errorMessage',
    jsonPayload: 'jsonPayload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    discount: 'discount',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    documentNo: 'documentNo',
    docDate: 'docDate',
    docAmount: 'docAmount',
    daysDue: 'daysDue',
    docType: 'docType',
    dueAmount: 'dueAmount',
    exeId: 'exeId',
    refNo: 'refNo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    transNo: 'transNo',
    transDate: 'transDate',
    amtBc: 'amtBc',
    remUnappl: 'remUnappl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const DocumentNumberingScalarFieldEnum: {
    id: 'id',
    salespersonId: 'salespersonId',
    prefix: 'prefix',
    currentNumber: 'currentNumber',
    lastUpdated: 'lastUpdated'
  };

  export type DocumentNumberingScalarFieldEnum = (typeof DocumentNumberingScalarFieldEnum)[keyof typeof DocumentNumberingScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    id: 'id',
    userCode: 'userCode',
    latitude: 'latitude',
    longitude: 'longitude',
    description: 'description',
    timestamp: 'timestamp',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


  export const SalesReportScalarFieldEnum: {
    id: 'id',
    date: 'date',
    customerId: 'customerId',
    customerName: 'customerName',
    city: 'city',
    province: 'province',
    productId: 'productId',
    productName: 'productName',
    category: 'category',
    subCategory: 'subCategory',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalSales: 'totalSales',
    discount: 'discount',
    netSales: 'netSales',
    createdAt: 'createdAt'
  };

  export type SalesReportScalarFieldEnum = (typeof SalesReportScalarFieldEnum)[keyof typeof SalesReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    exeId?: StringFilter<"User"> | string
    companyId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    leader?: StringNullableFilter<"User"> | string | null
    areaCode?: StringNullableFilter<"User"> | string | null
    exeName?: StringNullableFilter<"User"> | string | null
    exeNameOrig?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    areaName?: StringNullableFilter<"User"> | string | null
    region?: StringNullableFilter<"User"> | string | null
    subdivisionCode?: StringNullableFilter<"User"> | string | null
    imageLocation?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    customers?: CustomerListRelationFilter
    documentNumbering?: XOR<DocumentNumberingNullableRelationFilter, DocumentNumberingWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    exeId?: SortOrder
    companyId?: SortOrder
    password?: SortOrder
    leader?: SortOrderInput | SortOrder
    areaCode?: SortOrderInput | SortOrder
    exeName?: SortOrderInput | SortOrder
    exeNameOrig?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    areaName?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    subdivisionCode?: SortOrderInput | SortOrder
    imageLocation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    documentNumbering?: DocumentNumberingOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    exeId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    companyId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    leader?: StringNullableFilter<"User"> | string | null
    areaCode?: StringNullableFilter<"User"> | string | null
    exeName?: StringNullableFilter<"User"> | string | null
    exeNameOrig?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    areaName?: StringNullableFilter<"User"> | string | null
    region?: StringNullableFilter<"User"> | string | null
    subdivisionCode?: StringNullableFilter<"User"> | string | null
    imageLocation?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    customers?: CustomerListRelationFilter
    documentNumbering?: XOR<DocumentNumberingNullableRelationFilter, DocumentNumberingWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "exeId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    exeId?: SortOrder
    companyId?: SortOrder
    password?: SortOrder
    leader?: SortOrderInput | SortOrder
    areaCode?: SortOrderInput | SortOrder
    exeName?: SortOrderInput | SortOrder
    exeNameOrig?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    areaName?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    subdivisionCode?: SortOrderInput | SortOrder
    imageLocation?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    exeId?: StringWithAggregatesFilter<"User"> | string
    companyId?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    leader?: StringNullableWithAggregatesFilter<"User"> | string | null
    areaCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    exeName?: StringNullableWithAggregatesFilter<"User"> | string | null
    exeNameOrig?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    areaName?: StringNullableWithAggregatesFilter<"User"> | string | null
    region?: StringNullableWithAggregatesFilter<"User"> | string | null
    subdivisionCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    imageLocation?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    customerId?: StringFilter<"Customer"> | string
    exeId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    addr1?: StringNullableFilter<"Customer"> | string | null
    addr2?: StringNullableFilter<"Customer"> | string | null
    addr3?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    route?: StringNullableFilter<"Customer"> | string | null
    phone1?: StringNullableFilter<"Customer"> | string | null
    phone2?: StringNullableFilter<"Customer"> | string | null
    phone3?: StringNullableFilter<"Customer"> | string | null
    additional?: StringNullableFilter<"Customer"> | string | null
    isActive?: BoolFilter<"Customer"> | boolean
    grade?: StringNullableFilter<"Customer"> | string | null
    contactName?: StringNullableFilter<"Customer"> | string | null
    contactPhone?: StringNullableFilter<"Customer"> | string | null
    startDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    creditLimit?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: IntNullableFilter<"Customer"> | number | null
    comments?: StringNullableFilter<"Customer"> | string | null
    lastInvoiceDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastInvoiceAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastPaymentAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFilter<"Customer"> | boolean
    isHold?: BoolFilter<"Customer"> | boolean
    followupStatus?: StringNullableFilter<"Customer"> | string | null
    location?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    exeId?: SortOrder
    customerName?: SortOrder
    addr1?: SortOrderInput | SortOrder
    addr2?: SortOrderInput | SortOrder
    addr3?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    phone3?: SortOrderInput | SortOrder
    additional?: SortOrderInput | SortOrder
    isActive?: SortOrder
    grade?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    creditPeriod?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    lastInvoiceDate?: SortOrderInput | SortOrder
    lastInvoiceAmt?: SortOrderInput | SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    lastPaymentAmt?: SortOrderInput | SortOrder
    isInactive?: SortOrder
    isHold?: SortOrder
    followupStatus?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    exeId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    addr1?: StringNullableFilter<"Customer"> | string | null
    addr2?: StringNullableFilter<"Customer"> | string | null
    addr3?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    route?: StringNullableFilter<"Customer"> | string | null
    phone1?: StringNullableFilter<"Customer"> | string | null
    phone2?: StringNullableFilter<"Customer"> | string | null
    phone3?: StringNullableFilter<"Customer"> | string | null
    additional?: StringNullableFilter<"Customer"> | string | null
    isActive?: BoolFilter<"Customer"> | boolean
    grade?: StringNullableFilter<"Customer"> | string | null
    contactName?: StringNullableFilter<"Customer"> | string | null
    contactPhone?: StringNullableFilter<"Customer"> | string | null
    startDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    creditLimit?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: IntNullableFilter<"Customer"> | number | null
    comments?: StringNullableFilter<"Customer"> | string | null
    lastInvoiceDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastInvoiceAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastPaymentAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFilter<"Customer"> | boolean
    isHold?: BoolFilter<"Customer"> | boolean
    followupStatus?: StringNullableFilter<"Customer"> | string | null
    location?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    invoices?: InvoiceListRelationFilter
    orders?: OrderListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id" | "customerId">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    exeId?: SortOrder
    customerName?: SortOrder
    addr1?: SortOrderInput | SortOrder
    addr2?: SortOrderInput | SortOrder
    addr3?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    phone1?: SortOrderInput | SortOrder
    phone2?: SortOrderInput | SortOrder
    phone3?: SortOrderInput | SortOrder
    additional?: SortOrderInput | SortOrder
    isActive?: SortOrder
    grade?: SortOrderInput | SortOrder
    contactName?: SortOrderInput | SortOrder
    contactPhone?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    creditLimit?: SortOrderInput | SortOrder
    creditPeriod?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    lastInvoiceDate?: SortOrderInput | SortOrder
    lastInvoiceAmt?: SortOrderInput | SortOrder
    lastPaymentDate?: SortOrderInput | SortOrder
    lastPaymentAmt?: SortOrderInput | SortOrder
    isInactive?: SortOrder
    isHold?: SortOrder
    followupStatus?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    customerId?: StringWithAggregatesFilter<"Customer"> | string
    exeId?: StringWithAggregatesFilter<"Customer"> | string
    customerName?: StringWithAggregatesFilter<"Customer"> | string
    addr1?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    addr2?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    addr3?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    route?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone1?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone2?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone3?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    additional?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    isActive?: BoolWithAggregatesFilter<"Customer"> | boolean
    grade?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contactName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    contactPhone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    creditLimit?: DecimalNullableWithAggregatesFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: IntNullableWithAggregatesFilter<"Customer"> | number | null
    comments?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    lastInvoiceDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    lastInvoiceAmt?: DecimalNullableWithAggregatesFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    lastPaymentAmt?: DecimalNullableWithAggregatesFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolWithAggregatesFilter<"Customer"> | boolean
    isHold?: BoolWithAggregatesFilter<"Customer"> | boolean
    followupStatus?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    location?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    itemCode?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    subCategory?: StringNullableFilter<"Product"> | string | null
    categoryCode?: StringNullableFilter<"Product"> | string | null
    uom?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    discountAmount?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    categoryCode?: SortOrderInput | SortOrder
    uom?: SortOrderInput | SortOrder
    price?: SortOrder
    qty?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    itemCode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringFilter<"Product"> | string
    category?: StringNullableFilter<"Product"> | string | null
    subCategory?: StringNullableFilter<"Product"> | string | null
    categoryCode?: StringNullableFilter<"Product"> | string | null
    uom?: StringNullableFilter<"Product"> | string | null
    price?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    qty?: IntFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    discountAmount?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    orderItems?: OrderItemListRelationFilter
  }, "id" | "itemCode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    itemCode?: SortOrder
    description?: SortOrder
    category?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    categoryCode?: SortOrderInput | SortOrder
    uom?: SortOrderInput | SortOrder
    price?: SortOrder
    qty?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    itemCode?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    subCategory?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryCode?: StringNullableWithAggregatesFilter<"Product"> | string | null
    uom?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    qty?: IntWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    discountAmount?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalWithAggregatesFilter<"Product"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    salespersonId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    isDraft?: BoolFilter<"Order"> | boolean
    errorMessage?: StringNullableFilter<"Order"> | string | null
    jsonPayload?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderItemListRelationFilter
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    salespersonId?: SortOrder
    status?: SortOrder
    isDraft?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    jsonPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderItems?: OrderItemOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: StringFilter<"Order"> | string
    salespersonId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    isDraft?: BoolFilter<"Order"> | boolean
    errorMessage?: StringNullableFilter<"Order"> | string | null
    jsonPayload?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    orderItems?: OrderItemListRelationFilter
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    salespersonId?: SortOrder
    status?: SortOrder
    isDraft?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    jsonPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringWithAggregatesFilter<"Order"> | string
    salespersonId?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    isDraft?: BoolWithAggregatesFilter<"Order"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"Order"> | string | null
    jsonPayload?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalWithAggregatesFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    documentNo?: StringFilter<"Invoice"> | string
    docDate?: DateTimeFilter<"Invoice"> | Date | string
    docAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    daysDue?: IntNullableFilter<"Invoice"> | number | null
    docType?: StringFilter<"Invoice"> | string
    dueAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    exeId?: StringNullableFilter<"Invoice"> | string | null
    refNo?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    documentNo?: SortOrder
    docDate?: SortOrder
    docAmount?: SortOrder
    daysDue?: SortOrderInput | SortOrder
    docType?: SortOrder
    dueAmount?: SortOrder
    exeId?: SortOrderInput | SortOrder
    refNo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentNo?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    customerId?: StringFilter<"Invoice"> | string
    docDate?: DateTimeFilter<"Invoice"> | Date | string
    docAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    daysDue?: IntNullableFilter<"Invoice"> | number | null
    docType?: StringFilter<"Invoice"> | string
    dueAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    exeId?: StringNullableFilter<"Invoice"> | string | null
    refNo?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id" | "documentNo">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    documentNo?: SortOrder
    docDate?: SortOrder
    docAmount?: SortOrder
    daysDue?: SortOrderInput | SortOrder
    docType?: SortOrder
    dueAmount?: SortOrder
    exeId?: SortOrderInput | SortOrder
    refNo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    customerId?: StringWithAggregatesFilter<"Invoice"> | string
    documentNo?: StringWithAggregatesFilter<"Invoice"> | string
    docDate?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    docAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    daysDue?: IntNullableWithAggregatesFilter<"Invoice"> | number | null
    docType?: StringWithAggregatesFilter<"Invoice"> | string
    dueAmount?: DecimalWithAggregatesFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    exeId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    refNo?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    transNo?: StringFilter<"Payment"> | string
    transDate?: DateTimeFilter<"Payment"> | Date | string
    amtBc?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    transNo?: SortOrder
    transDate?: SortOrder
    amtBc?: SortOrder
    remUnappl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transNo?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    customerId?: StringFilter<"Payment"> | string
    transDate?: DateTimeFilter<"Payment"> | Date | string
    amtBc?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
  }, "id" | "transNo">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    transNo?: SortOrder
    transDate?: SortOrder
    amtBc?: SortOrder
    remUnappl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    customerId?: StringWithAggregatesFilter<"Payment"> | string
    transNo?: StringWithAggregatesFilter<"Payment"> | string
    transDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    amtBc?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type DocumentNumberingWhereInput = {
    AND?: DocumentNumberingWhereInput | DocumentNumberingWhereInput[]
    OR?: DocumentNumberingWhereInput[]
    NOT?: DocumentNumberingWhereInput | DocumentNumberingWhereInput[]
    id?: StringFilter<"DocumentNumbering"> | string
    salespersonId?: StringFilter<"DocumentNumbering"> | string
    prefix?: StringFilter<"DocumentNumbering"> | string
    currentNumber?: IntFilter<"DocumentNumbering"> | number
    lastUpdated?: DateTimeFilter<"DocumentNumbering"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DocumentNumberingOrderByWithRelationInput = {
    id?: SortOrder
    salespersonId?: SortOrder
    prefix?: SortOrder
    currentNumber?: SortOrder
    lastUpdated?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DocumentNumberingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    salespersonId?: string
    AND?: DocumentNumberingWhereInput | DocumentNumberingWhereInput[]
    OR?: DocumentNumberingWhereInput[]
    NOT?: DocumentNumberingWhereInput | DocumentNumberingWhereInput[]
    prefix?: StringFilter<"DocumentNumbering"> | string
    currentNumber?: IntFilter<"DocumentNumbering"> | number
    lastUpdated?: DateTimeFilter<"DocumentNumbering"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "salespersonId">

  export type DocumentNumberingOrderByWithAggregationInput = {
    id?: SortOrder
    salespersonId?: SortOrder
    prefix?: SortOrder
    currentNumber?: SortOrder
    lastUpdated?: SortOrder
    _count?: DocumentNumberingCountOrderByAggregateInput
    _avg?: DocumentNumberingAvgOrderByAggregateInput
    _max?: DocumentNumberingMaxOrderByAggregateInput
    _min?: DocumentNumberingMinOrderByAggregateInput
    _sum?: DocumentNumberingSumOrderByAggregateInput
  }

  export type DocumentNumberingScalarWhereWithAggregatesInput = {
    AND?: DocumentNumberingScalarWhereWithAggregatesInput | DocumentNumberingScalarWhereWithAggregatesInput[]
    OR?: DocumentNumberingScalarWhereWithAggregatesInput[]
    NOT?: DocumentNumberingScalarWhereWithAggregatesInput | DocumentNumberingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentNumbering"> | string
    salespersonId?: StringWithAggregatesFilter<"DocumentNumbering"> | string
    prefix?: StringWithAggregatesFilter<"DocumentNumbering"> | string
    currentNumber?: IntWithAggregatesFilter<"DocumentNumbering"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"DocumentNumbering"> | Date | string
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    id?: StringFilter<"UserLocation"> | string
    userCode?: StringFilter<"UserLocation"> | string
    latitude?: FloatFilter<"UserLocation"> | number
    longitude?: FloatFilter<"UserLocation"> | number
    description?: StringNullableFilter<"UserLocation"> | string | null
    timestamp?: DateTimeFilter<"UserLocation"> | Date | string
    type?: StringFilter<"UserLocation"> | string
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
  }

  export type UserLocationOrderByWithRelationInput = {
    id?: SortOrder
    userCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userCode?: StringFilter<"UserLocation"> | string
    latitude?: FloatFilter<"UserLocation"> | number
    longitude?: FloatFilter<"UserLocation"> | number
    description?: StringNullableFilter<"UserLocation"> | string | null
    timestamp?: DateTimeFilter<"UserLocation"> | Date | string
    type?: StringFilter<"UserLocation"> | string
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
  }, "id">

  export type UserLocationOrderByWithAggregationInput = {
    id?: SortOrder
    userCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _avg?: UserLocationAvgOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
    _sum?: UserLocationSumOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLocation"> | string
    userCode?: StringWithAggregatesFilter<"UserLocation"> | string
    latitude?: FloatWithAggregatesFilter<"UserLocation"> | number
    longitude?: FloatWithAggregatesFilter<"UserLocation"> | number
    description?: StringNullableWithAggregatesFilter<"UserLocation"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
    type?: StringWithAggregatesFilter<"UserLocation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
  }

  export type SalesReportWhereInput = {
    AND?: SalesReportWhereInput | SalesReportWhereInput[]
    OR?: SalesReportWhereInput[]
    NOT?: SalesReportWhereInput | SalesReportWhereInput[]
    id?: StringFilter<"SalesReport"> | string
    date?: DateTimeFilter<"SalesReport"> | Date | string
    customerId?: StringFilter<"SalesReport"> | string
    customerName?: StringFilter<"SalesReport"> | string
    city?: StringNullableFilter<"SalesReport"> | string | null
    province?: StringNullableFilter<"SalesReport"> | string | null
    productId?: StringNullableFilter<"SalesReport"> | string | null
    productName?: StringNullableFilter<"SalesReport"> | string | null
    category?: StringNullableFilter<"SalesReport"> | string | null
    subCategory?: StringNullableFilter<"SalesReport"> | string | null
    quantity?: IntFilter<"SalesReport"> | number
    unitPrice?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesReport"> | Date | string
  }

  export type SalesReportOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesReportWhereInput | SalesReportWhereInput[]
    OR?: SalesReportWhereInput[]
    NOT?: SalesReportWhereInput | SalesReportWhereInput[]
    date?: DateTimeFilter<"SalesReport"> | Date | string
    customerId?: StringFilter<"SalesReport"> | string
    customerName?: StringFilter<"SalesReport"> | string
    city?: StringNullableFilter<"SalesReport"> | string | null
    province?: StringNullableFilter<"SalesReport"> | string | null
    productId?: StringNullableFilter<"SalesReport"> | string | null
    productName?: StringNullableFilter<"SalesReport"> | string | null
    category?: StringNullableFilter<"SalesReport"> | string | null
    subCategory?: StringNullableFilter<"SalesReport"> | string | null
    quantity?: IntFilter<"SalesReport"> | number
    unitPrice?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"SalesReport"> | Date | string
  }, "id">

  export type SalesReportOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    subCategory?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
    createdAt?: SortOrder
    _count?: SalesReportCountOrderByAggregateInput
    _avg?: SalesReportAvgOrderByAggregateInput
    _max?: SalesReportMaxOrderByAggregateInput
    _min?: SalesReportMinOrderByAggregateInput
    _sum?: SalesReportSumOrderByAggregateInput
  }

  export type SalesReportScalarWhereWithAggregatesInput = {
    AND?: SalesReportScalarWhereWithAggregatesInput | SalesReportScalarWhereWithAggregatesInput[]
    OR?: SalesReportScalarWhereWithAggregatesInput[]
    NOT?: SalesReportScalarWhereWithAggregatesInput | SalesReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesReport"> | string
    date?: DateTimeWithAggregatesFilter<"SalesReport"> | Date | string
    customerId?: StringWithAggregatesFilter<"SalesReport"> | string
    customerName?: StringWithAggregatesFilter<"SalesReport"> | string
    city?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    province?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    productId?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    productName?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    category?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    subCategory?: StringNullableWithAggregatesFilter<"SalesReport"> | string | null
    quantity?: IntWithAggregatesFilter<"SalesReport"> | number
    unitPrice?: DecimalWithAggregatesFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalWithAggregatesFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    netSales?: DecimalWithAggregatesFilter<"SalesReport"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesReport"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutUserInput
    documentNumbering?: DocumentNumberingCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    documentNumbering?: DocumentNumberingUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutUserNestedInput
    documentNumbering?: DocumentNumberingUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    documentNumbering?: DocumentNumberingUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomersInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    customerId: string
    exeId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    customerId: string
    exeId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    itemCode: string
    description: string
    category?: string | null
    subCategory?: string | null
    categoryCode?: string | null
    uom?: string | null
    price: Decimal | DecimalJsLike | number | string
    qty?: number
    imageUrl?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountPercentage?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    itemCode: string
    description: string
    category?: string | null
    subCategory?: string | null
    categoryCode?: string | null
    uom?: string | null
    price: Decimal | DecimalJsLike | number | string
    qty?: number
    imageUrl?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountPercentage?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    itemCode: string
    description: string
    category?: string | null
    subCategory?: string | null
    categoryCode?: string | null
    uom?: string | null
    price: Decimal | DecimalJsLike | number | string
    qty?: number
    imageUrl?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountPercentage?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    customerId: string
    salespersonId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    customerId: string
    salespersonId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    customerId: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    customerId: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    customerId: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    customerId: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentNumberingCreateInput = {
    id?: string
    prefix: string
    currentNumber?: number
    lastUpdated?: Date | string
    user: UserCreateNestedOneWithoutDocumentNumberingInput
  }

  export type DocumentNumberingUncheckedCreateInput = {
    id?: string
    salespersonId: string
    prefix: string
    currentNumber?: number
    lastUpdated?: Date | string
  }

  export type DocumentNumberingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDocumentNumberingNestedInput
  }

  export type DocumentNumberingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentNumberingCreateManyInput = {
    id?: string
    salespersonId: string
    prefix: string
    currentNumber?: number
    lastUpdated?: Date | string
  }

  export type DocumentNumberingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentNumberingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateInput = {
    id?: string
    userCode: string
    latitude: number
    longitude: number
    description?: string | null
    timestamp?: Date | string
    type?: string
    createdAt?: Date | string
  }

  export type UserLocationUncheckedCreateInput = {
    id?: string
    userCode: string
    latitude: number
    longitude: number
    description?: string | null
    timestamp?: Date | string
    type?: string
    createdAt?: Date | string
  }

  export type UserLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateManyInput = {
    id?: string
    userCode: string
    latitude: number
    longitude: number
    description?: string | null
    timestamp?: Date | string
    type?: string
    createdAt?: Date | string
  }

  export type UserLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportCreateInput = {
    id?: string
    date: Date | string
    customerId: string
    customerName: string
    city?: string | null
    province?: string | null
    productId?: string | null
    productName?: string | null
    category?: string | null
    subCategory?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalSales: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    netSales: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type SalesReportUncheckedCreateInput = {
    id?: string
    date: Date | string
    customerId: string
    customerName: string
    city?: string | null
    province?: string | null
    productId?: string | null
    productName?: string | null
    category?: string | null
    subCategory?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalSales: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    netSales: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type SalesReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportCreateManyInput = {
    id?: string
    date: Date | string
    customerId: string
    customerName: string
    city?: string | null
    province?: string | null
    productId?: string | null
    productName?: string | null
    category?: string | null
    subCategory?: string | null
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    totalSales: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    netSales: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type SalesReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    netSales?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type DocumentNumberingNullableRelationFilter = {
    is?: DocumentNumberingWhereInput | null
    isNot?: DocumentNumberingWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    exeId?: SortOrder
    companyId?: SortOrder
    password?: SortOrder
    leader?: SortOrder
    areaCode?: SortOrder
    exeName?: SortOrder
    exeNameOrig?: SortOrder
    role?: SortOrder
    areaName?: SortOrder
    region?: SortOrder
    subdivisionCode?: SortOrder
    imageLocation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    exeId?: SortOrder
    companyId?: SortOrder
    password?: SortOrder
    leader?: SortOrder
    areaCode?: SortOrder
    exeName?: SortOrder
    exeNameOrig?: SortOrder
    role?: SortOrder
    areaName?: SortOrder
    region?: SortOrder
    subdivisionCode?: SortOrder
    imageLocation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    exeId?: SortOrder
    companyId?: SortOrder
    password?: SortOrder
    leader?: SortOrder
    areaCode?: SortOrder
    exeName?: SortOrder
    exeNameOrig?: SortOrder
    role?: SortOrder
    areaName?: SortOrder
    region?: SortOrder
    subdivisionCode?: SortOrder
    imageLocation?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    exeId?: SortOrder
    customerName?: SortOrder
    addr1?: SortOrder
    addr2?: SortOrder
    addr3?: SortOrder
    city?: SortOrder
    route?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    phone3?: SortOrder
    additional?: SortOrder
    isActive?: SortOrder
    grade?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    startDate?: SortOrder
    creditLimit?: SortOrder
    creditPeriod?: SortOrder
    comments?: SortOrder
    lastInvoiceDate?: SortOrder
    lastInvoiceAmt?: SortOrder
    lastPaymentDate?: SortOrder
    lastPaymentAmt?: SortOrder
    isInactive?: SortOrder
    isHold?: SortOrder
    followupStatus?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    creditLimit?: SortOrder
    creditPeriod?: SortOrder
    lastInvoiceAmt?: SortOrder
    lastPaymentAmt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    exeId?: SortOrder
    customerName?: SortOrder
    addr1?: SortOrder
    addr2?: SortOrder
    addr3?: SortOrder
    city?: SortOrder
    route?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    phone3?: SortOrder
    additional?: SortOrder
    isActive?: SortOrder
    grade?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    startDate?: SortOrder
    creditLimit?: SortOrder
    creditPeriod?: SortOrder
    comments?: SortOrder
    lastInvoiceDate?: SortOrder
    lastInvoiceAmt?: SortOrder
    lastPaymentDate?: SortOrder
    lastPaymentAmt?: SortOrder
    isInactive?: SortOrder
    isHold?: SortOrder
    followupStatus?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    exeId?: SortOrder
    customerName?: SortOrder
    addr1?: SortOrder
    addr2?: SortOrder
    addr3?: SortOrder
    city?: SortOrder
    route?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    phone3?: SortOrder
    additional?: SortOrder
    isActive?: SortOrder
    grade?: SortOrder
    contactName?: SortOrder
    contactPhone?: SortOrder
    startDate?: SortOrder
    creditLimit?: SortOrder
    creditPeriod?: SortOrder
    comments?: SortOrder
    lastInvoiceDate?: SortOrder
    lastInvoiceAmt?: SortOrder
    lastPaymentDate?: SortOrder
    lastPaymentAmt?: SortOrder
    isInactive?: SortOrder
    isHold?: SortOrder
    followupStatus?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    creditLimit?: SortOrder
    creditPeriod?: SortOrder
    lastInvoiceAmt?: SortOrder
    lastPaymentAmt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    categoryCode?: SortOrder
    uom?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    imageUrl?: SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    categoryCode?: SortOrder
    uom?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    imageUrl?: SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    itemCode?: SortOrder
    description?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    categoryCode?: SortOrder
    uom?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    imageUrl?: SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    qty?: SortOrder
    discountAmount?: SortOrder
    discountPercentage?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    salespersonId?: SortOrder
    status?: SortOrder
    isDraft?: SortOrder
    errorMessage?: SortOrder
    jsonPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    salespersonId?: SortOrder
    status?: SortOrder
    isDraft?: SortOrder
    errorMessage?: SortOrder
    jsonPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    salespersonId?: SortOrder
    status?: SortOrder
    isDraft?: SortOrder
    errorMessage?: SortOrder
    jsonPayload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    discount?: SortOrder
    totalAmount?: SortOrder
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    documentNo?: SortOrder
    docDate?: SortOrder
    docAmount?: SortOrder
    daysDue?: SortOrder
    docType?: SortOrder
    dueAmount?: SortOrder
    exeId?: SortOrder
    refNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    docAmount?: SortOrder
    daysDue?: SortOrder
    dueAmount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    documentNo?: SortOrder
    docDate?: SortOrder
    docAmount?: SortOrder
    daysDue?: SortOrder
    docType?: SortOrder
    dueAmount?: SortOrder
    exeId?: SortOrder
    refNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    documentNo?: SortOrder
    docDate?: SortOrder
    docAmount?: SortOrder
    daysDue?: SortOrder
    docType?: SortOrder
    dueAmount?: SortOrder
    exeId?: SortOrder
    refNo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    docAmount?: SortOrder
    daysDue?: SortOrder
    dueAmount?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transNo?: SortOrder
    transDate?: SortOrder
    amtBc?: SortOrder
    remUnappl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amtBc?: SortOrder
    remUnappl?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transNo?: SortOrder
    transDate?: SortOrder
    amtBc?: SortOrder
    remUnappl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    transNo?: SortOrder
    transDate?: SortOrder
    amtBc?: SortOrder
    remUnappl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amtBc?: SortOrder
    remUnappl?: SortOrder
  }

  export type DocumentNumberingCountOrderByAggregateInput = {
    id?: SortOrder
    salespersonId?: SortOrder
    prefix?: SortOrder
    currentNumber?: SortOrder
    lastUpdated?: SortOrder
  }

  export type DocumentNumberingAvgOrderByAggregateInput = {
    currentNumber?: SortOrder
  }

  export type DocumentNumberingMaxOrderByAggregateInput = {
    id?: SortOrder
    salespersonId?: SortOrder
    prefix?: SortOrder
    currentNumber?: SortOrder
    lastUpdated?: SortOrder
  }

  export type DocumentNumberingMinOrderByAggregateInput = {
    id?: SortOrder
    salespersonId?: SortOrder
    prefix?: SortOrder
    currentNumber?: SortOrder
    lastUpdated?: SortOrder
  }

  export type DocumentNumberingSumOrderByAggregateInput = {
    currentNumber?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserLocationCountOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    description?: SortOrder
    timestamp?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SalesReportCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    city?: SortOrder
    province?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesReportAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
  }

  export type SalesReportMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    city?: SortOrder
    province?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesReportMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    city?: SortOrder
    province?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    category?: SortOrder
    subCategory?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
    createdAt?: SortOrder
  }

  export type SalesReportSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    totalSales?: SortOrder
    discount?: SortOrder
    netSales?: SortOrder
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type DocumentNumberingCreateNestedOneWithoutUserInput = {
    create?: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
    connectOrCreate?: DocumentNumberingCreateOrConnectWithoutUserInput
    connect?: DocumentNumberingWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type DocumentNumberingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
    connectOrCreate?: DocumentNumberingCreateOrConnectWithoutUserInput
    connect?: DocumentNumberingWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type DocumentNumberingUpdateOneWithoutUserNestedInput = {
    create?: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
    connectOrCreate?: DocumentNumberingCreateOrConnectWithoutUserInput
    upsert?: DocumentNumberingUpsertWithoutUserInput
    disconnect?: DocumentNumberingWhereInput | boolean
    delete?: DocumentNumberingWhereInput | boolean
    connect?: DocumentNumberingWhereUniqueInput
    update?: XOR<XOR<DocumentNumberingUpdateToOneWithWhereWithoutUserInput, DocumentNumberingUpdateWithoutUserInput>, DocumentNumberingUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type DocumentNumberingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
    connectOrCreate?: DocumentNumberingCreateOrConnectWithoutUserInput
    upsert?: DocumentNumberingUpsertWithoutUserInput
    disconnect?: DocumentNumberingWhereInput | boolean
    delete?: DocumentNumberingWhereInput | boolean
    connect?: DocumentNumberingWhereUniqueInput
    update?: XOR<XOR<DocumentNumberingUpdateToOneWithWhereWithoutUserInput, DocumentNumberingUpdateWithoutUserInput>, DocumentNumberingUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomersInput, UserUpdateWithoutCustomersInput>, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type InvoiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput> | InvoiceCreateWithoutCustomerInput[] | InvoiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutCustomerInput | InvoiceCreateOrConnectWithoutCustomerInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutCustomerInput | InvoiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: InvoiceCreateManyCustomerInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutCustomerInput | InvoiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutCustomerInput | InvoiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput> | PaymentCreateWithoutCustomerInput[] | PaymentUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutCustomerInput | PaymentCreateOrConnectWithoutCustomerInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutCustomerInput | PaymentUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: PaymentCreateManyCustomerInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutCustomerInput | PaymentUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutCustomerInput | PaymentUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type CustomerCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutInvoicesInput
    upsert?: CustomerUpsertWithoutInvoicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutInvoicesInput, CustomerUpdateWithoutInvoicesInput>, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomerCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutPaymentsInput
    upsert?: CustomerUpsertWithoutPaymentsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutPaymentsInput, CustomerUpdateWithoutPaymentsInput>, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutDocumentNumberingInput = {
    create?: XOR<UserCreateWithoutDocumentNumberingInput, UserUncheckedCreateWithoutDocumentNumberingInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentNumberingInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDocumentNumberingNestedInput = {
    create?: XOR<UserCreateWithoutDocumentNumberingInput, UserUncheckedCreateWithoutDocumentNumberingInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentNumberingInput
    upsert?: UserUpsertWithoutDocumentNumberingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentNumberingInput, UserUpdateWithoutDocumentNumberingInput>, UserUncheckedUpdateWithoutDocumentNumberingInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentNumberingCreateWithoutUserInput = {
    id?: string
    prefix: string
    currentNumber?: number
    lastUpdated?: Date | string
  }

  export type DocumentNumberingUncheckedCreateWithoutUserInput = {
    id?: string
    prefix: string
    currentNumber?: number
    lastUpdated?: Date | string
  }

  export type DocumentNumberingCreateOrConnectWithoutUserInput = {
    where: DocumentNumberingWhereUniqueInput
    create: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: string
    orderNumber: string
    customerId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    customerId?: StringFilter<"Customer"> | string
    exeId?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    addr1?: StringNullableFilter<"Customer"> | string | null
    addr2?: StringNullableFilter<"Customer"> | string | null
    addr3?: StringNullableFilter<"Customer"> | string | null
    city?: StringNullableFilter<"Customer"> | string | null
    route?: StringNullableFilter<"Customer"> | string | null
    phone1?: StringNullableFilter<"Customer"> | string | null
    phone2?: StringNullableFilter<"Customer"> | string | null
    phone3?: StringNullableFilter<"Customer"> | string | null
    additional?: StringNullableFilter<"Customer"> | string | null
    isActive?: BoolFilter<"Customer"> | boolean
    grade?: StringNullableFilter<"Customer"> | string | null
    contactName?: StringNullableFilter<"Customer"> | string | null
    contactPhone?: StringNullableFilter<"Customer"> | string | null
    startDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    creditLimit?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: IntNullableFilter<"Customer"> | number | null
    comments?: StringNullableFilter<"Customer"> | string | null
    lastInvoiceDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastInvoiceAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    lastPaymentAmt?: DecimalNullableFilter<"Customer"> | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFilter<"Customer"> | boolean
    isHold?: BoolFilter<"Customer"> | boolean
    followupStatus?: StringNullableFilter<"Customer"> | string | null
    location?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type DocumentNumberingUpsertWithoutUserInput = {
    update: XOR<DocumentNumberingUpdateWithoutUserInput, DocumentNumberingUncheckedUpdateWithoutUserInput>
    create: XOR<DocumentNumberingCreateWithoutUserInput, DocumentNumberingUncheckedCreateWithoutUserInput>
    where?: DocumentNumberingWhereInput
  }

  export type DocumentNumberingUpdateToOneWithWhereWithoutUserInput = {
    where?: DocumentNumberingWhereInput
    data: XOR<DocumentNumberingUpdateWithoutUserInput, DocumentNumberingUncheckedUpdateWithoutUserInput>
  }

  export type DocumentNumberingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentNumberingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    currentNumber?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    salespersonId?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    isDraft?: BoolFilter<"Order"> | boolean
    errorMessage?: StringNullableFilter<"Order"> | string | null
    jsonPayload?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type UserCreateWithoutCustomersInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentNumbering?: DocumentNumberingCreateNestedOneWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentNumbering?: DocumentNumberingUncheckedCreateNestedOneWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type InvoiceCreateWithoutCustomerInput = {
    id?: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutCustomerInput = {
    id?: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceCreateManyCustomerInputEnvelope = {
    data: InvoiceCreateManyCustomerInput | InvoiceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    salespersonId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutCustomerInput = {
    id?: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutCustomerInput = {
    id?: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentCreateManyCustomerInputEnvelope = {
    data: PaymentCreateManyCustomerInput | PaymentCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumbering?: DocumentNumberingUpdateOneWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentNumbering?: DocumentNumberingUncheckedUpdateOneWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<InvoiceCreateWithoutCustomerInput, InvoiceUncheckedCreateWithoutCustomerInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutCustomerInput, InvoiceUncheckedUpdateWithoutCustomerInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    customerId?: StringFilter<"Invoice"> | string
    documentNo?: StringFilter<"Invoice"> | string
    docDate?: DateTimeFilter<"Invoice"> | Date | string
    docAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    daysDue?: IntNullableFilter<"Invoice"> | number | null
    docType?: StringFilter<"Invoice"> | string
    dueAmount?: DecimalFilter<"Invoice"> | Decimal | DecimalJsLike | number | string
    exeId?: StringNullableFilter<"Invoice"> | string | null
    refNo?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
    create: XOR<PaymentCreateWithoutCustomerInput, PaymentUncheckedCreateWithoutCustomerInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutCustomerInput, PaymentUncheckedUpdateWithoutCustomerInput>
  }

  export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutCustomerInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    customerId?: StringFilter<"Payment"> | string
    transNo?: StringFilter<"Payment"> | string
    transDate?: DateTimeFilter<"Payment"> | Date | string
    amtBc?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFilter<"OrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomersInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    customerId: string
    exeId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutUserInput
    documentNumbering?: DocumentNumberingCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    documentNumbering?: DocumentNumberingUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutUserNestedInput
    documentNumbering?: DocumentNumberingUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    documentNumbering?: DocumentNumberingUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    customerId: string
    salespersonId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    itemCode: string
    description: string
    category?: string | null
    subCategory?: string | null
    categoryCode?: string | null
    uom?: string | null
    price: Decimal | DecimalJsLike | number | string
    qty?: number
    imageUrl?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountPercentage?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    itemCode: string
    description: string
    category?: string | null
    subCategory?: string | null
    categoryCode?: string | null
    uom?: string | null
    price: Decimal | DecimalJsLike | number | string
    qty?: number
    imageUrl?: string | null
    discountAmount?: Decimal | DecimalJsLike | number | string
    discountPercentage?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemCode?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    subCategory?: NullableStringFieldUpdateOperationsInput | string | null
    categoryCode?: NullableStringFieldUpdateOperationsInput | string | null
    uom?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    qty?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    discountAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountPercentage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateWithoutInvoicesInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
    payments?: PaymentCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutInvoicesInput = {
    id?: string
    customerId: string
    exeId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutInvoicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
  }

  export type CustomerUpsertWithoutInvoicesInput = {
    update: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
    create: XOR<CustomerCreateWithoutInvoicesInput, CustomerUncheckedCreateWithoutInvoicesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutInvoicesInput, CustomerUncheckedUpdateWithoutInvoicesInput>
  }

  export type CustomerUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutPaymentsInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCustomersInput
    invoices?: InvoiceCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutPaymentsInput = {
    id?: string
    customerId: string
    exeId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutPaymentsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
  }

  export type CustomerUpsertWithoutPaymentsInput = {
    update: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
    create: XOR<CustomerCreateWithoutPaymentsInput, CustomerUncheckedCreateWithoutPaymentsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutPaymentsInput, CustomerUncheckedUpdateWithoutPaymentsInput>
  }

  export type CustomerUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCustomersNestedInput
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutDocumentNumberingInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDocumentNumberingInput = {
    id?: string
    exeId: string
    companyId?: string
    password: string
    leader?: string | null
    areaCode?: string | null
    exeName?: string | null
    exeNameOrig?: string | null
    role?: string | null
    areaName?: string | null
    region?: string | null
    subdivisionCode?: string | null
    imageLocation?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDocumentNumberingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentNumberingInput, UserUncheckedCreateWithoutDocumentNumberingInput>
  }

  export type UserUpsertWithoutDocumentNumberingInput = {
    update: XOR<UserUpdateWithoutDocumentNumberingInput, UserUncheckedUpdateWithoutDocumentNumberingInput>
    create: XOR<UserCreateWithoutDocumentNumberingInput, UserUncheckedCreateWithoutDocumentNumberingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentNumberingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentNumberingInput, UserUncheckedUpdateWithoutDocumentNumberingInput>
  }

  export type UserUpdateWithoutDocumentNumberingInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDocumentNumberingInput = {
    id?: StringFieldUpdateOperationsInput | string
    exeId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    leader?: NullableStringFieldUpdateOperationsInput | string | null
    areaCode?: NullableStringFieldUpdateOperationsInput | string | null
    exeName?: NullableStringFieldUpdateOperationsInput | string | null
    exeNameOrig?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    areaName?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    subdivisionCode?: NullableStringFieldUpdateOperationsInput | string | null
    imageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateManyUserInput = {
    id?: string
    customerId: string
    customerName: string
    addr1?: string | null
    addr2?: string | null
    addr3?: string | null
    city?: string | null
    route?: string | null
    phone1?: string | null
    phone2?: string | null
    phone3?: string | null
    additional?: string | null
    isActive?: boolean
    grade?: string | null
    contactName?: string | null
    contactPhone?: string | null
    startDate?: Date | string | null
    creditLimit?: Decimal | DecimalJsLike | number | string | null
    creditPeriod?: number | null
    comments?: string | null
    lastInvoiceDate?: Date | string | null
    lastInvoiceAmt?: Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: Date | string | null
    lastPaymentAmt?: Decimal | DecimalJsLike | number | string | null
    isInactive?: boolean
    isHold?: boolean
    followupStatus?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyUserInput = {
    id?: string
    orderNumber: string
    customerId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    addr1?: NullableStringFieldUpdateOperationsInput | string | null
    addr2?: NullableStringFieldUpdateOperationsInput | string | null
    addr3?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: NullableStringFieldUpdateOperationsInput | string | null
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    phone3?: NullableStringFieldUpdateOperationsInput | string | null
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    contactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creditLimit?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    creditPeriod?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    lastInvoiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastInvoiceAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    lastPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastPaymentAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isInactive?: BoolFieldUpdateOperationsInput | boolean
    isHold?: BoolFieldUpdateOperationsInput | boolean
    followupStatus?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyCustomerInput = {
    id?: string
    documentNo: string
    docDate: Date | string
    docAmount: Decimal | DecimalJsLike | number | string
    daysDue?: number | null
    docType: string
    dueAmount: Decimal | DecimalJsLike | number | string
    exeId?: string | null
    refNo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    orderNumber: string
    salespersonId: string
    status?: string
    isDraft?: boolean
    errorMessage?: string | null
    jsonPayload: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyCustomerInput = {
    id?: string
    transNo: string
    transDate: Date | string
    amtBc: Decimal | DecimalJsLike | number | string
    remUnappl: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentNo?: StringFieldUpdateOperationsInput | string
    docDate?: DateTimeFieldUpdateOperationsInput | Date | string
    docAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    daysDue?: NullableIntFieldUpdateOperationsInput | number | null
    docType?: StringFieldUpdateOperationsInput | string
    dueAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    exeId?: NullableStringFieldUpdateOperationsInput | string | null
    refNo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    salespersonId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isDraft?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    jsonPayload?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    transNo?: StringFieldUpdateOperationsInput | string
    transDate?: DateTimeFieldUpdateOperationsInput | Date | string
    amtBc?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    remUnappl?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    totalAmount: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvoiceDefaultArgs instead
     */
    export type InvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvoiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DocumentNumberingDefaultArgs instead
     */
    export type DocumentNumberingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DocumentNumberingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLocationDefaultArgs instead
     */
    export type UserLocationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLocationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesReportDefaultArgs instead
     */
    export type SalesReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}