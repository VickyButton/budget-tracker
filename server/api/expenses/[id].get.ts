export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  // Validate that 'id' parameter is passed.
  if (id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Parameter "id" is required',
    });
  }

  // Retrieve expense.
  const expense = await expenseStore.find(id);

  // Validate that expense was found.
  if (expense === undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Expense not found',
    });
  }

  return expense;
});
