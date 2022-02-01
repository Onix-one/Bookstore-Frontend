/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Author {
  /** @format int32 */
  id?: number;
  firstName?: string | null;
  secondName?: string | null;

  /** @format date-time */
  dateOfBirth?: string;
  biografy?: string | null;
  nationality?: string | null;
  books?: Book[] | null;
  genreOfBooks?: GenreOfBook[] | null;
}

export interface AuthorDTO {
  /** @format int32 */
  id?: number;
  firstName?: string | null;
  secondName?: string | null;

  /** @format date-time */
  dateOfBirth?: string;
  biografy?: string | null;
  nationality?: string | null;
  books?: BookDTO[] | null;
  genresOfBook?: GenreOfBookDTO[] | null;
}

export interface AuthorNamesAndIdInfo {
  /** @format int32 */
  id?: number;
  fullName?: string | null;
}

export type AuthorsForGenreFiltr = object;

export interface Book {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format int32 */
  rating?: number;

  /** @format double */
  price?: number;
  description?: string | null;
  bookUrl?: string | null;
  genreOfBooks?: GenreOfBook[] | null;
  authors?: Author[] | null;
  images?: BookImage[] | null;
  buyers?: Customer[] | null;
  customersWantedToBuy?: Customer[] | null;
  fans?: Customer[] | null;
}

export interface BookDTO {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format int32 */
  rating?: number;

  /** @format double */
  price?: number;
  description?: string | null;
  genresOfBook?: GenreOfBook[] | null;
  authors?: Author[] | null;
  images?: BookImage[] | null;
  buyers?: Customer[] | null;
  customersWantedToBuy?: Customer[] | null;
  fans?: Customer[] | null;
}

export interface BookImage {
  /** @format int32 */
  id?: number;
  imageUrl?: string | null;
  book?: Book;
}

export interface BookImageDTO {
  /** @format int32 */
  id?: number;

  /** @format binary */
  image?: File | null;
}

export interface BooksAfterFilterModel {
  name?: string | null;

  /** @format int32 */
  rating?: number;

  /** @format double */
  price?: number;
  description?: string | null;
  bookUrl?: string | null;
  genreOfBooks?: GenreOfBook[] | null;
  authors?: Author[] | null;
  images?: BookImage[] | null;
}

export interface BooksByGenreFiltr {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format int32 */
  rating?: number;

  /** @format double */
  price?: number;
  description?: string | null;
  genresOfBook?: AuthorsForGenreFiltr[] | null;
  images?: BookImageDTO[] | null;
}

export interface BooksForAuthorFilter {
  /** @format int32 */
  id?: number;
  name?: string | null;

  /** @format int32 */
  rating?: number;

  /** @format double */
  price?: number;
  description?: string | null;
  genresOfBook?: GenreOfBookForAuthorFiltr[] | null;
  images?: BookImageDTO[] | null;
}

export interface CreateNewAuthorModel {
  firstName: string;
  secondName: string;

  /** @format date-time */
  dateOfBirth?: string | null;
  biografy: string;
  nationality: string;
  genresOfBookId: number[];
}

export interface CreateNewBookModel {
  name?: string | null;

  /** @format double */
  price?: number;
  description?: string | null;
  imageFiles?: File[] | null;

  /** @format binary */
  book?: File | null;
  genresOfBookId?: number[] | null;
  authorsId?: number[] | null;
}

export interface CreateNewGenreOfBookModel {
  genre?: string | null;
  description?: string | null;
}

export interface Customer {
  /** @format int32 */
  id?: number;

  /** @format int32 */
  bonuses?: number;
  broughtBooks?: Book[] | null;
  booksReadyToBuy?: Book[] | null;
  favoriteBooks?: Book[] | null;
  favoriteTypes?: GenreOfBook[] | null;
}

export interface FilterForBookModel {
  authorsId?: number[] | null;
  genresId?: number[] | null;
  cost?: number[] | null;

  /** @format int32 */
  rating?: number | null;
}

export interface GenreOfBook {
  /** @format int32 */
  id?: number;
  genre?: string | null;
  description?: string | null;
  books?: Book[] | null;
  fansOfGenres?: Customer[] | null;
  authors?: Author[] | null;
}

export interface GenreOfBookDTO {
  /** @format int32 */
  id?: number;
  type?: string | null;
  description?: string | null;
}

export interface GenreOfBookForAuthorFiltr {
  genre?: string | null;

  /** @format int32 */
  id?: number;
}

export interface GetAllGenreModel {
  /** @format int32 */
  id?: number;
  genre?: string | null;
  description?: string | null;
}

export interface GetMaxAndMinPriceInfo {
  /** @format double */
  minPrice?: number;

