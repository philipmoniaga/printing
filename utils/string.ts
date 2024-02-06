export const formatCurrency = (value: number | string) => {
  const v = value ? parseInt(`${value}`) : 0;

  const formatted = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  })
    .format(v)
    .replace(/\s/g, '');

  return formatted;
};
