import { NextResponse } from 'next/server';

export async function GET() {
  const width = 60;
  const height = 60;

  const icons = [
    {
      id: 'eos',
      width: width,
      height: height,
      path: '/icons/icon-logo.svg',
      name: '',
    },
    {
      id: 'images',
      width: width,
      height: height,
      path: '/icons/icon-images.svg',
      name: '',
    },
    {
      id: 'reminder',
      width: width + 6,
      height: height + 6,
      path: '/icons/icon-reminder.svg',
      name: '',
    },
    {
      id: 'contact',
      width: width + 16,
      height: height + 16,
      path: '/icons/icon-contact.svg',
      name: '',
    },
    {
      id: 'weather',
      width: width,
      height: height,
      path: '/icons/icon-weather.png',
      name: '',
    },
  ];

  return NextResponse.json(icons);
}