  /** @format double */
  maxPrice?: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Bookstore.IdentityApi
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Author
     * @name AuthorCreateCreate
     * @request POST:/api/Author/Create
     * @secure
     */
    authorCreateCreate: (data: CreateNewAuthorModel, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Author/Create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name AuthorEditCreate
     * @request POST:/api/Author/Edit
     * @secure
     */
    authorEditCreate: (data: AuthorDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Author/Edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name AuthorDeleteDelete
     * @request DELETE:/api/Author/Delete
     * @secure
     */
    authorDeleteDelete: (query?: { authorId?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Author/Delete`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name AuthorGetAllList
     * @request GET:/api/Author/GetAll
     * @secure
     */
    authorGetAllList: (params: RequestParams = {}) =>
      this.request<AuthorDTO, any>({
        path: `/api/Author/GetAll`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name AuthorGetAllAuthorsNameAndIdList
     * @request GET:/api/Author/GetAllAuthorsNameAndId
     * @secure
     */
    authorGetAllAuthorsNameAndIdList: (params: RequestParams = {}) =>
      this.request<AuthorNamesAndIdInfo, any>({
        path: `/api/Author/GetAllAuthorsNameAndId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Author
     * @name AuthorGetAuthorByIdList
     * @request GET:/api/Author/GetAuthorById
     * @secure
     */
    authorGetAuthorByIdList: (query?: { authorId?: number }, params: RequestParams = {}) =>
      this.request<AuthorDTO, any>({
        path: `/api/Author/GetAuthorById`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookCreate
     * @request POST:/api/Book
     * @secure
     */
    bookCreate: (data: CreateNewBookModel, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Book`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookDelete
     * @request DELETE:/api/Book/{bookId}
     * @secure
     */
    bookDelete: (bookId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Book/${bookId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookDetail
     * @request GET:/api/Book/{bookId}
     * @secure
     */
    bookDetail: (bookId: number, params: RequestParams = {}) =>
      this.request<BookDTO, any>({
        path: `/api/Book/${bookId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookDownloadDetail
     * @request GET:/api/Book/{bookId}/download
     * @secure
     */
    bookDownloadDetail: (bookId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/Book/${bookId}/download`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookMinmaxPriceCreate
     * @request POST:/api/Book/minmax-price
     * @secure
     */
    bookMinmaxPriceCreate: (params: RequestParams = {}) =>
      this.request<GetMaxAndMinPriceInfo, any>({
        path: `/api/Book/minmax-price`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookFilterByAuthorCreate
     * @request POST:/api/Book/filterByAuthor/{authorId}
     * @secure
     */
    bookFilterByAuthorCreate: (authorId: number, params: RequestParams = {}) =>
      this.request<BooksForAuthorFilter[], any>({
        path: `/api/Book/filterByAuthor/${authorId}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookFilterByGenresCreate
     * @request POST:/api/Book/filterByGenres
     * @secure
     */
    bookFilterByGenresCreate: (data: number[], params: RequestParams = {}) =>
      this.request<BooksByGenreFiltr[], any>({
        path: `/api/Book/filterByGenres`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Book
     * @name BookFilterCreate
     * @request POST:/api/Book/filter
     * @secure
     */
    bookFilterCreate: (data: FilterForBookModel, params: RequestParams = {}) =>
      this.request<BooksAfterFilterModel[], any>({
        path: `/api/Book/filter`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BookImage
     * @name BookImageAddImageToBookCreate
     * @request POST:/api/BookImage/AddImageToBook
     * @secure
     */
    bookImageAddImageToBookCreate: (data: File[], query?: { bookId?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/BookImage/AddImageToBook`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BookImage
     * @name BookImageDeleteImageDelete
     * @request DELETE:/api/BookImage/DeleteImage
     * @secure
     */
    bookImageDeleteImageDelete: (query?: { imageId?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/BookImage/DeleteImage`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GenreOfBook
     * @name GenreOfBookCreateCreate
     * @request POST:/api/GenreOfBook/Create
     * @secure
     */
    genreOfBookCreateCreate: (data: CreateNewGenreOfBookModel, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/GenreOfBook/Create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GenreOfBook
     * @name GenreOfBookEditCreate
     * @request POST:/api/GenreOfBook/Edit
     * @secure
     */
    genreOfBookEditCreate: (data: GenreOfBookDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/GenreOfBook/Edit`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GenreOfBook
     * @name GenreOfBookDeleteDelete
     * @request DELETE:/api/GenreOfBook/Delete
     * @secure
     */
    genreOfBookDeleteDelete: (query?: { genreId?: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/GenreOfBook/Delete`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GenreOfBook
     * @name GenreOfBookGetAllList
     * @request GET:/api/GenreOfBook/GetAll
     * @secure
     */
    genreOfBookGetAllList: (params: RequestParams = {}) =>
      this.request<GetAllGenreModel, any>({
        path: `/api/GenreOfBook/GetAll`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GenreOfBook
     * @name GenreOfBookGetGenreOfBookByIdList
     * @request GET:/api/GenreOfBook/GetGenreOfBookById
     * @secure
     */
    genreOfBookGetGenreOfBookByIdList: (query?: { genreId?: number }, params: RequestParams = {}) =>
      this.request<AuthorDTO, any>({
        path: `/api/GenreOfBook/GetGenreOfBookById`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
