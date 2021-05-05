gsap.from('.jumbotron img', { duration: 1, rotateY: 360, opacity: 0 });
gsap.from('.navbar', { duration: 1.5, y: '-100%', opacity: 0, ease: 'bounce' });
gsap.from('.display-4', { duration: 1, x: -50, opacity: 0, ease: 'back', delay: 0.5 });

gsap.registerPlugin(TextPlugin);
gsap.to('.lead', { duration: 2, delay: 1.5, text: 'Software Engineer' });