import { supabaseServer } from '@/utils/supabase';

export default async function createOrder(req: any, res: any) {
  const {
    product,
    plan,
    package: orderPackage,
    print_side,
    print_corner,
    amount,
    price,
    file_url,
    link_url,
    sender_email,
    recipient_name,
    recipient_email,
    recipient_phone,
    address_city,
    zipcode,
    address_full,
    send_option,
    payment_method,
  } = req.body;

  try {
    const { data, error } = await supabaseServer
      .from('order')
      .insert({
        product,
        plan,
        package: orderPackage,
        print_side,
        print_corner,
        amount,
        price,
        file_url,
        link_url,
        sender_email,
        recipient_name,
        recipient_email,
        recipient_phone,
        address_city,
        zipcode,
        address_full,
        send_option,
        payment_method,
      })
      .select();

    if (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      return res.status(201).json(data);
    }
  } catch (error: any) {
    console.log('error ==>', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
