"use client";

import dynamic from "next/dynamic";

import { forwardRef, Ref } from "react";

const Flight = dynamic(()=> import('./flight-icon'))
const Mike = dynamic(()=> import('./event-icon'))
const Settings = dynamic(()=> import('./system-icon'))
const Wheather = dynamic(()=> import('./wheather-icon'))
const Main_image = dynamic(()=>import('./main-image'))
const Destination = dynamic(()=>import('./destination-icon'))
const Payment = dynamic(()=>import('./payment-icon'))
const Airport = dynamic(()=>import('./airportDate-icon'))
const SubBrand_1 = dynamic(()=>import('./subbrand-1'))
const SubBrand_2 = dynamic(()=>import('./subbrand-2'))
const SubBrand_3 = dynamic(()=>import('./subbrand-3'))
const SubBrand_4 = dynamic(()=>import('./subbrand-4'))
const SubBrand_5 = dynamic(()=>import('./subbrand-5'))
const Facebook = dynamic(()=>import('./facebook'))
const Instagram = dynamic(()=>import('./instagram'))
const Twitter = dynamic(()=>import('./twitter'))
const Googleplay = dynamic(()=>import('./google-play'))
const AppleStore = dynamic(()=>import('./apple-store'))
const Background = dynamic(()=>import('./background-color'))
const PapperPlain = dynamic(()=>import('./papper-plain'))
const AngleTop = dynamic(()=>import('./anglet-top'))
const AngleBottom = dynamic(()=>import('./angle-bottom'))
const Love = dynamic(()=>import('./love-icon'))
const Leaf = dynamic(()=>import('./leaf-icon'))
const Building = dynamic(()=>import('./building'))
const Map = dynamic(()=>import('./map-icon'))
const Send = dynamic(()=>import('./send-icon'))
const Mosque = dynamic(()=>import('./mosque'))
const Sketch = dynamic(()=>import('./sketch-icon'))
const Navigation = dynamic(()=>import('./navigation'))
const SQ_Sketch = dynamic(()=>import('./square-sketch'))
const Plus_Decore = dynamic(()=>import('./plus-decore'))
const Decore = dynamic(()=>import('./decore-icon'))

export type IconName =
   "Flight" |
   "Mike" |
   "Settings" |
   "Wheather" |
   "Main_image" |
   "Destination" |
   "Payment" |
   "Airport" |
   "SubBrand_1" |
   "SubBrand_2" |
   "SubBrand_3" |
   "SubBrand_4" |
   "SubBrand_5" |
   "Facebook" |
   "Instagram" |
   "Twitter" |
   "Googleplay" |
   "AppleStore" |
   "Background" |
   "PapperPlain" |
   "AngleTop" |
   "AngleBottom" |
   "Map" |
   "Send" |
   "Building" |
   "Leaf" |
   "Love" |
   "Mosque" |
   "Sketch" |
   "Navigation" |
   "SQ_Sketch" |
   "Plus_Decore" |
   "Decore"
   ; 

const icons = {
  Flight,
  Wheather,
  Mike,
  Settings,
  Main_image,
  Destination,
  Payment,
  Airport,
  SubBrand_1,
  SubBrand_2,
  SubBrand_3,
  SubBrand_4,
  SubBrand_5,
  Facebook,
  Instagram,
  Twitter,
  Googleplay,
  AppleStore,
  Background,
  PapperPlain,
  AngleTop,
  AngleBottom,
  Love,
  Leaf,
  Building,
  Map,
  Send,
  Mosque,
  Sketch,
  Navigation,
  SQ_Sketch,
  Decore,
  Plus_Decore
};

export const IconNameSet = new Set(Object.keys(icons));

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "ref"> {
  name?: IconName;
  tryName?: string;
  size?: number | string;
  iconColor?: string;
  disable?: boolean;
}

export function isKeyof<T extends Record<string, unknown>>(
  type: string,
  record: T
  // @ts-expect-error
): type is keyof T {
  return type in record;
}

const _Icon = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const {
    name,
    tryName,
    size = "1.25rem",
    iconColor,
    width,
    height,
    ...rest
  } = props;

  
  const iconName = name ?? tryName;

  const IconComponent =
    iconName && isKeyof(iconName, icons) ? icons[iconName] : undefined;

  if (!IconComponent) return null;
  return (
    <IconComponent
      aria-label={name}
      width={width ?? size}
      height={height ?? size}
      {...rest}
      ref={ref}
      fill={iconColor}
    />
  );
};

export const Icon = forwardRef(_Icon);