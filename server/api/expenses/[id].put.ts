interface UpdateExpenseRequestBody {
  label: string;
  amount: number;
}

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const body = await readBody<UpdateExpenseRequestBody>(event);

  // TODO: Implement runtime validation on body.

  // Validate that 'id' parameter is passed.
  if (id === undefined) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Parameter "id" is required',
    });
  }

  // Update expense.
  await expenseStore.save({
    id,
    ...body,
  });
});
