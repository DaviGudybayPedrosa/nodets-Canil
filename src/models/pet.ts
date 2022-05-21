type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Masculino' | 'Feminino';
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
};

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'labrador-retriver',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },

];

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },

    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },

    getFromName:(name: string): Pet[] => {
        return data.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1); 
    }

};




