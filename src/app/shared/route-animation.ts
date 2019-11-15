import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';
 export const slideInAnimation =
    trigger('routeAnimations', [
         transition('Board => Main', [
              query(':enter, :leave',
                   style({ position: 'fixed', width: '100%', height: '100%', top: '0' }), 
                   { optional: true }),        
              group([
                   query(':enter',[
                       style({ transform: 'translateX(100%)' }),
                       animate('1s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                       style({ transform:   'translateX(0%)'}),
                       animate('1s ease-in-out', 
                       style({ transform: 'translateX(-100%)' }))
                   ], { optional: true }),
              ])
         ]),
        //  transition('Home => *', [
        //       query(':enter, :leave', 
        //            style({ position: 'fixed',  width: '100%' }), 
        //            { optional: true }),
        //       group([
        //            query(':enter', [
        //                style({ transform: 'translateX(100%)' }), 
        //                animate('1s ease-in-out', 
        //                style({ transform: 'translateX(0%)' }))
        //            ], { optional: true }),
        //            query(':leave', [
        //                style({ transform: 'translateX(0%)' }),
        //                animate('1s ease-in-out', 
        //                style({ transform: 'translateX(-100%)' }))
        //                ], { optional: true }),
        //        ])
        //  ]),
        //  transition('About => Contact', [
        //        query(':enter, :leave', 
        //            style({ position: 'fixed', width: '100%' }), 
        //            { optional: true }),
        //        group([
        //            query(':enter', [
        //                style({ transform: 'translateX(100%)' }),
        //                animate('1s ease-in-out', 
        //                style({ transform: 'translateX(0%)' }))
        //            ], { optional: true }),
        //            query(':leave', [
        //                style({ transform: 'translateX(0%)' }),
        //                animate('1s ease-in-out', 
        //                style({ transform: 'translateX(-100%)' }))
        //            ], { optional: true }),
        //        ])
        //  ]),
         transition('Main => Board', [
               query(':enter, :leave', 
                   style({ position: 'fixed', width: '100%', height: '100%', top: '0' }),
                   { optional: true }),
               group([
                   query(':enter', [
                       style({ transform: 'translateX(-100%)' }),
                       animate('1s ease-in-out', 
                       style({ transform: 'translateX(0%)' }))
                   ], { optional: true }),
                   query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('1s ease-in-out', 
                        style({ transform: 'translateX(100%)' }))
                   ], { optional: true }),
               ])
        ]),
 ]);