interface UpdateRevenueRequestBody {
  label: string;
  amount: number;
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const body = await readBody<UpdateRevenueRequestBody>(event);

  // TODO: Implement runtime validation on body.

  // Validate that 'id' parameter is passed.
  if (id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Parameter "id" is required',
    });
  }

  // Update revenue.
  await revenueStore.save({
    id,
    ...body,
  });
});
