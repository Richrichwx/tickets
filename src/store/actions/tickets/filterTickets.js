export const findTickets = (status,id,tickets,newIdX) => ({
  type: 'FIND_TICKETS',
  status,
  id,
  tickets,
  newIdX
});