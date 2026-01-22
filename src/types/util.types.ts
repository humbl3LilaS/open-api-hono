export const HTTPStatus = {
  OK: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  NotFound: 404,
} as const;

type HttpStatusCode = (typeof HTTPStatus)[keyof typeof HTTPStatus];

type SuccessStatus = Extract<HttpStatusCode, 200 | 201>;
type ErrorStatus = Exclude<HttpStatusCode, SuccessStatus>;

type ActionResponseMap<T> = { [S in SuccessStatus]: { data: T } } & {
  [E in ErrorStatus]: { message: string };
};

export type TActionResponse<
  T,
  S extends keyof ActionResponseMap<T> = keyof ActionResponseMap<T>,
> = {
  [K in S]: { status: K } & ActionResponseMap<T>[K];
}[S];
