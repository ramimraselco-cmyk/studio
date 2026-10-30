/**
 * DEEDOX Footer Crowd Canvas Animation
 * OpenPeeps hand-drawn character crowd walking animation
 * Inspired by Szenia Zadvornykh (CodePen xxwbBQV) & Pablo Stanley (OpenPeeps)
 */
(function() {
  'use strict';

  function ensureGsap(callback) {
    if (typeof gsap !== 'undefined') {
      callback();
    } else {
      const script = document.createElement('script');
      script.src = '/assets/js/gsap.min.js';
      script.onload = callback;
      script.onerror = () => {
        // Fallback to CDN if local path fails
        const cdnScript = document.createElement('script');
        cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
        cdnScript.onload = callback;
        document.head.appendChild(cdnScript);
      };
      document.head.appendChild(script);
    }
  }

  function setupCrowdCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = {
      src: '/images/peeps/all-peeps.png',
      fallbackSrc: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png',
      rows: 15,
      cols: 7
    };

    const randomRange = (min, max) => min + Math.random() * (max - min);
    const randomIndex = (array) => randomRange(0, array.length) | 0;
    const removeFromArray = (array, i) => array.splice(i, 1)[0];
    const removeItemFromArray = (array, item) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array) => array[randomIndex(array) | 0];

    const resetPeep = ({ stage, peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const easeFn = (typeof gsap !== 'undefined' && gsap.parseEase) ? gsap.parseEase('power2.in') : (t) => t * t;
      const offsetY = 40 - 200 * easeFn(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX, endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }) => {
      const { startX, startY, endX } = props;
      const xDuration = randomRange(8, 15);
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.6, 1.4));
      tl.to(peep, {
        duration: xDuration,
        x: endX,
        ease: 'none'
      }, 0);
      tl.to(peep, {
        duration: yDuration,
        repeat: Math.round(xDuration / yDuration),
        yoyo: true,
        y: startY - 10
      }, 0);
      return tl;
    };

    const walks = [normalWalk];

    const createPeep = ({ image, rect }) => {
      const peep = {
        image,
        rect,
        width: rect[2],
        height: rect[3],
        x: 0,
        y: 0,
        anchorY: 0,
        scaleX: 1,
        walk: null,
        render: (c) => {
          c.save();
          c.translate(peep.x, peep.y);
          c.scale(peep.scaleX, 1);
          c.drawImage(
            peep.image,
            peep.rect[0],
            peep.rect[1],
            peep.rect[2],
            peep.rect[3],
            0,
            0,
            peep.width,
            peep.height
          );
          c.restore();
        }
      };
      return peep;
    };

    const img = new Image();
    const stage = { width: 0, height: 0 };
    const allPeeps = [];
    const availablePeeps = [];
    const crowd = [];

    const createPeeps = () => {
      const { rows, cols } = config;
      const width = img.naturalWidth || 1500;
      const height = img.naturalHeight || 700;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          createPeep({
            image: img,
            rect: [
              (i % rows) * rectWidth,
              ((i / rows) | 0) * rectHeight,
              rectWidth,
              rectHeight
            ]
          })
        );
      }
    };

    const addPeepToCrowd = () => {
      if (!availablePeeps.length) return null;
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({ peep, stage })
      });

      if (walk && walk.eventCallback) {
        walk.eventCallback('onComplete', () => {
          removePeepFromCrowd(peep);
          addPeepToCrowd();
        });
      }

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        const p = addPeepToCrowd();
        if (p && p.walk && p.walk.progress) {
          p.walk.progress(Math.random());
        }
      }
    };

    let isCanvasVisible = false;

    const render = () => {
      if (!isCanvasVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      const dpr = window.devicePixelRatio || 1;
      ctx.scale(dpr, dpr);

      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      stage.width = canvas.clientWidth || window.innerWidth;
      stage.height = canvas.clientHeight || 500;
      canvas.width = stage.width * dpr;
      canvas.height = stage.height * dpr;

      crowd.forEach((peep) => {
        if (peep.walk && peep.walk.kill) peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);

      initCrowd();
    };

    const start = () => {
      createPeeps();
      resize();

      if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
          entries.forEach(e => { isCanvasVisible = e.isIntersecting; });
        }, { rootMargin: '150px 0px 150px 0px' });
        obs.observe(canvas);
      } else {
        isCanvasVisible = true;
      }

      if (typeof gsap !== 'undefined' && gsap.ticker) {
        gsap.ticker.add(render);
      } else {
        function loop() {
          render();
          requestAnimationFrame(loop);
        }
        requestAnimationFrame(loop);
      }
      window.addEventListener('resize', resize);
    };

    img.onload = start;
    img.onerror = () => {
      if (img.src !== config.fallbackSrc) {
        img.src = config.fallbackSrc;
      }
    };

    img.src = config.src;
  }

  function initAll() {
    ensureGsap(() => {
      const canvases = document.querySelectorAll('.footer-crowd-canvas');
      canvases.forEach(c => setupCrowdCanvas(c));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }
})();
