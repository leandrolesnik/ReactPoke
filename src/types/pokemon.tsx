export type pokemon = {
    id: number;
    order: number;
    name: string;
    height: number;
    weight: number;
    types: string[
        {
            type.name: string
        };
    ];
    abilities: any [
        ability: {
            slot: number;
            ability: {
                name: string;
            };
        }
    ];
    sprites: string {
        front_default: string;
        back_default: string;
        front_shiny: string;
        back_shiny: string;
        other: {
                home:{
                    front_default: string;
                }
        }
    };
    stats: any  {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    base_experience: number;
};

