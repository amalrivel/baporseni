
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Gallery
 * 
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model BranchStaff
 * 
 */
export type BranchStaff = $Result.DefaultSelection<Prisma.$BranchStaffPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleName: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  MEMBER: 'MEMBER'
};

export type RoleName = (typeof RoleName)[keyof typeof RoleName]


export const RegistrationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type RegistrationStatus = (typeof RegistrationStatus)[keyof typeof RegistrationStatus]


export const NewsCategory: {
  OLAHRAGA: 'OLAHRAGA',
  OLAHRAGA_ELEKTRONIK: 'OLAHRAGA_ELEKTRONIK',
  SENI: 'SENI',
  UMUM: 'UMUM'
};

export type NewsCategory = (typeof NewsCategory)[keyof typeof NewsCategory]

}

export type RoleName = $Enums.RoleName

export const RoleName: typeof $Enums.RoleName

export type RegistrationStatus = $Enums.RegistrationStatus

export const RegistrationStatus: typeof $Enums.RegistrationStatus

export type NewsCategory = $Enums.NewsCategory

export const NewsCategory: typeof $Enums.NewsCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Galleries
    * const galleries = await prisma.gallery.findMany()
    * ```
    */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.branchStaff`: Exposes CRUD operations for the **BranchStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BranchStaffs
    * const branchStaffs = await prisma.branchStaff.findMany()
    * ```
    */
  get branchStaff(): Prisma.BranchStaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Role: 'Role',
    User: 'User',
    Category: 'Category',
    Event: 'Event',
    Registration: 'Registration',
    News: 'News',
    Gallery: 'Gallery',
    Photo: 'Photo',
    Branch: 'Branch',
    BranchStaff: 'BranchStaff',
    Contact: 'Contact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "category" | "event" | "registration" | "news" | "gallery" | "photo" | "branch" | "branchStaff" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
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
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>
        fields: Prisma.GalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[]
          }
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>
          }
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGallery>
          }
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      BranchStaff: {
        payload: Prisma.$BranchStaffPayload<ExtArgs>
        fields: Prisma.BranchStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          findFirst: {
            args: Prisma.BranchStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          findMany: {
            args: Prisma.BranchStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>[]
          }
          create: {
            args: Prisma.BranchStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          createMany: {
            args: Prisma.BranchStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BranchStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          update: {
            args: Prisma.BranchStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          deleteMany: {
            args: Prisma.BranchStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchStaffPayload>
          }
          aggregate: {
            args: Prisma.BranchStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranchStaff>
          }
          groupBy: {
            args: Prisma.BranchStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchStaffCountArgs<ExtArgs>
            result: $Utils.Optional<BranchStaffCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    category?: CategoryOmit
    event?: EventOmit
    registration?: RegistrationOmit
    news?: NewsOmit
    gallery?: GalleryOmit
    photo?: PhotoOmit
    branch?: BranchOmit
    branchStaff?: BranchStaffOmit
    contact?: ContactOmit
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
    | 'updateManyAndReturn'
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    news: number
    registrations: number
    createdEvents: number
    branchStaff: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
    createdEvents?: boolean | UserCountOutputTypeCountCreatedEventsArgs
    branchStaff?: boolean | UserCountOutputTypeCountBranchStaffArgs
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
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBranchStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchStaffWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    events: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | CategoryCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    registrations: number
    galleries: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | EventCountOutputTypeCountRegistrationsArgs
    galleries?: boolean | EventCountOutputTypeCountGalleriesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountGalleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
  }


  /**
   * Count Type GalleryCountOutputType
   */

  export type GalleryCountOutputType = {
    photos: number
  }

  export type GalleryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photos?: boolean | GalleryCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryCountOutputType
     */
    select?: GalleryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GalleryCountOutputType without action
   */
  export type GalleryCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    news: number
    branchStaff: number
    events: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | BranchCountOutputTypeCountNewsArgs
    branchStaff?: boolean | BranchCountOutputTypeCountBranchStaffArgs
    events?: boolean | BranchCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountBranchStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchStaffWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: $Enums.RoleName | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: $Enums.RoleName | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: $Enums.RoleName
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.RoleName
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'RoleName'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    roleId: number
    name: number
    email: number
    password: number
    phone: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    roleId?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    roleId: number
    name: string
    email: string
    password: string
    phone: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    roleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    branchStaff?: boolean | User$branchStaffArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    roleId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "name" | "email" | "password" | "phone" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    createdEvents?: boolean | User$createdEventsArgs<ExtArgs>
    branchStaff?: boolean | User$branchStaffArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      news: Prisma.$NewsPayload<ExtArgs>[]
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      createdEvents: Prisma.$EventPayload<ExtArgs>[]
      branchStaff: Prisma.$BranchStaffPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      name: string
      email: string
      password: string
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdEvents<T extends User$createdEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branchStaff<T extends User$branchStaffArgs<ExtArgs> = {}>(args?: Subset<T, User$branchStaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * User.createdEvents
   */
  export type User$createdEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.branchStaff
   */
  export type User$branchStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    where?: BranchStaffWhereInput
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    cursor?: BranchStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchStaffScalarFieldEnum | BranchStaffScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    events?: boolean | Category$eventsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Category$eventsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Category$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Category$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.events
   */
  export type Category$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
    quota: number | null
    createdById: number | null
    branchId: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    categoryId: number | null
    quota: number | null
    createdById: number | null
    branchId: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    quota: number | null
    createdById: number | null
    createdAt: Date | null
    branchId: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    categoryId: number | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    quota: number | null
    createdById: number | null
    createdAt: Date | null
    branchId: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    categoryId: number
    title: number
    description: number
    location: number
    startDate: number
    endDate: number
    quota: number
    createdById: number
    createdAt: number
    branchId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    categoryId?: true
    quota?: true
    createdById?: true
    branchId?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    categoryId?: true
    quota?: true
    createdById?: true
    branchId?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    quota?: true
    createdById?: true
    createdAt?: true
    branchId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    quota?: true
    createdById?: true
    createdAt?: true
    branchId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    quota?: true
    createdById?: true
    createdAt?: true
    branchId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    categoryId: number
    title: string
    description: string | null
    location: string | null
    startDate: Date
    endDate: Date
    quota: number
    createdById: number | null
    createdAt: Date
    branchId: number | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    quota?: boolean
    createdById?: boolean
    createdAt?: boolean
    branchId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    galleries?: boolean | Event$galleriesArgs<ExtArgs>
    branch?: boolean | Event$branchArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>



  export type EventSelectScalar = {
    id?: boolean
    categoryId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    quota?: boolean
    createdById?: boolean
    createdAt?: boolean
    branchId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "title" | "description" | "location" | "startDate" | "endDate" | "quota" | "createdById" | "createdAt" | "branchId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    createdBy?: boolean | Event$createdByArgs<ExtArgs>
    registrations?: boolean | Event$registrationsArgs<ExtArgs>
    galleries?: boolean | Event$galleriesArgs<ExtArgs>
    branch?: boolean | Event$branchArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
      galleries: Prisma.$GalleryPayload<ExtArgs>[]
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryId: number
      title: string
      description: string | null
      location: string | null
      startDate: Date
      endDate: Date
      quota: number
      createdById: number | null
      createdAt: Date
      branchId: number | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Event$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Event$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends Event$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Event$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    galleries<T extends Event$galleriesArgs<ExtArgs> = {}>(args?: Subset<T, Event$galleriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branch<T extends Event$branchArgs<ExtArgs> = {}>(args?: Subset<T, Event$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly categoryId: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly quota: FieldRef<"Event", 'Int'>
    readonly createdById: FieldRef<"Event", 'Int'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly branchId: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.createdBy
   */
  export type Event$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Event.registrations
   */
  export type Event$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Event.galleries
   */
  export type Event$galleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    cursor?: GalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Event.branch
   */
  export type Event$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    registeredAt: Date | null
    status: $Enums.RegistrationStatus | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    userId: number | null
    registeredAt: Date | null
    status: $Enums.RegistrationStatus | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    registeredAt: number
    status: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type RegistrationSumAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    registeredAt?: true
    status?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    registeredAt?: true
    status?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    registeredAt?: true
    status?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: number
    eventId: number
    userId: number
    registeredAt: Date
    status: $Enums.RegistrationStatus
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    registeredAt?: boolean
    status?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>



  export type RegistrationSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    registeredAt?: boolean
    status?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "registeredAt" | "status", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      userId: number
      registeredAt: Date
      status: $Enums.RegistrationStatus
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'Int'>
    readonly eventId: FieldRef<"Registration", 'Int'>
    readonly userId: FieldRef<"Registration", 'Int'>
    readonly registeredAt: FieldRef<"Registration", 'DateTime'>
    readonly status: FieldRef<"Registration", 'RegistrationStatus'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    branchId: number | null
  }

  export type NewsSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    branchId: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: number | null
    authorId: number | null
    branchId: number | null
    title: string | null
    content: string | null
    category: $Enums.NewsCategory | null
    publishedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: number | null
    authorId: number | null
    branchId: number | null
    title: string | null
    content: string | null
    category: $Enums.NewsCategory | null
    publishedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    authorId: number
    branchId: number
    title: number
    content: number
    category: number
    publishedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id?: true
    authorId?: true
    branchId?: true
  }

  export type NewsSumAggregateInputType = {
    id?: true
    authorId?: true
    branchId?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    authorId?: true
    branchId?: true
    title?: true
    content?: true
    category?: true
    publishedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    authorId?: true
    branchId?: true
    title?: true
    content?: true
    category?: true
    publishedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    authorId?: true
    branchId?: true
    title?: true
    content?: true
    category?: true
    publishedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: number
    authorId: number
    branchId: number
    title: string
    content: string
    category: $Enums.NewsCategory
    publishedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    branchId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    publishedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>



  export type NewsSelectScalar = {
    id?: boolean
    authorId?: boolean
    branchId?: boolean
    title?: boolean
    content?: boolean
    category?: boolean
    publishedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "branchId" | "title" | "content" | "category" | "publishedAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    branch?: boolean | BranchDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorId: number
      branchId: number
      title: string
      content: string
      category: $Enums.NewsCategory
      publishedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'Int'>
    readonly authorId: FieldRef<"News", 'Int'>
    readonly branchId: FieldRef<"News", 'Int'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly category: FieldRef<"News", 'NewsCategory'>
    readonly publishedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  export type GalleryAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type GallerySumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type GalleryMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    title: string | null
  }

  export type GalleryMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    title: string | null
  }

  export type GalleryCountAggregateOutputType = {
    id: number
    eventId: number
    title: number
    _all: number
  }


  export type GalleryAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type GallerySumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type GalleryMinAggregateInputType = {
    id?: true
    eventId?: true
    title?: true
  }

  export type GalleryMaxAggregateInputType = {
    id?: true
    eventId?: true
    title?: true
  }

  export type GalleryCountAggregateInputType = {
    id?: true
    eventId?: true
    title?: true
    _all?: true
  }

  export type GalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Galleries
    **/
    _count?: true | GalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryMaxAggregateInputType
  }

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>
  }




  export type GalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryWhereInput
    orderBy?: GalleryOrderByWithAggregationInput | GalleryOrderByWithAggregationInput[]
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum
    having?: GalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryCountAggregateInputType | true
    _avg?: GalleryAvgAggregateInputType
    _sum?: GallerySumAggregateInputType
    _min?: GalleryMinAggregateInputType
    _max?: GalleryMaxAggregateInputType
  }

  export type GalleryGroupByOutputType = {
    id: number
    eventId: number
    title: string | null
    _count: GalleryCountAggregateOutputType | null
    _avg: GalleryAvgAggregateOutputType | null
    _sum: GallerySumAggregateOutputType | null
    _min: GalleryMinAggregateOutputType | null
    _max: GalleryMaxAggregateOutputType | null
  }

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>
        }
      >
    >


  export type GallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    title?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    photos?: boolean | Gallery$photosArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gallery"]>



  export type GallerySelectScalar = {
    id?: boolean
    eventId?: boolean
    title?: boolean
  }

  export type GalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "title", ExtArgs["result"]["gallery"]>
  export type GalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    photos?: boolean | Gallery$photosArgs<ExtArgs>
    _count?: boolean | GalleryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gallery"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      photos: Prisma.$PhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      title: string | null
    }, ExtArgs["result"]["gallery"]>
    composites: {}
  }

  type GalleryGetPayload<S extends boolean | null | undefined | GalleryDefaultArgs> = $Result.GetResult<Prisma.$GalleryPayload, S>

  type GalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryCountAggregateInputType | true
    }

  export interface GalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gallery'], meta: { name: 'Gallery' } }
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     * 
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryFindManyArgs>(args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     * 
     */
    create<T extends GalleryCreateArgs>(args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryCreateManyArgs>(args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     * 
     */
    delete<T extends GalleryDeleteArgs>(args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryUpdateArgs>(args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryDeleteManyArgs>(args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryUpdateManyArgs>(args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
    **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(args: Subset<T, GalleryAggregateArgs>): Prisma.PrismaPromise<GetGalleryAggregateType<T>>

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gallery model
   */
  readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    photos<T extends Gallery$photosArgs<ExtArgs> = {}>(args?: Subset<T, Gallery$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<"Gallery", 'Int'>
    readonly eventId: FieldRef<"Gallery", 'Int'>
    readonly title: FieldRef<"Gallery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Galleries to fetch.
     */
    orderBy?: GalleryOrderByWithRelationInput | GalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Galleries.
     */
    skip?: number
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[]
  }

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
  }

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to update.
     */
    limit?: number
  }

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>
  }

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput
  }

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number
  }

  /**
   * Gallery.photos
   */
  export type Gallery$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    galleryId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    galleryId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    galleryId: number | null
    filePath: string | null
    caption: string | null
    uploadedAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    galleryId: number | null
    filePath: string | null
    caption: string | null
    uploadedAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    galleryId: number
    filePath: number
    caption: number
    uploadedAt: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    galleryId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    galleryId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    galleryId?: true
    filePath?: true
    caption?: true
    uploadedAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    galleryId?: true
    filePath?: true
    caption?: true
    uploadedAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    galleryId?: true
    filePath?: true
    caption?: true
    uploadedAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    galleryId: number
    filePath: string
    caption: string | null
    uploadedAt: Date
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    galleryId?: boolean
    filePath?: boolean
    caption?: boolean
    uploadedAt?: boolean
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>



  export type PhotoSelectScalar = {
    id?: boolean
    galleryId?: boolean
    filePath?: boolean
    caption?: boolean
    uploadedAt?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "galleryId" | "filePath" | "caption" | "uploadedAt", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | GalleryDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      gallery: Prisma.$GalleryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      galleryId: number
      filePath: string
      caption: string | null
      uploadedAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallery<T extends GalleryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GalleryDefaultArgs<ExtArgs>>): Prisma__GalleryClient<$Result.GetResult<Prisma.$GalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly galleryId: FieldRef<"Photo", 'Int'>
    readonly filePath: FieldRef<"Photo", 'String'>
    readonly caption: FieldRef<"Photo", 'String'>
    readonly uploadedAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchAvgAggregateOutputType = {
    id: number | null
  }

  export type BranchSumAggregateOutputType = {
    id: number | null
  }

  export type BranchMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type BranchMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type BranchAvgAggregateInputType = {
    id?: true
  }

  export type BranchSumAggregateInputType = {
    id?: true
  }

  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _avg?: BranchAvgAggregateInputType
    _sum?: BranchSumAggregateInputType
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: BranchCountAggregateOutputType | null
    _avg: BranchAvgAggregateOutputType | null
    _sum: BranchSumAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    news?: boolean | Branch$newsArgs<ExtArgs>
    branchStaff?: boolean | Branch$branchStaffArgs<ExtArgs>
    events?: boolean | Branch$eventsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>



  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type BranchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["branch"]>
  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Branch$newsArgs<ExtArgs>
    branchStaff?: boolean | Branch$branchStaffArgs<ExtArgs>
    events?: boolean | Branch$eventsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      branchStaff: Prisma.$BranchStaffPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Branch$newsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    branchStaff<T extends Branch$branchStaffArgs<ExtArgs> = {}>(args?: Subset<T, Branch$branchStaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Branch$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Branch model
   */
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'Int'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly description: FieldRef<"Branch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to update.
     */
    limit?: number
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
    /**
     * Limit how many Branches to delete.
     */
    limit?: number
  }

  /**
   * Branch.news
   */
  export type Branch$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Branch.branchStaff
   */
  export type Branch$branchStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    where?: BranchStaffWhereInput
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    cursor?: BranchStaffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchStaffScalarFieldEnum | BranchStaffScalarFieldEnum[]
  }

  /**
   * Branch.events
   */
  export type Branch$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Branch
     */
    omit?: BranchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model BranchStaff
   */

  export type AggregateBranchStaff = {
    _count: BranchStaffCountAggregateOutputType | null
    _avg: BranchStaffAvgAggregateOutputType | null
    _sum: BranchStaffSumAggregateOutputType | null
    _min: BranchStaffMinAggregateOutputType | null
    _max: BranchStaffMaxAggregateOutputType | null
  }

  export type BranchStaffAvgAggregateOutputType = {
    id: number | null
    branchId: number | null
    userId: number | null
  }

  export type BranchStaffSumAggregateOutputType = {
    id: number | null
    branchId: number | null
    userId: number | null
  }

  export type BranchStaffMinAggregateOutputType = {
    id: number | null
    branchId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type BranchStaffMaxAggregateOutputType = {
    id: number | null
    branchId: number | null
    userId: number | null
    assignedAt: Date | null
  }

  export type BranchStaffCountAggregateOutputType = {
    id: number
    branchId: number
    userId: number
    assignedAt: number
    _all: number
  }


  export type BranchStaffAvgAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
  }

  export type BranchStaffSumAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
  }

  export type BranchStaffMinAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    assignedAt?: true
  }

  export type BranchStaffMaxAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    assignedAt?: true
  }

  export type BranchStaffCountAggregateInputType = {
    id?: true
    branchId?: true
    userId?: true
    assignedAt?: true
    _all?: true
  }

  export type BranchStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchStaff to aggregate.
     */
    where?: BranchStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchStaffs to fetch.
     */
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BranchStaffs
    **/
    _count?: true | BranchStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BranchStaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BranchStaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchStaffMaxAggregateInputType
  }

  export type GetBranchStaffAggregateType<T extends BranchStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateBranchStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranchStaff[P]>
      : GetScalarType<T[P], AggregateBranchStaff[P]>
  }




  export type BranchStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchStaffWhereInput
    orderBy?: BranchStaffOrderByWithAggregationInput | BranchStaffOrderByWithAggregationInput[]
    by: BranchStaffScalarFieldEnum[] | BranchStaffScalarFieldEnum
    having?: BranchStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchStaffCountAggregateInputType | true
    _avg?: BranchStaffAvgAggregateInputType
    _sum?: BranchStaffSumAggregateInputType
    _min?: BranchStaffMinAggregateInputType
    _max?: BranchStaffMaxAggregateInputType
  }

  export type BranchStaffGroupByOutputType = {
    id: number
    branchId: number
    userId: number
    assignedAt: Date
    _count: BranchStaffCountAggregateOutputType | null
    _avg: BranchStaffAvgAggregateOutputType | null
    _sum: BranchStaffSumAggregateOutputType | null
    _min: BranchStaffMinAggregateOutputType | null
    _max: BranchStaffMaxAggregateOutputType | null
  }

  type GetBranchStaffGroupByPayload<T extends BranchStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchStaffGroupByOutputType[P]>
            : GetScalarType<T[P], BranchStaffGroupByOutputType[P]>
        }
      >
    >


  export type BranchStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    branchId?: boolean
    userId?: boolean
    assignedAt?: boolean
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branchStaff"]>



  export type BranchStaffSelectScalar = {
    id?: boolean
    branchId?: boolean
    userId?: boolean
    assignedAt?: boolean
  }

  export type BranchStaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "branchId" | "userId" | "assignedAt", ExtArgs["result"]["branchStaff"]>
  export type BranchStaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | BranchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BranchStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BranchStaff"
    objects: {
      branch: Prisma.$BranchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      branchId: number
      userId: number
      assignedAt: Date
    }, ExtArgs["result"]["branchStaff"]>
    composites: {}
  }

  type BranchStaffGetPayload<S extends boolean | null | undefined | BranchStaffDefaultArgs> = $Result.GetResult<Prisma.$BranchStaffPayload, S>

  type BranchStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BranchStaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BranchStaffCountAggregateInputType | true
    }

  export interface BranchStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BranchStaff'], meta: { name: 'BranchStaff' } }
    /**
     * Find zero or one BranchStaff that matches the filter.
     * @param {BranchStaffFindUniqueArgs} args - Arguments to find a BranchStaff
     * @example
     * // Get one BranchStaff
     * const branchStaff = await prisma.branchStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchStaffFindUniqueArgs>(args: SelectSubset<T, BranchStaffFindUniqueArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BranchStaff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BranchStaffFindUniqueOrThrowArgs} args - Arguments to find a BranchStaff
     * @example
     * // Get one BranchStaff
     * const branchStaff = await prisma.branchStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffFindFirstArgs} args - Arguments to find a BranchStaff
     * @example
     * // Get one BranchStaff
     * const branchStaff = await prisma.branchStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchStaffFindFirstArgs>(args?: SelectSubset<T, BranchStaffFindFirstArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BranchStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffFindFirstOrThrowArgs} args - Arguments to find a BranchStaff
     * @example
     * // Get one BranchStaff
     * const branchStaff = await prisma.branchStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BranchStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BranchStaffs
     * const branchStaffs = await prisma.branchStaff.findMany()
     * 
     * // Get first 10 BranchStaffs
     * const branchStaffs = await prisma.branchStaff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchStaffWithIdOnly = await prisma.branchStaff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchStaffFindManyArgs>(args?: SelectSubset<T, BranchStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BranchStaff.
     * @param {BranchStaffCreateArgs} args - Arguments to create a BranchStaff.
     * @example
     * // Create one BranchStaff
     * const BranchStaff = await prisma.branchStaff.create({
     *   data: {
     *     // ... data to create a BranchStaff
     *   }
     * })
     * 
     */
    create<T extends BranchStaffCreateArgs>(args: SelectSubset<T, BranchStaffCreateArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BranchStaffs.
     * @param {BranchStaffCreateManyArgs} args - Arguments to create many BranchStaffs.
     * @example
     * // Create many BranchStaffs
     * const branchStaff = await prisma.branchStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchStaffCreateManyArgs>(args?: SelectSubset<T, BranchStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BranchStaff.
     * @param {BranchStaffDeleteArgs} args - Arguments to delete one BranchStaff.
     * @example
     * // Delete one BranchStaff
     * const BranchStaff = await prisma.branchStaff.delete({
     *   where: {
     *     // ... filter to delete one BranchStaff
     *   }
     * })
     * 
     */
    delete<T extends BranchStaffDeleteArgs>(args: SelectSubset<T, BranchStaffDeleteArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BranchStaff.
     * @param {BranchStaffUpdateArgs} args - Arguments to update one BranchStaff.
     * @example
     * // Update one BranchStaff
     * const branchStaff = await prisma.branchStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchStaffUpdateArgs>(args: SelectSubset<T, BranchStaffUpdateArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BranchStaffs.
     * @param {BranchStaffDeleteManyArgs} args - Arguments to filter BranchStaffs to delete.
     * @example
     * // Delete a few BranchStaffs
     * const { count } = await prisma.branchStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchStaffDeleteManyArgs>(args?: SelectSubset<T, BranchStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BranchStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BranchStaffs
     * const branchStaff = await prisma.branchStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchStaffUpdateManyArgs>(args: SelectSubset<T, BranchStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BranchStaff.
     * @param {BranchStaffUpsertArgs} args - Arguments to update or create a BranchStaff.
     * @example
     * // Update or create a BranchStaff
     * const branchStaff = await prisma.branchStaff.upsert({
     *   create: {
     *     // ... data to create a BranchStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BranchStaff we want to update
     *   }
     * })
     */
    upsert<T extends BranchStaffUpsertArgs>(args: SelectSubset<T, BranchStaffUpsertArgs<ExtArgs>>): Prisma__BranchStaffClient<$Result.GetResult<Prisma.$BranchStaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BranchStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffCountArgs} args - Arguments to filter BranchStaffs to count.
     * @example
     * // Count the number of BranchStaffs
     * const count = await prisma.branchStaff.count({
     *   where: {
     *     // ... the filter for the BranchStaffs we want to count
     *   }
     * })
    **/
    count<T extends BranchStaffCountArgs>(
      args?: Subset<T, BranchStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BranchStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchStaffAggregateArgs>(args: Subset<T, BranchStaffAggregateArgs>): Prisma.PrismaPromise<GetBranchStaffAggregateType<T>>

    /**
     * Group by BranchStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchStaffGroupByArgs} args - Group by arguments.
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
      T extends BranchStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchStaffGroupByArgs['orderBy'] }
        : { orderBy?: BranchStaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BranchStaff model
   */
  readonly fields: BranchStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BranchStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    branch<T extends BranchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BranchDefaultArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BranchStaff model
   */
  interface BranchStaffFieldRefs {
    readonly id: FieldRef<"BranchStaff", 'Int'>
    readonly branchId: FieldRef<"BranchStaff", 'Int'>
    readonly userId: FieldRef<"BranchStaff", 'Int'>
    readonly assignedAt: FieldRef<"BranchStaff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BranchStaff findUnique
   */
  export type BranchStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter, which BranchStaff to fetch.
     */
    where: BranchStaffWhereUniqueInput
  }

  /**
   * BranchStaff findUniqueOrThrow
   */
  export type BranchStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter, which BranchStaff to fetch.
     */
    where: BranchStaffWhereUniqueInput
  }

  /**
   * BranchStaff findFirst
   */
  export type BranchStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter, which BranchStaff to fetch.
     */
    where?: BranchStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchStaffs to fetch.
     */
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchStaffs.
     */
    cursor?: BranchStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchStaffs.
     */
    distinct?: BranchStaffScalarFieldEnum | BranchStaffScalarFieldEnum[]
  }

  /**
   * BranchStaff findFirstOrThrow
   */
  export type BranchStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter, which BranchStaff to fetch.
     */
    where?: BranchStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchStaffs to fetch.
     */
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BranchStaffs.
     */
    cursor?: BranchStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BranchStaffs.
     */
    distinct?: BranchStaffScalarFieldEnum | BranchStaffScalarFieldEnum[]
  }

  /**
   * BranchStaff findMany
   */
  export type BranchStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter, which BranchStaffs to fetch.
     */
    where?: BranchStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BranchStaffs to fetch.
     */
    orderBy?: BranchStaffOrderByWithRelationInput | BranchStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BranchStaffs.
     */
    cursor?: BranchStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BranchStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BranchStaffs.
     */
    skip?: number
    distinct?: BranchStaffScalarFieldEnum | BranchStaffScalarFieldEnum[]
  }

  /**
   * BranchStaff create
   */
  export type BranchStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * The data needed to create a BranchStaff.
     */
    data: XOR<BranchStaffCreateInput, BranchStaffUncheckedCreateInput>
  }

  /**
   * BranchStaff createMany
   */
  export type BranchStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BranchStaffs.
     */
    data: BranchStaffCreateManyInput | BranchStaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BranchStaff update
   */
  export type BranchStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * The data needed to update a BranchStaff.
     */
    data: XOR<BranchStaffUpdateInput, BranchStaffUncheckedUpdateInput>
    /**
     * Choose, which BranchStaff to update.
     */
    where: BranchStaffWhereUniqueInput
  }

  /**
   * BranchStaff updateMany
   */
  export type BranchStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BranchStaffs.
     */
    data: XOR<BranchStaffUpdateManyMutationInput, BranchStaffUncheckedUpdateManyInput>
    /**
     * Filter which BranchStaffs to update
     */
    where?: BranchStaffWhereInput
    /**
     * Limit how many BranchStaffs to update.
     */
    limit?: number
  }

  /**
   * BranchStaff upsert
   */
  export type BranchStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * The filter to search for the BranchStaff to update in case it exists.
     */
    where: BranchStaffWhereUniqueInput
    /**
     * In case the BranchStaff found by the `where` argument doesn't exist, create a new BranchStaff with this data.
     */
    create: XOR<BranchStaffCreateInput, BranchStaffUncheckedCreateInput>
    /**
     * In case the BranchStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchStaffUpdateInput, BranchStaffUncheckedUpdateInput>
  }

  /**
   * BranchStaff delete
   */
  export type BranchStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
    /**
     * Filter which BranchStaff to delete.
     */
    where: BranchStaffWhereUniqueInput
  }

  /**
   * BranchStaff deleteMany
   */
  export type BranchStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BranchStaffs to delete
     */
    where?: BranchStaffWhereInput
    /**
     * Limit how many BranchStaffs to delete.
     */
    limit?: number
  }

  /**
   * BranchStaff without action
   */
  export type BranchStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchStaff
     */
    select?: BranchStaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BranchStaff
     */
    omit?: BranchStaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchStaffInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    sentAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    sentAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    sentAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    sentAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    sentAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    sentAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    name: string
    email: string
    subject: string | null
    message: string
    sentAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    sentAt?: boolean
  }, ExtArgs["result"]["contact"]>



  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    sentAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "sentAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      subject: string | null
      message: string
      sentAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'Int'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly subject: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly sentAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    title: 'title',
    description: 'description',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    quota: 'quota',
    createdById: 'createdById',
    createdAt: 'createdAt',
    branchId: 'branchId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    registeredAt: 'registeredAt',
    status: 'status'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    branchId: 'branchId',
    title: 'title',
    content: 'content',
    category: 'category',
    publishedAt: 'publishedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const GalleryScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    title: 'title'
  };

  export type GalleryScalarFieldEnum = (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    galleryId: 'galleryId',
    filePath: 'filePath',
    caption: 'caption',
    uploadedAt: 'uploadedAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const BranchStaffScalarFieldEnum: {
    id: 'id',
    branchId: 'branchId',
    userId: 'userId',
    assignedAt: 'assignedAt'
  };

  export type BranchStaffScalarFieldEnum = (typeof BranchStaffScalarFieldEnum)[keyof typeof BranchStaffScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    sentAt: 'sentAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const EventOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    location: 'location'
  };

  export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum]


  export const NewsOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type NewsOrderByRelevanceFieldEnum = (typeof NewsOrderByRelevanceFieldEnum)[keyof typeof NewsOrderByRelevanceFieldEnum]


  export const GalleryOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type GalleryOrderByRelevanceFieldEnum = (typeof GalleryOrderByRelevanceFieldEnum)[keyof typeof GalleryOrderByRelevanceFieldEnum]


  export const PhotoOrderByRelevanceFieldEnum: {
    filePath: 'filePath',
    caption: 'caption'
  };

  export type PhotoOrderByRelevanceFieldEnum = (typeof PhotoOrderByRelevanceFieldEnum)[keyof typeof PhotoOrderByRelevanceFieldEnum]


  export const BranchOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type BranchOrderByRelevanceFieldEnum = (typeof BranchOrderByRelevanceFieldEnum)[keyof typeof BranchOrderByRelevanceFieldEnum]


  export const ContactOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message'
  };

  export type ContactOrderByRelevanceFieldEnum = (typeof ContactOrderByRelevanceFieldEnum)[keyof typeof ContactOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'RoleName'
   */
  export type EnumRoleNameFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleName'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'RegistrationStatus'
   */
  export type EnumRegistrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationStatus'>
    


  /**
   * Reference to a field of type 'NewsCategory'
   */
  export type EnumNewsCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NewsCategory'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: EnumRoleNameFilter<"Role"> | $Enums.RoleName
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: $Enums.RoleName
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: EnumRoleNameWithAggregatesFilter<"Role"> | $Enums.RoleName
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    news?: NewsListRelationFilter
    registrations?: RegistrationListRelationFilter
    createdEvents?: EventListRelationFilter
    branchStaff?: BranchStaffListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    news?: NewsOrderByRelationAggregateInput
    registrations?: RegistrationOrderByRelationAggregateInput
    createdEvents?: EventOrderByRelationAggregateInput
    branchStaff?: BranchStaffOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    news?: NewsListRelationFilter
    registrations?: RegistrationListRelationFilter
    createdEvents?: EventListRelationFilter
    branchStaff?: BranchStaffListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    roleId?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    events?: EventListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    events?: EventOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    events?: EventListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    categoryId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    quota?: IntFilter<"Event"> | number
    createdById?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    branchId?: IntNullableFilter<"Event"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    registrations?: RegistrationListRelationFilter
    galleries?: GalleryListRelationFilter
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    quota?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    branchId?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
    galleries?: GalleryOrderByRelationAggregateInput
    branch?: BranchOrderByWithRelationInput
    _relevance?: EventOrderByRelevanceInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    categoryId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    quota?: IntFilter<"Event"> | number
    createdById?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    branchId?: IntNullableFilter<"Event"> | number | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    registrations?: RegistrationListRelationFilter
    galleries?: GalleryListRelationFilter
    branch?: XOR<BranchNullableScalarRelationFilter, BranchWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    quota?: SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    branchId?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    categoryId?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    quota?: IntWithAggregatesFilter<"Event"> | number
    createdById?: IntNullableWithAggregatesFilter<"Event"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    branchId?: IntNullableWithAggregatesFilter<"Event"> | number | null
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: IntFilter<"Registration"> | number
    eventId?: IntFilter<"Registration"> | number
    userId?: IntFilter<"Registration"> | number
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
    status?: EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    status?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    eventId?: IntFilter<"Registration"> | number
    userId?: IntFilter<"Registration"> | number
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
    status?: EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    status?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registration"> | number
    eventId?: IntWithAggregatesFilter<"Registration"> | number
    userId?: IntWithAggregatesFilter<"Registration"> | number
    registeredAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    status?: EnumRegistrationStatusWithAggregatesFilter<"Registration"> | $Enums.RegistrationStatus
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: IntFilter<"News"> | number
    authorId?: IntFilter<"News"> | number
    branchId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    category?: EnumNewsCategoryFilter<"News"> | $Enums.NewsCategory
    publishedAt?: DateTimeFilter<"News"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    publishedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    _relevance?: NewsOrderByRelevanceInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    authorId?: IntFilter<"News"> | number
    branchId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    category?: EnumNewsCategoryFilter<"News"> | $Enums.NewsCategory
    publishedAt?: DateTimeFilter<"News"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    publishedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"News"> | number
    authorId?: IntWithAggregatesFilter<"News"> | number
    branchId?: IntWithAggregatesFilter<"News"> | number
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    category?: EnumNewsCategoryWithAggregatesFilter<"News"> | $Enums.NewsCategory
    publishedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    id?: IntFilter<"Gallery"> | number
    eventId?: IntFilter<"Gallery"> | number
    title?: StringNullableFilter<"Gallery"> | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    photos?: PhotoListRelationFilter
  }

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    title?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    photos?: PhotoOrderByRelationAggregateInput
    _relevance?: GalleryOrderByRelevanceInput
  }

  export type GalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GalleryWhereInput | GalleryWhereInput[]
    OR?: GalleryWhereInput[]
    NOT?: GalleryWhereInput | GalleryWhereInput[]
    eventId?: IntFilter<"Gallery"> | number
    title?: StringNullableFilter<"Gallery"> | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    photos?: PhotoListRelationFilter
  }, "id">

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    title?: SortOrderInput | SortOrder
    _count?: GalleryCountOrderByAggregateInput
    _avg?: GalleryAvgOrderByAggregateInput
    _max?: GalleryMaxOrderByAggregateInput
    _min?: GalleryMinOrderByAggregateInput
    _sum?: GallerySumOrderByAggregateInput
  }

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    OR?: GalleryScalarWhereWithAggregatesInput[]
    NOT?: GalleryScalarWhereWithAggregatesInput | GalleryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gallery"> | number
    eventId?: IntWithAggregatesFilter<"Gallery"> | number
    title?: StringNullableWithAggregatesFilter<"Gallery"> | string | null
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    galleryId?: IntFilter<"Photo"> | number
    filePath?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    uploadedAt?: DateTimeFilter<"Photo"> | Date | string
    gallery?: XOR<GalleryScalarRelationFilter, GalleryWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    galleryId?: SortOrder
    filePath?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    gallery?: GalleryOrderByWithRelationInput
    _relevance?: PhotoOrderByRelevanceInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    galleryId?: IntFilter<"Photo"> | number
    filePath?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    uploadedAt?: DateTimeFilter<"Photo"> | Date | string
    gallery?: XOR<GalleryScalarRelationFilter, GalleryWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    galleryId?: SortOrder
    filePath?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploadedAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    galleryId?: IntWithAggregatesFilter<"Photo"> | number
    filePath?: StringWithAggregatesFilter<"Photo"> | string
    caption?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    uploadedAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: IntFilter<"Branch"> | number
    name?: StringFilter<"Branch"> | string
    description?: StringNullableFilter<"Branch"> | string | null
    news?: NewsListRelationFilter
    branchStaff?: BranchStaffListRelationFilter
    events?: EventListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
    branchStaff?: BranchStaffOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    _relevance?: BranchOrderByRelevanceInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    description?: StringNullableFilter<"Branch"> | string | null
    news?: NewsListRelationFilter
    branchStaff?: BranchStaffListRelationFilter
    events?: EventListRelationFilter
  }, "id" | "name">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: BranchCountOrderByAggregateInput
    _avg?: BranchAvgOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
    _sum?: BranchSumOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Branch"> | number
    name?: StringWithAggregatesFilter<"Branch"> | string
    description?: StringNullableWithAggregatesFilter<"Branch"> | string | null
  }

  export type BranchStaffWhereInput = {
    AND?: BranchStaffWhereInput | BranchStaffWhereInput[]
    OR?: BranchStaffWhereInput[]
    NOT?: BranchStaffWhereInput | BranchStaffWhereInput[]
    id?: IntFilter<"BranchStaff"> | number
    branchId?: IntFilter<"BranchStaff"> | number
    userId?: IntFilter<"BranchStaff"> | number
    assignedAt?: DateTimeFilter<"BranchStaff"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BranchStaffOrderByWithRelationInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    branch?: BranchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BranchStaffWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    branchId_userId?: BranchStaffBranchIdUserIdCompoundUniqueInput
    AND?: BranchStaffWhereInput | BranchStaffWhereInput[]
    OR?: BranchStaffWhereInput[]
    NOT?: BranchStaffWhereInput | BranchStaffWhereInput[]
    branchId?: IntFilter<"BranchStaff"> | number
    userId?: IntFilter<"BranchStaff"> | number
    assignedAt?: DateTimeFilter<"BranchStaff"> | Date | string
    branch?: XOR<BranchScalarRelationFilter, BranchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "branchId_userId">

  export type BranchStaffOrderByWithAggregationInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
    _count?: BranchStaffCountOrderByAggregateInput
    _avg?: BranchStaffAvgOrderByAggregateInput
    _max?: BranchStaffMaxOrderByAggregateInput
    _min?: BranchStaffMinOrderByAggregateInput
    _sum?: BranchStaffSumOrderByAggregateInput
  }

  export type BranchStaffScalarWhereWithAggregatesInput = {
    AND?: BranchStaffScalarWhereWithAggregatesInput | BranchStaffScalarWhereWithAggregatesInput[]
    OR?: BranchStaffScalarWhereWithAggregatesInput[]
    NOT?: BranchStaffScalarWhereWithAggregatesInput | BranchStaffScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BranchStaff"> | number
    branchId?: IntWithAggregatesFilter<"BranchStaff"> | number
    userId?: IntWithAggregatesFilter<"BranchStaff"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"BranchStaff"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: IntFilter<"Contact"> | number
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    sentAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    _relevance?: ContactOrderByRelevanceInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    subject?: StringNullableFilter<"Contact"> | string | null
    message?: StringFilter<"Contact"> | string
    sentAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    sentAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Contact"> | number
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    subject?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    message?: StringWithAggregatesFilter<"Contact"> | string
    sentAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type RoleCreateInput = {
    name: $Enums.RoleName
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: $Enums.RoleName
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: $Enums.RoleName
  }

  export type RoleUpdateManyMutationInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    events?: EventCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    events?: EventUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    events?: EventUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    events?: EventUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutEventsInput
    createdBy?: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    galleries?: GalleryCreateNestedManyWithoutEventInput
    branch?: BranchCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEventsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    galleries?: GalleryUpdateManyWithoutEventNestedInput
    branch?: BranchUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RegistrationCreateInput = {
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
    event: EventCreateNestedOneWithoutRegistrationsInput
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: number
    eventId: number
    userId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type RegistrationUpdateInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type RegistrationCreateManyInput = {
    id?: number
    eventId: number
    userId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type RegistrationUpdateManyMutationInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type NewsCreateInput = {
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsInput
    branch: BranchCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: number
    authorId: number
    branchId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type NewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    branch?: BranchUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: number
    authorId: number
    branchId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryCreateInput = {
    title?: string | null
    event: EventCreateNestedOneWithoutGalleriesInput
    photos?: PhotoCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUncheckedCreateInput = {
    id?: number
    eventId: number
    title?: string | null
    photos?: PhotoUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneRequiredWithoutGalleriesNestedInput
    photos?: PhotoUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryCreateManyInput = {
    id?: number
    eventId: number
    title?: string | null
  }

  export type GalleryUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateInput = {
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
    gallery: GalleryCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    galleryId: number
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type PhotoUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: GalleryUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    galleryId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id?: number
    galleryId: number
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    galleryId?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchCreateInput = {
    name: string
    description?: string | null
    news?: NewsCreateNestedManyWithoutBranchInput
    branchStaff?: BranchStaffCreateNestedManyWithoutBranchInput
    events?: EventCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    news?: NewsUncheckedCreateNestedManyWithoutBranchInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutBranchInput
    events?: EventUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUpdateManyWithoutBranchNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutBranchNestedInput
    events?: EventUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUncheckedUpdateManyWithoutBranchNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutBranchNestedInput
    events?: EventUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type BranchUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchStaffCreateInput = {
    assignedAt?: Date | string
    branch: BranchCreateNestedOneWithoutBranchStaffInput
    user: UserCreateNestedOneWithoutBranchStaffInput
  }

  export type BranchStaffUncheckedCreateInput = {
    id?: number
    branchId: number
    userId: number
    assignedAt?: Date | string
  }

  export type BranchStaffUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutBranchStaffNestedInput
    user?: UserUpdateOneRequiredWithoutBranchStaffNestedInput
  }

  export type BranchStaffUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchStaffCreateManyInput = {
    id?: number
    branchId: number
    userId: number
    assignedAt?: Date | string
  }

  export type BranchStaffUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchStaffUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    name: string
    email: string
    subject?: string | null
    message: string
    sentAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    subject?: string | null
    message: string
    sentAt?: Date | string
  }

  export type ContactUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: number
    name: string
    email: string
    subject?: string | null
    message: string
    sentAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[]
    notIn?: $Enums.RoleName[]
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[]
    notIn?: $Enums.RoleName[]
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type BranchStaffListRelationFilter = {
    every?: BranchStaffWhereInput
    some?: BranchStaffWhereInput
    none?: BranchStaffWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchStaffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GalleryListRelationFilter = {
    every?: GalleryWhereInput
    some?: GalleryWhereInput
    none?: GalleryWhereInput
  }

  export type BranchNullableScalarRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type GalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelevanceInput = {
    fields: EventOrderByRelevanceFieldEnum | EventOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    quota?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    branchId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    quota?: SortOrder
    createdById?: SortOrder
    branchId?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    quota?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    branchId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    quota?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    branchId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    quota?: SortOrder
    createdById?: SortOrder
    branchId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[]
    notIn?: $Enums.RegistrationStatus[]
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    status?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    status?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    registeredAt?: SortOrder
    status?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
  }

  export type EnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[]
    notIn?: $Enums.RegistrationStatus[]
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type EnumNewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[]
    notIn?: $Enums.NewsCategory[]
    not?: NestedEnumNewsCategoryFilter<$PrismaModel> | $Enums.NewsCategory
  }

  export type BranchScalarRelationFilter = {
    is?: BranchWhereInput
    isNot?: BranchWhereInput
  }

  export type NewsOrderByRelevanceInput = {
    fields: NewsOrderByRelevanceFieldEnum | NewsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    publishedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    publishedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    category?: SortOrder
    publishedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    branchId?: SortOrder
  }

  export type EnumNewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[]
    notIn?: $Enums.NewsCategory[]
    not?: NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NewsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumNewsCategoryFilter<$PrismaModel>
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GalleryOrderByRelevanceInput = {
    fields: GalleryOrderByRelevanceFieldEnum | GalleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    title?: SortOrder
  }

  export type GalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    title?: SortOrder
  }

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    title?: SortOrder
  }

  export type GallerySumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type GalleryScalarRelationFilter = {
    is?: GalleryWhereInput
    isNot?: GalleryWhereInput
  }

  export type PhotoOrderByRelevanceInput = {
    fields: PhotoOrderByRelevanceFieldEnum | PhotoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    filePath?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    filePath?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
    filePath?: SortOrder
    caption?: SortOrder
    uploadedAt?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    galleryId?: SortOrder
  }

  export type BranchOrderByRelevanceInput = {
    fields: BranchOrderByRelevanceFieldEnum | BranchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BranchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type BranchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BranchStaffBranchIdUserIdCompoundUniqueInput = {
    branchId: number
    userId: number
  }

  export type BranchStaffCountOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BranchStaffAvgOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
  }

  export type BranchStaffMaxOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BranchStaffMinOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BranchStaffSumOrderByAggregateInput = {
    id?: SortOrder
    branchId?: SortOrder
    userId?: SortOrder
  }

  export type ContactOrderByRelevanceInput = {
    fields: ContactOrderByRelevanceFieldEnum | ContactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    sentAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumRoleNameFieldUpdateOperationsInput = {
    set?: $Enums.RoleName
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BranchStaffCreateNestedManyWithoutUserInput = {
    create?: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput> | BranchStaffCreateWithoutUserInput[] | BranchStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutUserInput | BranchStaffCreateOrConnectWithoutUserInput[]
    createMany?: BranchStaffCreateManyUserInputEnvelope
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type BranchStaffUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput> | BranchStaffCreateWithoutUserInput[] | BranchStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutUserInput | BranchStaffCreateOrConnectWithoutUserInput[]
    createMany?: BranchStaffCreateManyUserInputEnvelope
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type EventUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BranchStaffUpdateManyWithoutUserNestedInput = {
    create?: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput> | BranchStaffCreateWithoutUserInput[] | BranchStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutUserInput | BranchStaffCreateOrConnectWithoutUserInput[]
    upsert?: BranchStaffUpsertWithWhereUniqueWithoutUserInput | BranchStaffUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BranchStaffCreateManyUserInputEnvelope
    set?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    disconnect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    delete?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    update?: BranchStaffUpdateWithWhereUniqueWithoutUserInput | BranchStaffUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BranchStaffUpdateManyWithWhereWithoutUserInput | BranchStaffUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput> | EventCreateWithoutCreatedByInput[] | EventUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatedByInput | EventCreateOrConnectWithoutCreatedByInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatedByInput | EventUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: EventCreateManyCreatedByInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatedByInput | EventUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatedByInput | EventUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BranchStaffUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput> | BranchStaffCreateWithoutUserInput[] | BranchStaffUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutUserInput | BranchStaffCreateOrConnectWithoutUserInput[]
    upsert?: BranchStaffUpsertWithWhereUniqueWithoutUserInput | BranchStaffUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BranchStaffCreateManyUserInputEnvelope
    set?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    disconnect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    delete?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    update?: BranchStaffUpdateWithWhereUniqueWithoutUserInput | BranchStaffUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BranchStaffUpdateManyWithWhereWithoutUserInput | BranchStaffUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoryInput | EventUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoryInput | EventUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoryInput | EventUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput> | EventCreateWithoutCategoryInput[] | EventUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCategoryInput | EventCreateOrConnectWithoutCategoryInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCategoryInput | EventUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCreateManyCategoryInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCategoryInput | EventUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCategoryInput | EventUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutEventsInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedEventsInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    connect?: UserWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type GalleryCreateNestedManyWithoutEventInput = {
    create?: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput> | GalleryCreateWithoutEventInput[] | GalleryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutEventInput | GalleryCreateOrConnectWithoutEventInput[]
    createMany?: GalleryCreateManyEventInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type BranchCreateNestedOneWithoutEventsInput = {
    create?: XOR<BranchCreateWithoutEventsInput, BranchUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEventsInput
    connect?: BranchWhereUniqueInput
  }

  export type RegistrationUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type GalleryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput> | GalleryCreateWithoutEventInput[] | GalleryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutEventInput | GalleryCreateOrConnectWithoutEventInput[]
    createMany?: GalleryCreateManyEventInputEnvelope
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventsInput
    upsert?: CategoryUpsertWithoutEventsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutEventsInput, CategoryUpdateWithoutEventsInput>, CategoryUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutCreatedEventsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedEventsInput
    upsert?: UserUpsertWithoutCreatedEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedEventsInput, UserUpdateWithoutCreatedEventsInput>, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type RegistrationUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type GalleryUpdateManyWithoutEventNestedInput = {
    create?: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput> | GalleryCreateWithoutEventInput[] | GalleryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutEventInput | GalleryCreateOrConnectWithoutEventInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutEventInput | GalleryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GalleryCreateManyEventInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutEventInput | GalleryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutEventInput | GalleryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type BranchUpdateOneWithoutEventsNestedInput = {
    create?: XOR<BranchCreateWithoutEventsInput, BranchUncheckedCreateWithoutEventsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutEventsInput
    upsert?: BranchUpsertWithoutEventsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutEventsInput, BranchUpdateWithoutEventsInput>, BranchUncheckedUpdateWithoutEventsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistrationUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput> | RegistrationCreateWithoutEventInput[] | RegistrationUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutEventInput | RegistrationCreateOrConnectWithoutEventInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutEventInput | RegistrationUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RegistrationCreateManyEventInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutEventInput | RegistrationUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutEventInput | RegistrationUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type GalleryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput> | GalleryCreateWithoutEventInput[] | GalleryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: GalleryCreateOrConnectWithoutEventInput | GalleryCreateOrConnectWithoutEventInput[]
    upsert?: GalleryUpsertWithWhereUniqueWithoutEventInput | GalleryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: GalleryCreateManyEventInputEnvelope
    set?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    disconnect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    delete?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    connect?: GalleryWhereUniqueInput | GalleryWhereUniqueInput[]
    update?: GalleryUpdateWithWhereUniqueWithoutEventInput | GalleryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: GalleryUpdateManyWithWhereWithoutEventInput | GalleryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRegistrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationStatus
  }

  export type EventUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: EventCreateOrConnectWithoutRegistrationsInput
    upsert?: EventUpsertWithoutRegistrationsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRegistrationsInput, EventUpdateWithoutRegistrationsInput>, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutNewsInput = {
    create?: XOR<BranchCreateWithoutNewsInput, BranchUncheckedCreateWithoutNewsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutNewsInput
    connect?: BranchWhereUniqueInput
  }

  export type EnumNewsCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NewsCategory
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type BranchUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<BranchCreateWithoutNewsInput, BranchUncheckedCreateWithoutNewsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutNewsInput
    upsert?: BranchUpsertWithoutNewsInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutNewsInput, BranchUpdateWithoutNewsInput>, BranchUncheckedUpdateWithoutNewsInput>
  }

  export type EventCreateNestedOneWithoutGalleriesInput = {
    create?: XOR<EventCreateWithoutGalleriesInput, EventUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutGalleriesInput
    connect?: EventWhereUniqueInput
  }

  export type PhotoCreateNestedManyWithoutGalleryInput = {
    create?: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput> | PhotoCreateWithoutGalleryInput[] | PhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalleryInput | PhotoCreateOrConnectWithoutGalleryInput[]
    createMany?: PhotoCreateManyGalleryInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutGalleryInput = {
    create?: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput> | PhotoCreateWithoutGalleryInput[] | PhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalleryInput | PhotoCreateOrConnectWithoutGalleryInput[]
    createMany?: PhotoCreateManyGalleryInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutGalleriesNestedInput = {
    create?: XOR<EventCreateWithoutGalleriesInput, EventUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: EventCreateOrConnectWithoutGalleriesInput
    upsert?: EventUpsertWithoutGalleriesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutGalleriesInput, EventUpdateWithoutGalleriesInput>, EventUncheckedUpdateWithoutGalleriesInput>
  }

  export type PhotoUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput> | PhotoCreateWithoutGalleryInput[] | PhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalleryInput | PhotoCreateOrConnectWithoutGalleryInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutGalleryInput | PhotoUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: PhotoCreateManyGalleryInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutGalleryInput | PhotoUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutGalleryInput | PhotoUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutGalleryNestedInput = {
    create?: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput> | PhotoCreateWithoutGalleryInput[] | PhotoUncheckedCreateWithoutGalleryInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutGalleryInput | PhotoCreateOrConnectWithoutGalleryInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutGalleryInput | PhotoUpsertWithWhereUniqueWithoutGalleryInput[]
    createMany?: PhotoCreateManyGalleryInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutGalleryInput | PhotoUpdateWithWhereUniqueWithoutGalleryInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutGalleryInput | PhotoUpdateManyWithWhereWithoutGalleryInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type GalleryCreateNestedOneWithoutPhotosInput = {
    create?: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPhotosInput
    connect?: GalleryWhereUniqueInput
  }

  export type GalleryUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: GalleryCreateOrConnectWithoutPhotosInput
    upsert?: GalleryUpsertWithoutPhotosInput
    connect?: GalleryWhereUniqueInput
    update?: XOR<XOR<GalleryUpdateToOneWithWhereWithoutPhotosInput, GalleryUpdateWithoutPhotosInput>, GalleryUncheckedUpdateWithoutPhotosInput>
  }

  export type NewsCreateNestedManyWithoutBranchInput = {
    create?: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput> | NewsCreateWithoutBranchInput[] | NewsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutBranchInput | NewsCreateOrConnectWithoutBranchInput[]
    createMany?: NewsCreateManyBranchInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type BranchStaffCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput> | BranchStaffCreateWithoutBranchInput[] | BranchStaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutBranchInput | BranchStaffCreateOrConnectWithoutBranchInput[]
    createMany?: BranchStaffCreateManyBranchInputEnvelope
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutBranchInput = {
    create?: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput> | EventCreateWithoutBranchInput[] | EventUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBranchInput | EventCreateOrConnectWithoutBranchInput[]
    createMany?: EventCreateManyBranchInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput> | NewsCreateWithoutBranchInput[] | NewsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutBranchInput | NewsCreateOrConnectWithoutBranchInput[]
    createMany?: NewsCreateManyBranchInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type BranchStaffUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput> | BranchStaffCreateWithoutBranchInput[] | BranchStaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutBranchInput | BranchStaffCreateOrConnectWithoutBranchInput[]
    createMany?: BranchStaffCreateManyBranchInputEnvelope
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput> | EventCreateWithoutBranchInput[] | EventUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBranchInput | EventCreateOrConnectWithoutBranchInput[]
    createMany?: EventCreateManyBranchInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutBranchNestedInput = {
    create?: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput> | NewsCreateWithoutBranchInput[] | NewsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutBranchInput | NewsCreateOrConnectWithoutBranchInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutBranchInput | NewsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: NewsCreateManyBranchInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutBranchInput | NewsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutBranchInput | NewsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type BranchStaffUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput> | BranchStaffCreateWithoutBranchInput[] | BranchStaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutBranchInput | BranchStaffCreateOrConnectWithoutBranchInput[]
    upsert?: BranchStaffUpsertWithWhereUniqueWithoutBranchInput | BranchStaffUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchStaffCreateManyBranchInputEnvelope
    set?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    disconnect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    delete?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    update?: BranchStaffUpdateWithWhereUniqueWithoutBranchInput | BranchStaffUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchStaffUpdateManyWithWhereWithoutBranchInput | BranchStaffUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
  }

  export type EventUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput> | EventCreateWithoutBranchInput[] | EventUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBranchInput | EventCreateOrConnectWithoutBranchInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBranchInput | EventUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EventCreateManyBranchInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBranchInput | EventUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBranchInput | EventUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput> | NewsCreateWithoutBranchInput[] | NewsUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutBranchInput | NewsCreateOrConnectWithoutBranchInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutBranchInput | NewsUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: NewsCreateManyBranchInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutBranchInput | NewsUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutBranchInput | NewsUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type BranchStaffUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput> | BranchStaffCreateWithoutBranchInput[] | BranchStaffUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BranchStaffCreateOrConnectWithoutBranchInput | BranchStaffCreateOrConnectWithoutBranchInput[]
    upsert?: BranchStaffUpsertWithWhereUniqueWithoutBranchInput | BranchStaffUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BranchStaffCreateManyBranchInputEnvelope
    set?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    disconnect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    delete?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    connect?: BranchStaffWhereUniqueInput | BranchStaffWhereUniqueInput[]
    update?: BranchStaffUpdateWithWhereUniqueWithoutBranchInput | BranchStaffUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BranchStaffUpdateManyWithWhereWithoutBranchInput | BranchStaffUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput> | EventCreateWithoutBranchInput[] | EventUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: EventCreateOrConnectWithoutBranchInput | EventCreateOrConnectWithoutBranchInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutBranchInput | EventUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: EventCreateManyBranchInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutBranchInput | EventUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: EventUpdateManyWithWhereWithoutBranchInput | EventUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type BranchCreateNestedOneWithoutBranchStaffInput = {
    create?: XOR<BranchCreateWithoutBranchStaffInput, BranchUncheckedCreateWithoutBranchStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchStaffInput
    connect?: BranchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBranchStaffInput = {
    create?: XOR<UserCreateWithoutBranchStaffInput, UserUncheckedCreateWithoutBranchStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchStaffInput
    connect?: UserWhereUniqueInput
  }

  export type BranchUpdateOneRequiredWithoutBranchStaffNestedInput = {
    create?: XOR<BranchCreateWithoutBranchStaffInput, BranchUncheckedCreateWithoutBranchStaffInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBranchStaffInput
    upsert?: BranchUpsertWithoutBranchStaffInput
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutBranchStaffInput, BranchUpdateWithoutBranchStaffInput>, BranchUncheckedUpdateWithoutBranchStaffInput>
  }

  export type UserUpdateOneRequiredWithoutBranchStaffNestedInput = {
    create?: XOR<UserCreateWithoutBranchStaffInput, UserUncheckedCreateWithoutBranchStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutBranchStaffInput
    upsert?: UserUpsertWithoutBranchStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBranchStaffInput, UserUpdateWithoutBranchStaffInput>, UserUncheckedUpdateWithoutBranchStaffInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleNameFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[]
    notIn?: $Enums.RoleName[]
    not?: NestedEnumRoleNameFilter<$PrismaModel> | $Enums.RoleName
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleNameWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleName | EnumRoleNameFieldRefInput<$PrismaModel>
    in?: $Enums.RoleName[]
    notIn?: $Enums.RoleName[]
    not?: NestedEnumRoleNameWithAggregatesFilter<$PrismaModel> | $Enums.RoleName
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleNameFilter<$PrismaModel>
    _max?: NestedEnumRoleNameFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRegistrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[]
    notIn?: $Enums.RegistrationStatus[]
    not?: NestedEnumRegistrationStatusFilter<$PrismaModel> | $Enums.RegistrationStatus
  }

  export type NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationStatus | EnumRegistrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationStatus[]
    notIn?: $Enums.RegistrationStatus[]
    not?: NestedEnumRegistrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationStatusFilter<$PrismaModel>
    _max?: NestedEnumRegistrationStatusFilter<$PrismaModel>
  }

  export type NestedEnumNewsCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[]
    notIn?: $Enums.NewsCategory[]
    not?: NestedEnumNewsCategoryFilter<$PrismaModel> | $Enums.NewsCategory
  }

  export type NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NewsCategory | EnumNewsCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.NewsCategory[]
    notIn?: $Enums.NewsCategory[]
    not?: NestedEnumNewsCategoryWithAggregatesFilter<$PrismaModel> | $Enums.NewsCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNewsCategoryFilter<$PrismaModel>
    _max?: NestedEnumNewsCategoryFilter<$PrismaModel>
  }

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    roleId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: $Enums.RoleName
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: $Enums.RoleName
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type NewsCreateWithoutAuthorInput = {
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
    branch: BranchCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id?: number
    branchId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationCreateWithoutUserInput = {
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
    event: EventCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateManyUserInputEnvelope = {
    data: RegistrationCreateManyUserInput | RegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    galleries?: GalleryCreateNestedManyWithoutEventInput
    branch?: BranchCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutCreatedByInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    branchId?: number | null
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventCreateManyCreatedByInputEnvelope = {
    data: EventCreateManyCreatedByInput | EventCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BranchStaffCreateWithoutUserInput = {
    assignedAt?: Date | string
    branch: BranchCreateNestedOneWithoutBranchStaffInput
  }

  export type BranchStaffUncheckedCreateWithoutUserInput = {
    id?: number
    branchId: number
    assignedAt?: Date | string
  }

  export type BranchStaffCreateOrConnectWithoutUserInput = {
    where: BranchStaffWhereUniqueInput
    create: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput>
  }

  export type BranchStaffCreateManyUserInputEnvelope = {
    data: BranchStaffCreateManyUserInput | BranchStaffCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleNameFieldUpdateOperationsInput | $Enums.RoleName
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id?: IntFilter<"News"> | number
    authorId?: IntFilter<"News"> | number
    branchId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    category?: EnumNewsCategoryFilter<"News"> | $Enums.NewsCategory
    publishedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: IntFilter<"Registration"> | number
    eventId?: IntFilter<"Registration"> | number
    userId?: IntFilter<"Registration"> | number
    registeredAt?: DateTimeFilter<"Registration"> | Date | string
    status?: EnumRegistrationStatusFilter<"Registration"> | $Enums.RegistrationStatus
  }

  export type EventUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
    create: XOR<EventCreateWithoutCreatedByInput, EventUncheckedCreateWithoutCreatedByInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatedByInput, EventUncheckedUpdateWithoutCreatedByInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatedByInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    categoryId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    location?: StringNullableFilter<"Event"> | string | null
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    quota?: IntFilter<"Event"> | number
    createdById?: IntNullableFilter<"Event"> | number | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    branchId?: IntNullableFilter<"Event"> | number | null
  }

  export type BranchStaffUpsertWithWhereUniqueWithoutUserInput = {
    where: BranchStaffWhereUniqueInput
    update: XOR<BranchStaffUpdateWithoutUserInput, BranchStaffUncheckedUpdateWithoutUserInput>
    create: XOR<BranchStaffCreateWithoutUserInput, BranchStaffUncheckedCreateWithoutUserInput>
  }

  export type BranchStaffUpdateWithWhereUniqueWithoutUserInput = {
    where: BranchStaffWhereUniqueInput
    data: XOR<BranchStaffUpdateWithoutUserInput, BranchStaffUncheckedUpdateWithoutUserInput>
  }

  export type BranchStaffUpdateManyWithWhereWithoutUserInput = {
    where: BranchStaffScalarWhereInput
    data: XOR<BranchStaffUpdateManyMutationInput, BranchStaffUncheckedUpdateManyWithoutUserInput>
  }

  export type BranchStaffScalarWhereInput = {
    AND?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
    OR?: BranchStaffScalarWhereInput[]
    NOT?: BranchStaffScalarWhereInput | BranchStaffScalarWhereInput[]
    id?: IntFilter<"BranchStaff"> | number
    branchId?: IntFilter<"BranchStaff"> | number
    userId?: IntFilter<"BranchStaff"> | number
    assignedAt?: DateTimeFilter<"BranchStaff"> | Date | string
  }

  export type EventCreateWithoutCategoryInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    galleries?: GalleryCreateNestedManyWithoutEventInput
    branch?: BranchCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutCategoryInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCategoryInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput>
  }

  export type EventCreateManyCategoryInputEnvelope = {
    data: EventCreateManyCategoryInput | EventCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCategoryInput, EventUncheckedUpdateWithoutCategoryInput>
    create: XOR<EventCreateWithoutCategoryInput, EventUncheckedCreateWithoutCategoryInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCategoryInput, EventUncheckedUpdateWithoutCategoryInput>
  }

  export type EventUpdateManyWithWhereWithoutCategoryInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryCreateWithoutEventsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutEventsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutCreatedEventsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    branchStaff?: BranchStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedEventsInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
  }

  export type RegistrationCreateWithoutEventInput = {
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type RegistrationCreateOrConnectWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationCreateManyEventInputEnvelope = {
    data: RegistrationCreateManyEventInput | RegistrationCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type GalleryCreateWithoutEventInput = {
    title?: string | null
    photos?: PhotoCreateNestedManyWithoutGalleryInput
  }

  export type GalleryUncheckedCreateWithoutEventInput = {
    id?: number
    title?: string | null
    photos?: PhotoUncheckedCreateNestedManyWithoutGalleryInput
  }

  export type GalleryCreateOrConnectWithoutEventInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput>
  }

  export type GalleryCreateManyEventInputEnvelope = {
    data: GalleryCreateManyEventInput | GalleryCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type BranchCreateWithoutEventsInput = {
    name: string
    description?: string | null
    news?: NewsCreateNestedManyWithoutBranchInput
    branchStaff?: BranchStaffCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    description?: string | null
    news?: NewsUncheckedCreateNestedManyWithoutBranchInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutEventsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutEventsInput, BranchUncheckedCreateWithoutEventsInput>
  }

  export type CategoryUpsertWithoutEventsInput = {
    update: XOR<CategoryUpdateWithoutEventsInput, CategoryUncheckedUpdateWithoutEventsInput>
    create: XOR<CategoryCreateWithoutEventsInput, CategoryUncheckedCreateWithoutEventsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutEventsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutEventsInput, CategoryUncheckedUpdateWithoutEventsInput>
  }

  export type CategoryUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutCreatedEventsInput = {
    update: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
    create: XOR<UserCreateWithoutCreatedEventsInput, UserUncheckedCreateWithoutCreatedEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedEventsInput, UserUncheckedUpdateWithoutCreatedEventsInput>
  }

  export type UserUpdateWithoutCreatedEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RegistrationUpsertWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
    create: XOR<RegistrationCreateWithoutEventInput, RegistrationUncheckedCreateWithoutEventInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutEventInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutEventInput, RegistrationUncheckedUpdateWithoutEventInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutEventInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutEventInput>
  }

  export type GalleryUpsertWithWhereUniqueWithoutEventInput = {
    where: GalleryWhereUniqueInput
    update: XOR<GalleryUpdateWithoutEventInput, GalleryUncheckedUpdateWithoutEventInput>
    create: XOR<GalleryCreateWithoutEventInput, GalleryUncheckedCreateWithoutEventInput>
  }

  export type GalleryUpdateWithWhereUniqueWithoutEventInput = {
    where: GalleryWhereUniqueInput
    data: XOR<GalleryUpdateWithoutEventInput, GalleryUncheckedUpdateWithoutEventInput>
  }

  export type GalleryUpdateManyWithWhereWithoutEventInput = {
    where: GalleryScalarWhereInput
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyWithoutEventInput>
  }

  export type GalleryScalarWhereInput = {
    AND?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    OR?: GalleryScalarWhereInput[]
    NOT?: GalleryScalarWhereInput | GalleryScalarWhereInput[]
    id?: IntFilter<"Gallery"> | number
    eventId?: IntFilter<"Gallery"> | number
    title?: StringNullableFilter<"Gallery"> | string | null
  }

  export type BranchUpsertWithoutEventsInput = {
    update: XOR<BranchUpdateWithoutEventsInput, BranchUncheckedUpdateWithoutEventsInput>
    create: XOR<BranchCreateWithoutEventsInput, BranchUncheckedCreateWithoutEventsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutEventsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutEventsInput, BranchUncheckedUpdateWithoutEventsInput>
  }

  export type BranchUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUpdateManyWithoutBranchNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUncheckedUpdateManyWithoutBranchNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type EventCreateWithoutRegistrationsInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutEventsInput
    createdBy?: UserCreateNestedOneWithoutCreatedEventsInput
    galleries?: GalleryCreateNestedManyWithoutEventInput
    branch?: BranchCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
    galleries?: GalleryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutRegistrationsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type EventUpsertWithoutRegistrationsInput = {
    update: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<EventCreateWithoutRegistrationsInput, EventUncheckedCreateWithoutRegistrationsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRegistrationsInput, EventUncheckedUpdateWithoutRegistrationsInput>
  }

  export type EventUpdateWithoutRegistrationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEventsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedEventsNestedInput
    galleries?: GalleryUpdateManyWithoutEventNestedInput
    branch?: BranchUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    galleries?: GalleryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNewsInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type BranchCreateWithoutNewsInput = {
    name: string
    description?: string | null
    branchStaff?: BranchStaffCreateNestedManyWithoutBranchInput
    events?: EventCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutNewsInput = {
    id?: number
    name: string
    description?: string | null
    branchStaff?: BranchStaffUncheckedCreateNestedManyWithoutBranchInput
    events?: EventUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutNewsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutNewsInput, BranchUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BranchUpsertWithoutNewsInput = {
    update: XOR<BranchUpdateWithoutNewsInput, BranchUncheckedUpdateWithoutNewsInput>
    create: XOR<BranchCreateWithoutNewsInput, BranchUncheckedCreateWithoutNewsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutNewsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutNewsInput, BranchUncheckedUpdateWithoutNewsInput>
  }

  export type BranchUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branchStaff?: BranchStaffUpdateManyWithoutBranchNestedInput
    events?: EventUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutNewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutBranchNestedInput
    events?: EventUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type EventCreateWithoutGalleriesInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutEventsInput
    createdBy?: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    branch?: BranchCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutGalleriesInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutGalleriesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutGalleriesInput, EventUncheckedCreateWithoutGalleriesInput>
  }

  export type PhotoCreateWithoutGalleryInput = {
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type PhotoUncheckedCreateWithoutGalleryInput = {
    id?: number
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutGalleryInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput>
  }

  export type PhotoCreateManyGalleryInputEnvelope = {
    data: PhotoCreateManyGalleryInput | PhotoCreateManyGalleryInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutGalleriesInput = {
    update: XOR<EventUpdateWithoutGalleriesInput, EventUncheckedUpdateWithoutGalleriesInput>
    create: XOR<EventCreateWithoutGalleriesInput, EventUncheckedCreateWithoutGalleriesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutGalleriesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutGalleriesInput, EventUncheckedUpdateWithoutGalleriesInput>
  }

  export type EventUpdateWithoutGalleriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEventsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    branch?: BranchUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutGalleriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PhotoUpsertWithWhereUniqueWithoutGalleryInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutGalleryInput, PhotoUncheckedUpdateWithoutGalleryInput>
    create: XOR<PhotoCreateWithoutGalleryInput, PhotoUncheckedCreateWithoutGalleryInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutGalleryInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutGalleryInput, PhotoUncheckedUpdateWithoutGalleryInput>
  }

  export type PhotoUpdateManyWithWhereWithoutGalleryInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutGalleryInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    galleryId?: IntFilter<"Photo"> | number
    filePath?: StringFilter<"Photo"> | string
    caption?: StringNullableFilter<"Photo"> | string | null
    uploadedAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type GalleryCreateWithoutPhotosInput = {
    title?: string | null
    event: EventCreateNestedOneWithoutGalleriesInput
  }

  export type GalleryUncheckedCreateWithoutPhotosInput = {
    id?: number
    eventId: number
    title?: string | null
  }

  export type GalleryCreateOrConnectWithoutPhotosInput = {
    where: GalleryWhereUniqueInput
    create: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
  }

  export type GalleryUpsertWithoutPhotosInput = {
    update: XOR<GalleryUpdateWithoutPhotosInput, GalleryUncheckedUpdateWithoutPhotosInput>
    create: XOR<GalleryCreateWithoutPhotosInput, GalleryUncheckedCreateWithoutPhotosInput>
    where?: GalleryWhereInput
  }

  export type GalleryUpdateToOneWithWhereWithoutPhotosInput = {
    where?: GalleryWhereInput
    data: XOR<GalleryUpdateWithoutPhotosInput, GalleryUncheckedUpdateWithoutPhotosInput>
  }

  export type GalleryUpdateWithoutPhotosInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EventUpdateOneRequiredWithoutGalleriesNestedInput
  }

  export type GalleryUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsCreateWithoutBranchInput = {
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
    author: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutBranchInput = {
    id?: number
    authorId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutBranchInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput>
  }

  export type NewsCreateManyBranchInputEnvelope = {
    data: NewsCreateManyBranchInput | NewsCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type BranchStaffCreateWithoutBranchInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutBranchStaffInput
  }

  export type BranchStaffUncheckedCreateWithoutBranchInput = {
    id?: number
    userId: number
    assignedAt?: Date | string
  }

  export type BranchStaffCreateOrConnectWithoutBranchInput = {
    where: BranchStaffWhereUniqueInput
    create: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput>
  }

  export type BranchStaffCreateManyBranchInputEnvelope = {
    data: BranchStaffCreateManyBranchInput | BranchStaffCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutBranchInput = {
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    category: CategoryCreateNestedOneWithoutEventsInput
    createdBy?: UserCreateNestedOneWithoutCreatedEventsInput
    registrations?: RegistrationCreateNestedManyWithoutEventInput
    galleries?: GalleryCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutBranchInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutEventInput
    galleries?: GalleryUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutBranchInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput>
  }

  export type EventCreateManyBranchInputEnvelope = {
    data: EventCreateManyBranchInput | EventCreateManyBranchInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutBranchInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutBranchInput, NewsUncheckedUpdateWithoutBranchInput>
    create: XOR<NewsCreateWithoutBranchInput, NewsUncheckedCreateWithoutBranchInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutBranchInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutBranchInput, NewsUncheckedUpdateWithoutBranchInput>
  }

  export type NewsUpdateManyWithWhereWithoutBranchInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutBranchInput>
  }

  export type BranchStaffUpsertWithWhereUniqueWithoutBranchInput = {
    where: BranchStaffWhereUniqueInput
    update: XOR<BranchStaffUpdateWithoutBranchInput, BranchStaffUncheckedUpdateWithoutBranchInput>
    create: XOR<BranchStaffCreateWithoutBranchInput, BranchStaffUncheckedCreateWithoutBranchInput>
  }

  export type BranchStaffUpdateWithWhereUniqueWithoutBranchInput = {
    where: BranchStaffWhereUniqueInput
    data: XOR<BranchStaffUpdateWithoutBranchInput, BranchStaffUncheckedUpdateWithoutBranchInput>
  }

  export type BranchStaffUpdateManyWithWhereWithoutBranchInput = {
    where: BranchStaffScalarWhereInput
    data: XOR<BranchStaffUpdateManyMutationInput, BranchStaffUncheckedUpdateManyWithoutBranchInput>
  }

  export type EventUpsertWithWhereUniqueWithoutBranchInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutBranchInput, EventUncheckedUpdateWithoutBranchInput>
    create: XOR<EventCreateWithoutBranchInput, EventUncheckedCreateWithoutBranchInput>
  }

  export type EventUpdateWithWhereUniqueWithoutBranchInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutBranchInput, EventUncheckedUpdateWithoutBranchInput>
  }

  export type EventUpdateManyWithWhereWithoutBranchInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutBranchInput>
  }

  export type BranchCreateWithoutBranchStaffInput = {
    name: string
    description?: string | null
    news?: NewsCreateNestedManyWithoutBranchInput
    events?: EventCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutBranchStaffInput = {
    id?: number
    name: string
    description?: string | null
    news?: NewsUncheckedCreateNestedManyWithoutBranchInput
    events?: EventUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutBranchStaffInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutBranchStaffInput, BranchUncheckedCreateWithoutBranchStaffInput>
  }

  export type UserCreateWithoutBranchStaffInput = {
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    news?: NewsCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
    createdEvents?: EventCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBranchStaffInput = {
    id?: number
    roleId: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
    createdEvents?: EventUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBranchStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchStaffInput, UserUncheckedCreateWithoutBranchStaffInput>
  }

  export type BranchUpsertWithoutBranchStaffInput = {
    update: XOR<BranchUpdateWithoutBranchStaffInput, BranchUncheckedUpdateWithoutBranchStaffInput>
    create: XOR<BranchCreateWithoutBranchStaffInput, BranchUncheckedCreateWithoutBranchStaffInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutBranchStaffInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutBranchStaffInput, BranchUncheckedUpdateWithoutBranchStaffInput>
  }

  export type BranchUpdateWithoutBranchStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUpdateManyWithoutBranchNestedInput
    events?: EventUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutBranchStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    news?: NewsUncheckedUpdateManyWithoutBranchNestedInput
    events?: EventUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserUpsertWithoutBranchStaffInput = {
    update: XOR<UserUpdateWithoutBranchStaffInput, UserUncheckedUpdateWithoutBranchStaffInput>
    create: XOR<UserCreateWithoutBranchStaffInput, UserUncheckedCreateWithoutBranchStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBranchStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBranchStaffInput, UserUncheckedUpdateWithoutBranchStaffInput>
  }

  export type UserUpdateWithoutBranchStaffInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    news?: NewsUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchStaffInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
    createdEvents?: EventUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
    createdEvents?: EventUncheckedUpdateManyWithoutCreatedByNestedInput
    branchStaff?: BranchStaffUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyAuthorInput = {
    id?: number
    branchId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type RegistrationCreateManyUserInput = {
    id?: number
    eventId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type EventCreateManyCreatedByInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdAt?: Date | string
    branchId?: number | null
  }

  export type BranchStaffCreateManyUserInput = {
    id?: number
    branchId: number
    assignedAt?: Date | string
  }

  export type NewsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUpdateWithoutUserInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    event?: EventUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type EventUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    galleries?: GalleryUpdateManyWithoutEventNestedInput
    branch?: BranchUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BranchStaffUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branch?: BranchUpdateOneRequiredWithoutBranchStaffNestedInput
  }

  export type BranchStaffUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchStaffUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    branchId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyCategoryInput = {
    id?: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
    branchId?: number | null
  }

  export type EventUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    galleries?: GalleryUpdateManyWithoutEventNestedInput
    branch?: BranchUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    branchId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RegistrationCreateManyEventInput = {
    id?: number
    userId: number
    registeredAt?: Date | string
    status?: $Enums.RegistrationStatus
  }

  export type GalleryCreateManyEventInput = {
    id?: number
    title?: string | null
  }

  export type RegistrationUpdateWithoutEventInput = {
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type RegistrationUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRegistrationStatusFieldUpdateOperationsInput | $Enums.RegistrationStatus
  }

  export type GalleryUpdateWithoutEventInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: PhotoUncheckedUpdateManyWithoutGalleryNestedInput
  }

  export type GalleryUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhotoCreateManyGalleryInput = {
    id?: number
    filePath: string
    caption?: string | null
    uploadedAt?: Date | string
  }

  export type PhotoUpdateWithoutGalleryInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyBranchInput = {
    id?: number
    authorId: number
    title: string
    content: string
    category?: $Enums.NewsCategory
    publishedAt?: Date | string
  }

  export type BranchStaffCreateManyBranchInput = {
    id?: number
    userId: number
    assignedAt?: Date | string
  }

  export type EventCreateManyBranchInput = {
    id?: number
    categoryId: number
    title: string
    description?: string | null
    location?: string | null
    startDate: Date | string
    endDate: Date | string
    quota?: number
    createdById?: number | null
    createdAt?: Date | string
  }

  export type NewsUpdateWithoutBranchInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    category?: EnumNewsCategoryFieldUpdateOperationsInput | $Enums.NewsCategory
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchStaffUpdateWithoutBranchInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBranchStaffNestedInput
  }

  export type BranchStaffUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BranchStaffUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutBranchInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutEventsNestedInput
    createdBy?: UserUpdateOneWithoutCreatedEventsNestedInput
    registrations?: RegistrationUpdateManyWithoutEventNestedInput
    galleries?: GalleryUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutEventNestedInput
    galleries?: GalleryUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutBranchInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    quota?: IntFieldUpdateOperationsInput | number
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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