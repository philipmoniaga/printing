import { PRODUCT_DATA } from './constant';

export default async function getProduct(req: any, res: any) {
  try {
    return res.status(200).json(PRODUCT_DATA);
  } catch (error: any) {
    return res.status(error.response.status).json(error.response.data);
  }
}
