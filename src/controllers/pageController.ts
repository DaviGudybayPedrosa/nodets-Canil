import { Request, Response } from 'express';
import { Pet } from '../models/pet'
import { createMenuObject } from '../helpers/createMenuObject';


export const home = (req: Request, res: Response) => {
    
    let list = Pet.getAll();
    res.render('pages/page',{
        menu: createMenuObject('all'),
        banner:{
            tittle: 'Todos os animais', 
            background: 'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page',{
        menu: createMenuObject('dog'),
        banner:{
            tittle: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });

}

export const cats = (req: Request, res: Response) => {

    res.render('pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            tittle: 'Gatos',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {

    res.render('pages/page',{
        menu: createMenuObject('fish'), 
        banner:{
            tittle: 'Peixes',
            background: 'banner_fish.jpg'
        },
    });
}