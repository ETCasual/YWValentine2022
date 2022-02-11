import React, { useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';

export const LoveBackground: React.FC = ({ children }) => {
  const [imageUrl] = useState<string>('/heartEmoji.png');
  const [loveDensity] = useState<number>(50);
  const [loveLife] = useState<number>(7000);
  const [loves, setLoves] = useState<HTMLDivElement[]>([]);
  const [_loveGeneratorTimer, setLoveGeneratorTimer] = useState<unknown | undefined>();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const loveRef = useRef<HTMLDivElement>(null);

  function loadImage() {
    return new Promise((resolve, reject) => {
      let Img = new Image();
      Img.src = imageUrl;
      Img.onload = resolve;
      Img.onerror = reject;
    });
  }

  function loveGenrator(loveDensity: number) {
    if (!loveRef.current || !backgroundRef.current) return;

    for (let i = 0; i < loveDensity; i++) {
      const loveClone = loveRef.current.cloneNode() as HTMLDivElement;
      loveClone.style.left = getRandomInt(0, 100) + '%';
      const delay = getRandomInt(0, loveLife);
      loveClone.style.animationDelay = delay + 'ms';
      loveClone.style.animationDuration = loveLife + 'ms';
      backgroundRef.current.appendChild(loveClone);
      setLoves([...loves, loveClone]);
      // removeSmoke(smokeClone, delay);
    }
  }

  function loveEater() {
    for (var index = 0; index < loves.length; index++) {
      if (loves[index].offsetTop < 0) {
        loves[index].remove();
        loves.splice(index, 0);
      }
    }
    window.requestAnimationFrame(loveEater);
  }

  function loveSwitch() {
    setLoveGeneratorTimer(
      setInterval(() => {
        loveGenrator(getRandomInt(1, loveDensity));
      }, loveLife)
    );
  }

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffectOnce(() => {
    console.info('Page loaded');
    loadImage().then(() => {
      console.info('Image Loaded');
      loveSwitch();
      loveEater();
    });
  });

  return (
    <div id="background" ref={backgroundRef}>
      <div className="love" ref={loveRef} />
      {children}
    </div>
  );
};
