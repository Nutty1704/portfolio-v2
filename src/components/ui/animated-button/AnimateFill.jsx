"use client"

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AnimateFill = ({ btnId }) => {

  useGSAP(() => {
    if (!btnId) return;

    const element = document.getElementById(btnId);
    if (!element) {
      console.warn(`Element with id ${btnId} not found`);
      return;
    }

    const bg = document.querySelector(`#${btnId} .anim-bg`)
    const content = document.querySelector(`#${btnId} .anim-content`)

    gsap.to(bg, {
      top: '0%',
      left: '50%',
      borderRadius: '0%',
      width: '100%',
      duration: 0.4,
      ease: 'circ.in',
      onStart: () => content?.classList.add('!text-primary-foreground'),
      onComplete: () => element.classList.add('!border-transparent')
    });

  }, [btnId]);

  return null;
}

export default AnimateFill