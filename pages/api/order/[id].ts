import { supabaseServer } from '@/utils/supabase';

export default async function getOrder(req: any, res: any) {
  const { id } = req.query;

  try {
    const { data, error } = await supabaseServer.from('order').select('*').eq('id', id).single();
    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      return res.status(201).json(data);
    }
  } catch (error: any) {
    return res.status(error.response.status).json(error.response.data);
  }
}
