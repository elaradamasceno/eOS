import { NextResponse } from 'next/server';

export async function GET() {
  const width = 80;
  const height = 80;

  const icons = [
    {
      id: 'eos',
      width: width,
      height: height,
      path: '/icons/icon-logo.svg',
      name: 'eos',
    },
    {
      id: 'images',
      width: width,
      height: height,
      path: '/icons/icon-images.svg',
      name: 'images',
    },
    {
      id: 'reminder',
      width: width + 6,
      height: height + 6,
      path: '/icons/icon-reminder.svg',
      name: 'reminder',
    },
    {
      id: 'contact',
      width: width + 16,
      height: height + 16,
      path: '/icons/icon-contact.svg',
      name: 'contact',
    },
    {
      id: 'weather',
      width: width,
      height: height,
      path: '/icons/icon-weather.png',
      name: 'weather',
    },
    {
      id: 'brunoapi',
      width: width,
      height: height,
      path: '/icons/icon-bruno.png',
      name: 'brunoapi',
    },
    {
      id: 'clock',
      width: width,
      height: height,
      path: '',
      name: 'clock',
    },
    {
      id: 'notion',
      width: width,
      height: height,
      path: '/icons/icon-notion.jpg',
      name: 'notion',
    },
    {
      id: 'spotify',
      width: width,
      height: height,
      path: '/icons/icon-spotify.png',
      name: 'spotify',
    },
    {
      id: 'arc',
      width: width + 20,
      height: height + 20,
      path: '/icons/icon-arc.webp',
      name: 'arc',
    },
    {
      id: 'vscode',
      width: width + 20,
      height: height + 20,
      path: '/icons/icon-vscode.png',
      name: 'vscode',
    },
  ];

  return NextResponse.json(icons);
}
