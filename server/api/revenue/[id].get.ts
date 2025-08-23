export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  // Validate that 'id' parameter is passed.
  if (id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Parameter "id" is required',
    });
  }

  // Retrieve revenue.
  const revenue = await revenueStore.find(id);

  // Validate that revenue was found.
  if (revenue === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Revenue not found',
    });
  }

  return revenue;
});
