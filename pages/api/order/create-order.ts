import { axiosServiceHandler } from '@/utils/axios';

export default async function createOrder(req: any, res: any) {
  const { body } = req;
  try {
    const response = await axiosServiceHandler.post(`order/create-order`, {
      ...body,
    });
    return res.status(200).json(response.data);
  } catch (error: any) {
    return res.status(error.response.status).json(error.response.data);
  }
}
