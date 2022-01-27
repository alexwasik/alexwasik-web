import { ImageLoaderProps } from 'next/image'

const  myLoader = ({ src }: ImageLoaderProps) => {
  return src;
}

const openLink = (link: string) => {
  window.open(link, '_blank');
}

export {
  myLoader,
  openLink,
}
