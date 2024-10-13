import { NextResponse } from 'next/server';

export async function GET() {
  const icons = [
    {
      id: 'eos',
      width: 80,
      height: 80,
      path: '/icons/icon-logo.svg',
      name: '',
    },
    {
      id: 'images',
      width: 80,
      height: 80,
      path: '/icons/icon-images.svg',
      name: '',
    },
    {
      id: 'reminder',
      width: 80,
      height: 80,
      path: '/icons/icon-reminder.svg',
      name: '',
    },
  ];

  return NextResponse.json(icons);
}
