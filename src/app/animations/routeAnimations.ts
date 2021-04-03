import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group,
    // ...
  } from '@angular/animations';

export const swipe =
  trigger('routeAnimations', [
    transition('leftSwipe => rightSwipe', [
      style({ 
        position: 'relative',
        overflow:'inherit'
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          padding:'1em'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('rightSwipe => leftSwipe', [
      style({ 
        position: 'relative',
        overflow:'inherit'
      }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          padding:'1em'
        })
      ]),
      query(':enter', [
        style({ right: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ right: '100%' }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ right: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);