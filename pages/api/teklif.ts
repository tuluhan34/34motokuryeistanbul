import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type QuoteResponse = {
  ok: boolean;
  delivered: boolean;
  message: string;
  whatsappUrl: string;
  mailtoUrl: string;
};

const buildMessage = (payload: Record<string, string>) =>
  [
    'Merhaba, web sitesinden kurye teklif talebi geldi.',
    `Ad Soyad: ${payload.name}`,
    `Telefon: ${payload.phone}`,
    `Pickup: ${payload.pickup}`,
    `Teslim: ${payload.dropoff}`,
    `Gönderi Tipi: ${payload.shipmentType}`,
    `Not: ${payload.note || '-'}`
  ].join('\n');

export default async function handler(req: NextApiRequest, res: NextApiResponse<QuoteResponse>) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      delivered: false,
      message: 'Sadece POST isteği desteklenir.',
      whatsappUrl: '',
      mailtoUrl: ''
    });
  }

  const payload = {
    name: String(req.body?.name || '').trim(),
    phone: String(req.body?.phone || '').trim(),
    pickup: String(req.body?.pickup || '').trim(),
    dropoff: String(req.body?.dropoff || '').trim(),
    shipmentType: String(req.body?.shipmentType || '').trim(),
    note: String(req.body?.note || '').trim()
  };

  if (!payload.name || !payload.phone || !payload.pickup || !payload.dropoff || !payload.shipmentType) {
    return res.status(400).json({
      ok: false,
      delivered: false,
      message: 'Zorunlu alanlar eksik.',
      whatsappUrl: '',
      mailtoUrl: ''
    });
  }

  const message = buildMessage(payload);
  const whatsappUrl = `https://wa.me/905303219004?text=${encodeURIComponent(message)}`;
  const mailtoUrl = `mailto:bilgi@34kurye.com?subject=${encodeURIComponent('Kurye Teklif Talebi')}&body=${encodeURIComponent(message)}`;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    return res.status(200).json({
      ok: true,
      delivered: false,
      message: 'SMTP ayarları tanımlı değil. Teklif taslağı hazırlandı.',
      whatsappUrl,
      mailtoUrl
    });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: 'bilgi@34kurye.com',
    replyTo: payload.phone,
    subject: 'Web Sitesi Kurye Teklif Talebi',
    text: message
  });

  return res.status(200).json({
    ok: true,
    delivered: true,
    message: 'Teklif talebi e-posta ile iletildi.',
    whatsappUrl,
    mailtoUrl
  });
}