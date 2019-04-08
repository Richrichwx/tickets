export const findTickets = (status,id,tickets,newIdX,newIsActiveCurrency) => ({
  type: 'FIND_TICKETS',
  status,
  id,
  tickets,
  newIdX,
  newIsActiveCurrency
});