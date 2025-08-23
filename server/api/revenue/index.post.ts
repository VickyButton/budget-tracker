interface CreateRevenueRequestBody {
  label: string;
  amount: number;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<CreateRevenueRequestBody>(event);

  // TODO: Implement runtime validation on body.

  // Generate an id for the revenue.
  const id = idGenerator.generateId();

  // Save the revenue.
  await revenueStore.save({
    id,
    ...body,
  });
});
