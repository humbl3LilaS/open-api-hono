type ActionResponseMap<T> = {
	200: { data: T };
	201: { data: T };
	400: { message: string };
	401: { message: string };
	404: { message: string };
};

export type TActionResponse<
	T,
	S extends keyof ActionResponseMap<T> = keyof ActionResponseMap<T>,
> = {
	[K in S]: { status: K } & ActionResponseMap<T>[K];
}[S];
