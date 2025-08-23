interface CreateExpenseRequestBody {
  label: string;
  amount: number;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateExpenseRequestBody>(event);

  // TODO: Implement runtime validation on body.

  // Generate an id for the expense.
  const id = idGenerator.generateId();

  // Save the expense.
  await expenseStore.save({
    id,
    ...body,
  });
});
