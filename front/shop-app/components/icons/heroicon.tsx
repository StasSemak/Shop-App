"use client";

import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

interface Props {
  icon: string;
  solid?: boolean;
  className?: string;
}

const HeroIcon = (props: Props): JSX.Element => {
  const { icon, className, solid = false } = props;

  const { ...icons } = solid ? SolidIcons : OutlineIcons;

  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = twMerge('h-6 w-6 text-black', className);

  return (
    // @ts-ignore
    <Icon className={classes} />
  );
};

export default HeroIcon;