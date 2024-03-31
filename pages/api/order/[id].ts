import { axiosServiceHandler } from '@/utils/axios';

export default async function getOrder(req: any, res: any) {
  const { id } = req.query;

  try {
    const response = await axiosServiceHandler.get(`order/${id}`);
    return res.status(200).json(response.data);
  } catch (error: any) {
    return res.status(error.response.status).json(error.response.data);
  }
}
